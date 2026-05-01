"use client";

import { ConversationProvider, useConversation } from "@elevenlabs/react";
import { useState } from "react";

const AGENT_ID = "agent_1901kqenpbgtezwb3695dqcjetvs";

function ConversationWidget() {
  const conversation = useConversation();
  const [micError, setMicError] = useState<string | null>(null);

  const start = async () => {
    setMicError(null);
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      setMicError(
        "Microphone access is required. Please allow mic access and try again."
      );
      return;
    }
    conversation.startSession({ agentId: AGENT_ID, connectionType: "websocket" });
  };

  const { status, isSpeaking } = conversation;
  const isConnected = status === "connected";
  const isConnecting = status === "connecting";
  const isError = status === "error";

  return (
    <>
      <style>{`
        @keyframes lab-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.18); opacity: 0.72; }
        }
        @keyframes lab-ring {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        .lab-orb {
          width: 72px;
          height: 72px;
          border-radius: 999px;
          background: var(--accent);
          position: relative;
          animation: lab-pulse 1.6s ease-in-out infinite;
        }
        .lab-orb.listening {
          background: var(--cox-blue);
          animation: lab-pulse 2.4s ease-in-out infinite;
        }
        .lab-orb::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 999px;
          background: inherit;
          animation: lab-ring 1.6s ease-out infinite;
        }
        .lab-orb.listening::before {
          animation-duration: 2.4s;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>

      <div
        style={{
          background: "var(--cox-black)",
          color: "#fff",
          padding: "clamp(48px, 7vw, 96px) clamp(32px, 5vw, 80px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 40,
          minHeight: 420,
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background grid */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent 0 60px, rgba(255,255,255,0.03) 60px 61px)," +
              "repeating-linear-gradient(0deg, transparent 0 60px, rgba(255,255,255,0.03) 60px 61px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 40,
            maxWidth: 560,
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-text)",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "rgba(255,255,255,0.45)",
                fontWeight: 500,
              }}
            >
              Coxwell Labs
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
                margin: 0,
                color: "#fff",
              }}
            >
              {isConnected
                ? isSpeaking
                  ? "Speaking…"
                  : "Listening…"
                : isConnecting
                ? "Connecting…"
                : "Talk to our AI."}
            </h2>
            {!isConnected && !isConnecting && (
              <p
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: 15,
                  lineHeight: 1.5,
                  margin: 0,
                  maxWidth: "40ch",
                }}
              >
                Ask about products, technical specs, pricing, or start a project
                brief — all in one conversation.
              </p>
            )}
          </div>

          {/* State: active */}
          {isConnected && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 32,
              }}
            >
              <div className={`lab-orb${isSpeaking ? "" : " listening"}`} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-text)",
                    fontSize: 13,
                    color: isSpeaking ? "var(--accent)" : "var(--cox-blue)",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  {isSpeaking ? "Agent speaking" : "Agent listening"}
                </span>
                <button
                  className="btn btn-outline-light btn-sm"
                  onClick={() => conversation.endSession()}
                >
                  End session
                </button>
              </div>
            </div>
          )}

          {/* State: connecting */}
          {isConnecting && (
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: "999px",
                border: "2px solid rgba(255,255,255,0.2)",
                borderTopColor: "var(--accent)",
                animation: "spin 0.7s linear infinite",
              }}
            />
          )}

          {/* State: idle or error */}
          {!isConnected && !isConnecting && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                alignItems: "center",
              }}
            >
              {(micError || isError) && (
                <p
                  style={{
                    color: "rgba(255,120,90,0.9)",
                    fontSize: 13,
                    margin: 0,
                    maxWidth: "36ch",
                    lineHeight: 1.4,
                  }}
                >
                  {micError ?? "Connection failed. Please try again."}
                </p>
              )}
              <button className="btn btn-primary btn-lg" onClick={start}>
                Start conversation →
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export function ElevenLabsWidget() {
  return (
    <ConversationProvider>
      <ConversationWidget />
    </ConversationProvider>
  );
}
