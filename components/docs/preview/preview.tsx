import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeBlock from "@/components/docs/preview/code-block";

export function PreviewComponent({
  children,
  code,
}: {
  children: React.ReactNode;
  code: string;
}) {
  return (
    <Tabs defaultValue="preview" className="w-full">
      <TabsList className="grid grid-cols-2 w-[240px]">
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview" className="w-full">
        <Card className="p-2 w-full">
          <CardContent className="flex justify-center items-center w-full min-h-[200px] p-5">
            {children}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="code" className="w-full">
        <CodeBlock code={code} />
      </TabsContent>
    </Tabs>
  );
}
