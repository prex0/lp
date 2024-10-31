import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function PreviewComponent({ children }: { children: React.ReactNode }) {
  return (
    <Tabs defaultValue="preview" className="w-full">
      <TabsList className="grid w-full grid-cols-2 w-[400px]">
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview" className="w-full">
        <Card>
          <CardHeader>
            <CardTitle>Preview</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">{children}</CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="code">
        <Card>
          <CardHeader>
            <CardTitle>Code</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <pre className="bg-gray-900 p-4 rounded-lg">
              <code className="text-gray-300">
                {`
  <Tabs defaultValue="preview" className="w-[400px]">
    <TabsList className="grid w-full grid-cols-2">
      <TabsTrigger value="preview">Preview</TabsTrigger>
      <TabsTrigger value="code">Code</TabsTrigger>
    </TabsList>
  </Tabs>
                `}
              </code>
            </pre>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
