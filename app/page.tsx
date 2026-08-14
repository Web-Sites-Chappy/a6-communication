import type { Metadata } from "next";
import HomeEditorial from "@/components/HomeEditorial";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
};

export default function Home() {
  return <HomeEditorial />;
}
