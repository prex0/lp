import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { IntroductionPage } from "@/components/docs/introduction";
import { GettingStartedPage } from "@/components/docs/gettingstarted";
import { GettingStartedNextjsPage } from "@/components/docs/start/nextjs";
import { GettingStartedManualPage } from "@/components/docs/start/manual";
import { ComponentsPage } from "@/components/docs/components/index";
import { ComponentsWalletPage } from "@/components/docs/components/wallet";
import { ComponentsTransferPage } from "@/components/docs/components/transfer";
import { DocsLayout } from "../../components/docs/layout";
import { RouterProvider } from "react-router-dom";

const docsRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DocsLayout />}>
      <Route path="/docs" element={<IntroductionPage />} />
      <Route path="/docs/getting-started" element={<GettingStartedPage />} />
      <Route
        path="/docs/getting-started/nextjs"
        element={<GettingStartedNextjsPage />}
      />
      <Route
        path="/docs/getting-started/manual"
        element={<GettingStartedManualPage />}
      />
      <Route path="/docs/components" element={<ComponentsPage />} />
      <Route
        path="/docs/components/wallet"
        element={<ComponentsWalletPage />}
      />
      <Route
        path="/docs/components/transfer"
        element={<ComponentsTransferPage />}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={docsRouter} />;
}

export default App;
