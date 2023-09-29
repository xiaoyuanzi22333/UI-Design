import { useCallback, useState } from 'react';
import ReactFlow, { Background, BackgroundVariant, addEdge, applyEdgeChanges, applyNodeChanges, Controls } from 'reactflow';
import 'reactflow/dist/style.css';

import {Conv2D, AvgPool2d, BatchNorm2D} from './LayerNode.jsx';

import './Canvas.css';
import { initialNodes,initialEdges } from './defaultelement.jsx';
import Sider from '../Sider/Sider'

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = { 
  conv2dUpdater: Conv2D, 
  poolUpdater: AvgPool2d,
  BatchNormUpdater: BatchNorm2D
};


function Canvas() {
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
    (connection) => {
      const { source, target } = connection;
      const newEdge = {
        id: `edge-${source}-${target}`,
        source,
        target,
        // type: 'customEdge',
        style: { strokeWidth: 3 }, // 设置边缘大小为 3 像素
      };
      setEdges((prevElements) => addEdge(newEdge, prevElements));
    }
  );

  return (
    <div className='canvas' >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
      <Controls position='bottom-right'/>
      <Background  variant={BackgroundVariant.Lines}/>
      </ReactFlow>
    </div>
  );
}

export default Canvas;
