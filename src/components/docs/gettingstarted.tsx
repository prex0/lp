import { DocsLayout } from "./layout"
import { Header } from "../common/header"

export function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="text-white">
        <Header />
      </div>
      <DocsLayout currentPage="getting-started">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-white" id="installation">
              Installation
            </h1>
            <p className="text-gray-400 text-lg">
              Install and configure Prex with Vite.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white" id="create-project">
              Create project
            </h2>
            <p className="text-gray-300">
              Start by creating a new Vite project:
            </p>
            <pre className="bg-gray-900 p-4 rounded-lg">
              <code className="text-gray-300">
                npm create vite@latest my-app -- --template react-ts
              </code>
            </pre>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white" id="add-dependencies">
              Add dependencies
            </h2>
            <p className="text-gray-300">
              Install the required dependencies:
            </p>
            <pre className="bg-gray-900 p-4 rounded-lg">
              <code className="text-gray-300">
                cd my-app
                npm install @prex/core @prex/ui tailwindcss
              </code>
            </pre>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white" id="configure-tailwind">
              Configure Tailwind CSS
            </h2>
            <p className="text-gray-300">
              Run the following command to create a tailwind.config.js file:
            </p>
            <pre className="bg-gray-900 p-4 rounded-lg">
              <code className="text-gray-300">
                npx tailwindcss init -p
              </code>
            </pre>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white" id="update-tailwind-config">
              Update tailwind.config.js
            </h2>
            <p className="text-gray-300">
              Add the following to your tailwind.config.js file:
            </p>
            <pre className="bg-gray-900 p-4 rounded-lg">
              <code className="text-gray-300">
                {`/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
              </code>
            </pre>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white" id="configure-styles">
              Configure app styles
            </h2>
            <p className="text-gray-300">
              Add the following to your ./src/index.css file:
            </p>
            <pre className="bg-gray-900 p-4 rounded-lg">
              <code className="text-gray-300">
                {`@tailwind base;
@tailwind components;
@tailwind utilities;`}
              </code>
            </pre>
          </div>
        </div>
      </DocsLayout>
    </div>
  )
}
