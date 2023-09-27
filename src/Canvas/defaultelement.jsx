const initialNodes = [
    {
      id: 'node-1',
      type: 'input',
      position: {x:200, y:-200},
      data: {label: 'input tensor'}
    },
    { id: 'node-2', 
      type: 'conv2dUpdater', 
      position: { x: 200, y: 0 }, 
    },
    { id: 'node-3', 
      type: 'conv2dUpdater', 
      position: { x: 400, y: 0 },  
    },
    { id: 'node-4', 
      type: 'conv2dUpdater', 
      position: { x: 200, y: 300 },  
    },
    {
      id: 'node-5',
      type: 'poolUpdater',
      targetPosition: 'top',
      position: { x: 0, y: 900 },
    },
    {
      id: 'node-6',
      type: 'BatchNormUpdater',
      targetPosition: 'top',
      position: { x: 300, y: 600 },
    },
    {
      id: 'node-7',
      type: 'output',
      targetPosition: 'top',
      position: { x: 200, y: 600 },
      data: { label: 'output tensor' },
    },
  ];
  
  
  const initialEdges = [
    { id: 'edge-1', source: 'node-1', target: 'node-2', sourceHandle: 'b',style: { strokeWidth: 3 }},
    { id: 'edge-2', source: 'node-1', target: 'node-3', sourceHandle: 'b',style: { strokeWidth: 3 }},
  ];

  export {initialNodes, initialEdges};