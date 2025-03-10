import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckIcon } from "lucide-react";

export function PricingSection() {
  return (
    <div className="container py-24 lg:py-32">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Simple, transparent pricing
        </h2>
        <p className="mt-1 text-muted-foreground">
          Choose the plan that best suits your needs
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Free Plan */}
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Free</CardTitle>
            <div className="text-3xl font-bold">
              $0
              <span className="text-lg font-normal text-muted-foreground">
                /month
              </span>
            </div>
            <CardDescription>Perfect for getting started</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <CheckIcon className="mr-2 h-4 w-4" />
                USDC-ETH swap
              </li>
              <li className="flex items-center">
                <CheckIcon className="mr-2 h-4 w-4" />
                Basic support
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <a href="https://dashboard.prex0.com" className="w-full">
              <Button className="w-full" variant="outline">
                Get Started
              </Button>
            </a>
          </CardFooter>
        </Card>

        {/* Basic Plan */}
        <Card className="border-primary">
          <CardHeader className="text-center">
            <Badge className="mb-2 mx-auto">Popular</Badge>
            <CardTitle>Basic</CardTitle>
            <div className="text-3xl font-bold">
              $20
              <span className="text-lg font-normal text-muted-foreground">
                /month
              </span>
            </div>
            <CardDescription>For growing projects</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <CheckIcon className="mr-2 h-4 w-4" />
                Support for 1 type of token
              </li>
              <li className="flex items-center">
                <CheckIcon className="mr-2 h-4 w-4" />
                100 free transfers per month
              </li>
              <li className="flex items-center">
                <CheckIcon className="mr-2 h-4 w-4" />
                Arbitrum support
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <a href="https://dashboard.prex0.com" className="w-full">
              <Button className="w-full">Get Started</Button>
            </a>
          </CardFooter>
        </Card>

        {/* Pro Plan */}
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Pro</CardTitle>
            <div className="text-3xl font-bold">
              $980
              <span className="text-lg font-normal text-muted-foreground">
                /month
              </span>
            </div>
            <CardDescription>For enterprise & scale</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <CheckIcon className="mr-2 h-4 w-4" />
                7,500 free transfers monthly
              </li>
              <li className="flex items-center">
                <CheckIcon className="mr-2 h-4 w-4" />
                $0.05 per additional transfer
              </li>
              <li className="flex items-center">
                <CheckIcon className="mr-2 h-4 w-4" />
                Arbitrum support
              </li>
              <li className="flex items-center">
                <CheckIcon className="mr-2 h-4 w-4" />
                24/7 priority support
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <a href="mailto:support@prex0.com" className="w-full">
              <Button className="w-full" variant="outline">
                Contact Sales
              </Button>
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
