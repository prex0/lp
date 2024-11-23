import { DistributeSubmitExample } from "./submit-without-location";
import { ClaimDistributeExample } from "./claim-without-location";

export function ComponentDistributeWithoutLocation() {
  return (
    <div className="space-y-8">
      <div>
        <a href="#distribute-without-location-title">
          <h1
            className="text-4xl font-bold mb-4 text-white"
            id="distribute-without-location-title"
          >
            Distribute without location
          </h1>
        </a>
        <p className="text-gray-400 text-lg">
          How to create a link without setting location information.
        </p>
      </div>

      <DistributeSubmitExample />
      <ClaimDistributeExample />
    </div>
  );
}
