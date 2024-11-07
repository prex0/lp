import React, { useCallback } from "react";
import ReactFlow, {
  Node,
  Edge,
  addEdge,
  Background,
  Connection,
  ConnectionMode,
  useNodesState,
  useEdgesState,
  NodeTypes,
  FitViewOptions,
} from "reactflow";
import "reactflow/dist/style.css";
import {
  Wallet,
  Key,
  FileText,
  Cog,
  FileCode,
  Repeat,
  Zap,
  Code,
} from "lucide-react";

const CustomGroup = ({ data }: { data: { width: number; height: number } }) => (
  <div
    style={{
      width: data.width,
      height: data.height,
      border: "2px dashed #888",
      borderRadius: "8px",
      position: "absolute",
      zIndex: -1,
    }}
  />
);

const nodeTypes: NodeTypes = {
  groupNode: CustomGroup,
  custom: ({ data }) => <div>{data.label}</div>,
};

const initialNodes: Node[] = [
  {
    id: "1",
    type: "input",
    data: {
      label: (
        <div className="flex items-center">
          <Wallet className="mr-2" size={18} />
          <span>EOA with WalletApp</span>
        </div>
      ),
    },
    position: { x: 50, y: 20 },
    style: {
      background: "#FF3B30",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      fontFamily: "Satoshi, sans-serif",
      padding: "10px",
    },
  },
  {
    id: "2",
    type: "input",
    data: {
      label: (
        <div className="flex items-center">
          <Key className="mr-2" size={18} />
          <span>AA with Passkey</span>
        </div>
      ),
    },
    position: { x: 300, y: 20 },
    style: {
      background: "#34C759",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      fontFamily: "Satoshi, sans-serif",
      padding: "10px",
    },
  },
  {
    id: "3",
    data: {
      label: (
        <div className="flex items-center">
          <FileText className="mr-2" size={18} />
          <span>Intent Order</span>
        </div>
      ),
    },
    position: { x: 300, y: 100 },
    style: {
      background: "#5AC8FA",
      color: "#000",
      border: "none",
      borderRadius: "8px",
      fontFamily: "Satoshi, sans-serif",
      padding: "10px",
    },
  },
  {
    id: "4",
    data: {
      label: (
        <div className="flex items-center">
          <Cog className="mr-2" size={18} />
          <span>Facilitator</span>
        </div>
      ),
    },
    position: { x: 300, y: 200 },
    style: {
      background: "#007AFF",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      fontFamily: "Satoshi, sans-serif",
      padding: "10px",
    },
  },
  {
    id: "5",
    data: {
      label: (
        <div className="flex items-center">
          <FileCode className="mr-2" size={18} />
          <span>Handling Contract</span>
        </div>
      ),
    },
    position: { x: 300, y: 300 },
    style: {
      background: "#FFCC00",
      color: "#000",
      border: "none",
      borderRadius: "8px",
      fontFamily: "Satoshi, sans-serif",
      padding: "10px",
    },
  },
  {
    id: "8",
    type: "output",
    data: {
      label: (
        <div className="flex items-center">
          <Repeat className="mr-2" size={18} />
          <span>Swap Contract</span>
        </div>
      ),
    },
    position: { x: 175, y: 400 },
    style: {
      background: "#5856D6",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      fontFamily: "Satoshi, sans-serif",
      padding: "10px",
    },
  },
  {
    id: "group1",
    type: "groupNode",
    position: { x: 280, y: 0 },
    style: { width: 200, height: 380 },
    data: { width: 200, height: 380 },
  },
  {
    id: "horizontal-line",
    type: "custom",
    data: { label: "" },
    position: { x: 50, y: 190 },
    style: {
      width: 450,
      height: 1,
      border: "none",
      borderTop: "2px dashed #4A90E2",
      backgroundImage:
        "linear-gradient(to right, #4A90E2 50%, transparent 50%)",
      backgroundSize: "20px 1px",
      backgroundRepeat: "repeat-x",
    },
  },
  {
    id: "onchain-text",
    type: "custom",
    data: { label: "OnChain" },
    position: { x: 50, y: 200 },
    style: {
      color: "#fff",
      fontFamily: "Satoshi, sans-serif",
      fontSize: "14px",
      fontWeight: "bold",
    },
  },
  {
    id: "prex-coverage",
    type: "custom",
    data: { label: "Prex Coverage" },
    position: { x: 280, y: -30 },
    style: {
      color: "#FFD700",
      fontFamily: "Satoshi, sans-serif",
      fontSize: "18px",
      fontWeight: "bold",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      padding: "5px 10px",
      borderRadius: "4px",
    },
  },
];

