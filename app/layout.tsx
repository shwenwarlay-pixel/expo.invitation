import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shwe Nwar Lay | Expo Invitation 2026",
  description: "An invitation to visit Shwe Nwar Lay at Myanmar Business Trade Show & Travel Expo 2026.",
  openGraph: {
    title: "Shwe Nwar Lay | Expo Invitation 2026",
    description: "Join us at Booth No. 13, Pan Pacific Yangon Hotel, 4–6 September 2026.",
  },
  twitter: { card: "summary", title: "Shwe Nwar Lay | Expo Invitation 2026", description: "Join us at Booth No. 13, Pan Pacific Yangon Hotel, 4–6 September 2026." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
