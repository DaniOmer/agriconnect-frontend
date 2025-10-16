import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import FontAwesomeSetup from "./fontawesome";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.theagriconnect.com"),
  title: {
    default: "Agriconnect",
    template: "%s · Agriconnect",
  },
  description: "La plateforme pour connecter producteurs et consommateurs.",
  openGraph: {
    title: "Agriconnect",
    description: "La plateforme pour connecter producteurs et consommateurs.",
    url: "https://www.theagriconnect.com",
    siteName: "Agriconnect",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <FontAwesomeSetup />
        <Header />
        <div className="pt-[75px] font-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
