import CodeBlock from "../preview/code-block";

export function GettingStartedNextjsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-white" id="installation">
          Next.js
        </h1>
        <p className="text-gray-400 text-lg">
          Install and configure Prex with Next.js.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white" id="create-project">
          Create project
        </h2>
        <p className="text-gray-300">Start by creating a new Prex project:</p>
        <CodeBlock
          language="bash"
          code={"npm create prex@latest"}
          showLineNumbers={false}
        />
      </div>
    </div>
  );
}
