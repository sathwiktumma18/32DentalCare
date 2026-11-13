import { createFileRoute } from "@tanstack/react-router";

import { ClinicSite } from "@/components/dental/clinic-site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "32 Dental Care | Dental Clinic in Vijayawada" },
      { name: "description", content: "Explore the 32 Dental Care website concept in Mogalrajapuram, Vijayawada. Discover dental treatment information and contact details." },
      { property: "og:title", content: "32 Dental Care | Dental Clinic in Vijayawada" },
      { property: "og:description", content: "Explore the 32 Dental Care website concept in Mogalrajapuram, Vijayawada. Discover dental treatment information and contact details." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ClinicSite,
});
