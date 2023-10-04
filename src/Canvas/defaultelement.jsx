const initialNodes = [
    {
      id: 'node(1)',
      type: 'Input',
      position: {x:-200, y:0}
      
    },
    { id: 'node(2)', 
      type: 'conv2dUpdater', 
      position: { x: 0, y: -100 }
    },
    { id: 'node(3)', 
      type: 'conv2dUpdater', 
      position: { x: 0, y: 200 }
    },
    { id: 'node(4)', 
      type: 'conv2dUpdater', 
      position: { x: 300, y: -100 }
    },
    {
      id: 'node(5)',
      type: 'poolUpdater',
      targetPosition: 'top',
      position: { x: 600, y: 0 }
    },
    {
      id: 'node(6)',
      type: 'BatchNormUpdater',
      targetPosition: 'top',
      position: { x: 900, y: 0 }
    },
    {
      id: 'node(7)',
      type: 'Output',
      targetPosition: 'top',
      position: { x: 1200, y: 0 }
    },
  ];
  
  
  const initialEdges = [
    { id: 'edge(1)-(2)', source: 'node(1)', target: 'node(2)',style: { strokeWidth: 3 }},
    { id: 'edge(2)-(4)', source: 'node(2)', target: 'node(4)',style: { strokeWidth: 3 }},
    { id: 'edge(1)-(3)', source: 'node(1)', target: 'node(3)',style: { strokeWidth: 3 }},
    { id: 'edge(4)-(5)', source: 'node(4)', target: 'node(5)',style: { strokeWidth: 3 }},
    { id: 'edge(3)-(5)', source: 'node(3)', target: 'node(5)',style: { strokeWidth: 3 }},
    { id: 'edge(5)-(6)', source: 'node(5)', target: 'node(6)',style: { strokeWidth: 3 }},
    { id: 'edge(6)-(7)', source: 'node(6)', target: 'node(7)',style: { strokeWidth: 3 }},
  ];

  export {initialNodes, initialEdges};