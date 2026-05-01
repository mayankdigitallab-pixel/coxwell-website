import type { Metadata } from "next";
import { ProjectsIndex } from "@/components/projects/ProjectsIndex";

export const metadata: Metadata = {
  title: "Projects — Coxwell",
  description: "A growing portfolio across airports, stadiums, civic and commercial projects.",
};

export default function ProjectsPage() {
  return <ProjectsIndex />;
}

