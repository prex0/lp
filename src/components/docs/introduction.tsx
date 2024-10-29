import { DocsLayout } from "./layout"
import { Header } from "../common/header"

export function IntroductionPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="text-white">
        <Header />
      </div>
      <DocsLayout currentPage="introduction">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-white" id="overview">Introduction</h1>
            <p className="text-gray-400 text-lg">
              Prex is a revolutionary platform for building decentralized applications with 
              built-in AI capabilities and innovative blockchain features.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white" id="key-features">Key Features</h2>
            <ul className="space-y-4 text-gray-300">
              <li>
                <strong className="block text-white">Gasless Transactions</strong>
                <p>Enable smooth user experiences with gasless operations for swaps and transfers.</p>
              </li>
              <li>
                <strong className="block text-white">Passkey Wallet Integration</strong>
                <p>Secure and user-friendly wallet management without complex private keys.</p>
              </li>
              <li>
                <strong className="block text-white">AI-Compatible UI Kit</strong>
                <p>Pre-built components optimized for AI-driven development workflows.</p>
              </li>
            </ul>
          </div>
        </div>
      </DocsLayout>
    </div>
  )
}
