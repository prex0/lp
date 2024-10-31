import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function GettingStartedPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-4 text-white" id="installation">
        Getting Started
      </h1>

      <div className="grid grid-cols-2 gap-4">
        <Link to="/docs/getting-started/nextjs">
          <Card>
            <CardHeader>
              <CardTitle>Next.js</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Install and configure Prex with Next.js.</p>
            </CardContent>
          </Card>
        </Link>
        <Link to="/docs/getting-started/manual">
          <Card>
            <CardHeader>
              <CardTitle>Manual Installation</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Install and configure Prex with Next.js.</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
