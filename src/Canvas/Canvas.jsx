import { useCallback, useRef, useState } from 'react';
import ReactFlow, { Background, BackgroundVariant, addEdge, applyEdgeChanges, applyNodeChanges, Controls } from 'reactflow';
import 'reactflow/dist/style.css';

import {InputTensor, OutputTensor, Conv2D, AvgPool2d, BatchNorm2D} from './LayerNode.jsx';

import './Canvas.css';
import { initialNodes,initialEdges } from './defaultelement.jsx';


// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = { 
  Input: InputTensor,
  Output: OutputTensor,
  conv2dUpdater: Conv2D, 
  poolUpdater: AvgPool2d,
  BatchNormUpdater: BatchNorm2D
};

let id = initialNodes.length;
const getId = () => `node(${++id})`;

function Canvas() {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  // console.log(reactFlowInstance);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  const onConnect = useCallback(
    (connection) => {
      const { source, target } = connection;
      let src_num = source.slice(4);
      let tag_num = target.slice(4);

      const newEdge = {
        id: `edge${src_num}-${tag_num}`,
        source,
        target,
        // type: 'customEdge',
        style: { strokeWidth: 3 }, // 设置边缘大小为 3 像素
      };
      setEdges((prevElements) => addEdge(newEdge, prevElements));
    }
  );

  return (
    <div className='canvas' ref={reactFlowWrapper} >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        onInit={setReactFlowInstance}
        onDrop={onDrop}
        onDragOver={onDragOver}
        fitView
      >
      <Controls position='bottom-right'/>
      <Background  variant={BackgroundVariant.Lines}/>
      </ReactFlow>
    </div>
  );
}

export default Canvas;
