import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { LandingPageComponent } from './components/landing-page'
import { IntroductionPage } from './components/docs/introduction'
import { GettingStartedPage } from './components/docs/gettingstarted'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageComponent />} />
        <Route path="/docs" element={<IntroductionPage />} />
        <Route path="/docs/getting-started" element={<GettingStartedPage />} />
      </Routes>
    </Router>
  )
}

export default App
