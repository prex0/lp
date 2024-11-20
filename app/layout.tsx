import { Header } from "../components/common/header";
import { Footer } from "../components/common/footer"; // Import the Footer component
import "@prex0/uikit/styles.css";
import "./global.css";
import { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Prex: Like Stripe for Crypto",
  description:
    "Prex is a platform for building decentralized applications (DApps) on the Ethereum blockchain. It provides a suite of tools and services to streamline the development process and make it more efficient.",
  icons: {
    icon: "/assets/icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className="dark">
        <div id="root">
          <div className="min-h-screen bg-black text-white flex flex-col">
            <Header />
            {children}
            <Footer /> {/* Add the Footer component */}
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
