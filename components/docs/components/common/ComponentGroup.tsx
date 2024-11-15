export function ComponentGroup({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-white" id="installation">
          {title}
        </h1>
        <p className="text-gray-400 text-base">{description}</p>
      </div>
      {children}
    </div>
  );
}
