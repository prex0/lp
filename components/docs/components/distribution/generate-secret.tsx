import CodeBlock from "../../preview/code-block";

const registerSecretCode = `import { NextResponse } from 'next/server';
import { validateDistributionAndSecret } from '@prex0/prex-client';
import type { RegisterServerGeneratedSecretInput } from '@prex0/prex-client';
import { setSecret } from '@/lib/storage';

export async function POST(request: Request) {
  const requestBody: RegisterServerGeneratedSecretInput = await request.json();

  console.log(requestBody);

  try {
    const isValid = await validateDistributionAndSecret(requestBody);

    if (!isValid) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    await setSecret(requestBody.distributionId, requestBody.secret);
    await setSecret(requestBody.distributionId + '_sc', requestBody.shortCode);
    
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error registering secret:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}`;

const generateSecretCode = `import { NextResponse } from 'next/server';
import { createServerGeneratedSecret } from '@prex0/prex-client';
import type { ServerGeneratedSecretInput } from '@prex0/prex-client';
import { getSecret } from '@/lib/storage';

export async function POST(request: Request) {
  const requestBody: ServerGeneratedSecretInput = await request.json();
  const secret = await getSecret(requestBody.distributionId);
  const shortCode = await getSecret(requestBody.distributionId + '_sc');

  if (!secret) {
    return NextResponse.json({ message: 'Secret not found' }, { status: 404 });
  }

  if (!shortCode) {
    return NextResponse.json({ message: 'Short code not found' }, { status: 404 });
  }

  if (requestBody.shortCode !== shortCode.toString()) {
    return NextResponse.json({ message: 'Short code mismatch' }, { status: 400 });
  }

  try {
    const generatedSecret = await createServerGeneratedSecret(
      secret.toString(),
      requestBody
    );

    return NextResponse.json({ secret: generatedSecret }, { status: 200 });
  } catch (error) {
    console.error('Error generating secret:', error);
    return NextResponse.json({ message: 'Error generating secret' }, { status: 500 });
  }
}
`;

const storageCode = `import { createStorage } from "unstorage"
import vercelKVDriver from "unstorage/drivers/vercel-kv"

const storage = createStorage({
  driver: vercelKVDriver({
    url: process.env.KV_REST_API_URL,
    token: process.env.KV_REST_API_TOKEN,
    base: 'distribution',
    env: false,
  })
})

export function getSecret(distributionId: string) {
  return storage.getItem(distributionId);
}

export function setSecret(distributionId: string, secret: string) {
  return storage.setItem(distributionId, secret);
}
`;

const codeSubmit = `<DistributionSubmit token={USDC_TOKEN_ARBITRUM} getURL={getURL} secretType='server_generated' registerPath='/api/register'>
...
  <DistributionSubmitCode showDownloadButton/>
</DistributionSubmit>
`;

const codeClaim = `
<DistributionReceive generateSecretPath='/api/generate'>
  ...
</DistributionReceive>
`;

export function ComponentDistributeGenerateSecret() {
  return (
    <div className="space-y-8">
      <div>
        <a href="#generate-secret-title">
          <h1
            className="text-4xl font-bold mb-4 text-white"
            id="generate-secret-title"
          >
            Generate One-Time Secret
          </h1>
        </a>
        <p className="text-gray-400 text-lg">
          Generate one-time secret in server-side for secure distribution.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white" id="register-secret">
          Register secret endpoint
        </h2>
        <p className="text-gray-300">
          Please add the following code to `app/api/register/route.ts`. This
          code saves the secret using distributionId as the key.
        </p>
        <CodeBlock
          language="typescript"
          code={registerSecretCode}
          showLineNumbers={false}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white" id="generate-secret">
          Generate one-time secret endpoint
        </h2>
        <p className="text-gray-300">
          Please add the following code to `app/api/generate/route.ts`. This
          code generates an one-time secret that can be used only once from the
          secret.
        </p>
        <CodeBlock
          language="typescript"
          code={generateSecretCode}
          showLineNumbers={false}
        />
      </div>

      <div className="space-y-4">
        <h2
          className="text-2xl font-semibold text-white"
          id="storage-vercel-kv"
        >
          Storage using Vercel KV
        </h2>
        <p className="text-gray-300">
          Please add the following code to `lib/storage.ts`.
        </p>
        <CodeBlock
          language="typescript"
          code={storageCode}
          showLineNumbers={false}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white" id="submit-component">
          How to submit
        </h2>
        <p className="text-gray-300">
          You can get the secret and the URL(or Code) after submit.
        </p>
        <CodeBlock language="tsx" code={codeSubmit} showLineNumbers={false} />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white" id="claim-component">
          How to claim
        </h2>
        <p className="text-gray-300">
          Specify the endpoint to generate secret.
        </p>
        <CodeBlock language="tsx" code={codeClaim} showLineNumbers={false} />
      </div>
    </div>
  );
}
