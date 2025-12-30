import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "THE SELECT MATCH - High-End Matchmaking & Luxury Dating Concierge",
  description: "Real relationships. No swiping. White-glove introductions. For six years, The Select Match has operated discreetly, introducing successful, like-minded professionals through private networks and referrals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
