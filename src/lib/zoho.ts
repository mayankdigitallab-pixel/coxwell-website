type ZohoTokenResponse =
  | {
      access_token: string;
      expires_in: number;
      api_domain?: string;
      token_type?: string;
    }
  | { error: string; error_description?: string };

let cached: { token: string; expiresAt: number } | null = null;

function getEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing environment variable: ${name}`);
  return v;
}

export async function getZohoAccessToken(): Promise<string> {
  const now = Date.now();
  if (cached && now < cached.expiresAt) return cached.token;

  const clientId = getEnv("ZOHO_CLIENT_ID");
  const clientSecret = getEnv("ZOHO_CLIENT_SECRET");
  const refreshToken = getEnv("ZOHO_REFRESH_TOKEN");

  const url = new URL("https://accounts.zoho.in/oauth/v2/token");
  url.searchParams.set("refresh_token", refreshToken);
  url.searchParams.set("client_id", clientId);
  url.searchParams.set("client_secret", clientSecret);
  url.searchParams.set("grant_type", "refresh_token");

  const res = await fetch(url.toString(), { method: "POST" });
  const json = (await res.json()) as ZohoTokenResponse;

  if (!res.ok || "error" in json) {
    const msg =
      "error" in json
        ? `${json.error}${json.error_description ? `: ${json.error_description}` : ""}`
        : `Zoho token error (${res.status})`;
    throw new Error(msg);
  }

  const ttlMs = Math.max(30_000, (json.expires_in ?? 3600) * 1000 - 60_000);
  cached = { token: json.access_token, expiresAt: Date.now() + ttlMs };
  return json.access_token;
}

export type CreateLeadInput = {
  fullName: string;
  company?: string;
  email: string;
  phone?: string;
  projectType?: string;
  area?: string;
  brief?: string;
};

function nameToLastName(fullName: string): string {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "Unknown";
  if (parts.length === 1) return parts[0];
  return parts[parts.length - 1];
}

export async function createZohoLead(input: CreateLeadInput) {
  const token = await getZohoAccessToken();
  const ownerId = process.env.ZOHO_OWNER_ID;

  const body = {
    data: [
      {
        Last_Name: nameToLastName(input.fullName),
        Full_Name: input.fullName,
        Company: input.company || "—",
        Email: input.email,
        Phone: input.phone || undefined,
        Lead_Source: "Website",
        Description: [
          input.projectType ? `Project type: ${input.projectType}` : null,
          input.area ? `Approx area: ${input.area}` : null,
          input.brief ? `Brief: ${input.brief}` : null,
        ]
          .filter(Boolean)
          .join("\n"),
        ...(ownerId ? { Owner: { id: ownerId } } : {}),
      },
    ],
    trigger: ["workflow"],
  };

  const res = await fetch("https://www.zohoapis.in/crm/v2/Leads", {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Zoho CRM error (${res.status}): ${text || "Request failed"}`);
  }

  return res.json();
}

