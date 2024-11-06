import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { LandingPageComponent } from './components/landing-page'
import { IntroductionPage } from './components/docs/introduction'
import { GettingStartedPage } from './components/docs/gettingstarted'
import { TelihaLandingPageComponent } from './components/teliha-landing-page'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageComponent />} />
        <Route path="/docs" element={<IntroductionPage />} />
        <Route path="/docs/getting-started" element={<GettingStartedPage />} />
        <Route path="/teliha/ja" element={<TelihaLandingPageComponent />} />
      </Routes>
    </Router>
  )
}

export default App
