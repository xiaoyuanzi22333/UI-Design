import React from 'react';
import { ReactFlowProvider } from 'reactflow';
import Canvas from './Canvas/Canvas';

export default function App(){
    return(
            <ReactFlowProvider>
                <Canvas/>
            </ReactFlowProvider>
    );
}