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
    <Tabs defaultValue="preview" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
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
            <code>
              {`
              <Tabs defaultValue="preview" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
              </Tabs>
                `}
            </code>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
