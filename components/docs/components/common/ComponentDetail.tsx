export function ComponentDetail({
  children,
  id,
  title,
  description,
}: {
  children: React.ReactNode;
  id: string;
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-medium mb-4 text-white" id={id}>
          {title}
        </h1>
        <p className="text-gray-400 text-base">{description}</p>
      </div>
      {children}
    </div>
  );
}