const initialEdges: Edge[] = [
  {
    id: "e1-3",
    source: "1",
    target: "3",
    animated: true,
    style: { stroke: "#fff" },
    type: "smoothstep",
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    animated: true,
    style: { stroke: "#fff" },
    label: "Sign Order",
    labelStyle: {
      fill: "#fff",
      fontWeight: 700,
      fontFamily: "Satoshi, sans-serif",
    },
    labelBgStyle: { fill: "rgba(0,0,0,0.7)", fillOpacity: 0.7 },
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    animated: true,
    style: { stroke: "#fff" },
    label: "Pass Order",
    labelStyle: {
      fill: "#fff",
      fontWeight: 700,
      fontFamily: "Satoshi, sans-serif",
    },
    labelBgStyle: { fill: "rgba(0,0,0,0.7)", fillOpacity: 0.7 },
  },
  {
    id: "e4-5",
    source: "4",
    target: "5",
    animated: true,
    style: { stroke: "#fff" },
    label: "Add Gas",
    labelStyle: {
      fill: "#fff",
      fontWeight: 700,
      fontFamily: "Satoshi, sans-serif",
    },
    labelBgStyle: { fill: "rgba(0,0,0,0.7)", fillOpacity: 0.7 },
  },
  {
    id: "e5-8",
    source: "5",
    target: "8",
    animated: true,
    style: { stroke: "#fff" },
    label: "Swap",
    labelStyle: {
      fill: "#fff",
      fontWeight: 700,
      fontFamily: "Satoshi, sans-serif",
    },
    labelBgStyle: { fill: "rgba(0,0,0,0.7)", fillOpacity: 0.7 },
    type: "smoothstep",
  },
];

function FeatureColumn({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-gray-800">
      <div className="mb-4 p-3 bg-white/10 rounded-full">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function DarkBusinessFlowDiagram() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => {
      setEdges((eds) => addEdge({ ...params }, eds));
    },
    [setEdges]
  );

  const fitViewOptions: FitViewOptions = {
    padding: 0.1,
    includeHiddenNodes: true,
  };

  return (
    <div style={{ width: "100%", height: "100%", minHeight: "400px" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        connectionMode={ConnectionMode.Loose}
        fitView
        fitViewOptions={fitViewOptions}
        style={{ background: "#000" }}
        nodeTypes={nodeTypes}
        zoomOnScroll={false}
        zoomOnPinch={false}
        panOnScroll={false}
        panOnDrag={false}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        minZoom={0.5}
        maxZoom={1}
        preventScrolling={false}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#444" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}

export function LandingPageComponent() {
  return (
    <div className="flex-grow flex items-center justify-center">
      <div className="container mx-auto px-4 py-8 md:py-16 bg-black">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight sm:text-5xl mb-4 md:mb-6">
              Prex: Like Stripe for Crypto
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
              Launch your own Uniswap-like app on mainnet in minutes, powered by
              AI and blockchain innovation.
            </p>

            <div className="list-disc list-inside text-lg md:text-xl text-gray-300 mb-6 md:mb-8 space-y-4">
              <div className="flex items-center gap-4">
                <Zap className="w-6 h-6" />
                <div>Gasless Transactions</div>
              </div>
              <div className="flex items-center gap-4">
                <Key className="w-6 h-6" />
                <div>Passkey Wallet</div>
              </div>
              <div className="flex items-center gap-4">
                <Code className="w-6 h-6" />
                <div>AI Compatible UI Kit</div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://swap.prex-app.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 text-gray-300 hover:bg-white/10 backdrop-blur-sm border border-gray-700 font-satoshi px-4 py-2 h-10 rounded-md text-base flex items-center justify-center"
              >
                Demo
              </a>

              <a
                href="https://dashboard.prex0.com"
                className="bg-white/5 text-gray-300 hover:bg-white/10 backdrop-blur-sm border border-gray-700 font-satoshi px-4 py-2 h-10 rounded-md text-base flex items-center justify-center"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-[400px] md:h-[500px] mt-8 lg:mt-0">
            {<DarkBusinessFlowDiagram />}
          </div>
        </div>

        <div className="mt-16 mb-8">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureColumn
              icon={<Zap className="w-8 h-8" />}
              title="Gasless Transactions"
              description="Enhance user transaction experience with gasless swaps and link transfers. Designed to be user-friendly, making the use of cryptocurrencies easy for beginners."
            />
            <FeatureColumn
              icon={<Key className="w-8 h-8" />}
              title="Passkey Wallet"
              description="Passkey Wallet boasts high usability, balancing security and convenience. Free from complex private key management, enabling smooth transactions."
            />
            <FeatureColumn
              icon={<Code className="w-8 h-8" />}
              title="AI Compatible UI Kit"
              description="Provides UI components that are highly compatible with AI development. Significantly improves development efficiency, supporting the rapid construction of innovative DApps."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
