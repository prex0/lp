import { Header } from "../components/common/header";
import "@prex0/uikit/styles.css";
import "./global.css";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Prex - Revolutionize DApp Development -",
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
          </div>
        </div>
      </body>
    </html>
  );
}
