import { useCallback, useState } from 'react';
import ReactFlow, { Background, addEdge, applyEdgeChanges, applyNodeChanges, Controls } from 'reactflow';
import 'reactflow/dist/style.css';

import {Conv2D, AvgPool2d} from './init/LayerNode.jsx';

import './App.css';


const rfStyle = {
  backgroundColor: '#B8CEFF',
};


const initialNodes = [
  { id: 'node-1', type: 'conv2dUpdater', position: { x: 200, y: 0 }, data: { value: 123 } },
  {
    id: 'node-2',
    type: 'poolUpdater',
    targetPosition: 'top',
    position: { x: 0, y: 300 },
    data: { label: 'node 2' },
  },
  {
    id: 'node-3',
    type: 'output',
    targetPosition: 'top',
    position: { x: 200, y: 300 },
    data: { label: 'node 3' },
  },
];


const initialEdges = [
  { id: 'edge-1', source: 'node-1', target: 'node-2', sourceHandle: 'b' },
  { id: 'edge-2', source: 'node-1', target: 'node-3', sourceHandle: 'b' },
];


// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = { conv2dUpdater: Conv2D, poolUpdater: AvgPool2d };

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
      style={rfStyle}
    >
    <Controls />
    <Background />
    </ ReactFlow>
  );
}

export default Flow;
