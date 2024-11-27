import { RequestListExample } from "./request-list";
import { CustomRequestListExample } from "./custom-request-list";

export function ComponentDistributeList() {
  return (
    <div className="space-y-8">
      <div>
        <a href="#list-title">
          <h1 className="text-4xl font-bold mb-4 text-white" id="list-title">
            Drop Link List
          </h1>
        </a>
        <p className="text-gray-400 text-lg">
          How to display a list of drop links.
        </p>
      </div>

      <RequestListExample />
      <CustomRequestListExample />
    </div>
  );
}
