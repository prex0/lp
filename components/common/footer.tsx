import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <a href="https://www.teliha.jp" className="text-sm hover:underline">
              &copy; {new Date().getFullYear()} Teliha, Inc.
            </a>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/support" className="hover:text-white">
              Support
            </Link>
            <Link href="/commercial-transactions" className="hover:text-white">
              特定商取引法に基づく表記
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
