import React from "react"
import { Link } from "react-router-dom"
import { LeftSidebar } from "./navigation/left-sidebar"
import { RightSidebar } from "./navigation/right-sidebar"

interface DocsLayoutProps {
  children: React.ReactNode
  currentPage: 'introduction' | 'getting-started' | 'features'
}

export function DocsLayout({ children, currentPage }: DocsLayoutProps) {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4">
        <div className="flex gap-6">
          <LeftSidebar />
          <div className="flex-1 max-w-3xl py-16">
            <div className="prose prose-invert prose-headings:text-white prose-p:text-gray-300">
              {children}
            </div>
          </div>
          <RightSidebar page={currentPage} />
        </div>
      </div>
    </div>
  )
}
