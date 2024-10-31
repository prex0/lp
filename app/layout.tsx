import { Header } from "../components/common/header"
import "./global.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/assets/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My App</title>
        <meta name="description" content="My App is a..." />
      </head>
      <body>
        <div id="root">
          <div className="min-h-screen bg-black text-white flex flex-col">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}