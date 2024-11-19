import React from "react";

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
          <div className="flex space-x-4"></div>
        </div>
      </div>
    </footer>
  );
}
