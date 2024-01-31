import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

const handleStyle = { left: 10 };

function InputTensor({ data, isConnectable }) {
  return (
    <div className="text-updater-node">
      <span className='Input Tensor'>Input Tensor</span>
      {/* <Handle type="source" position={Position.Bottom} id="a" style={handleStyle} isConnectable={isConnectable}/> */}
      <Handle type="source" position={Position.Right} id="b" isConnectable={isConnectable} />
    </div>
  );
}

function OutputTensor({ data, isConnectable }) {
  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Left} id="b" isConnectable={isConnectable} />
      <span className='Output Tensor'>Output Tensor</span>
      {/* <Handle type="source" position={Position.Bottom} id="a" style={handleStyle} isConnectable={isConnectable}/> */}
    </div>
  );
}

function Conv2D({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
      <span className='conv2d-title'>Conv2D</span>
      <br/>
      <div>
        <span>in_channels:</span> <br/>
        <input name="text" onChange={onChange} className="nodrag" />
      </div>
      <div>
        <span>out_channels:</span> <br/>
        <input name="text" onChange={onChange} className="nodrag" />
      </div>
      <div>
        <span>kernel_size:</span> <br/>
        <input name="text" onChange={onChange} className="nodrag" />
      </div>
      <div>
        <span>stride:</span> <br/>
        <input name="text" onChange={onChange} className="nodrag" value={"None"}/>
      </div>
      {/* <Handle type="source" position={Position.Bottom} id="a" style={handleStyle} isConnectable={isConnectable}/> */}
      <Handle type="source" position={Position.Right} id="b" isConnectable={isConnectable} />
    </div>
  );
}

function AvgPool2d({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
      <span className='conv2d-title'>AvgPool2d</span>
      <br/>
      <div>
        <span>kernel_size:</span> <br/>
        <input name="text" onChange={onChange} className="nodrag" />
      </div>
      <div>
        <span>stride:</span> <br/>
        <input name="text" onChange={onChange} className="nodrag" value={"None"}/>
      </div>
      {/* <Handle type="source" position={Position.Bottom} id="a" style={handleStyle} isConnectable={isConnectable}/> */}
      <Handle type="source" position={Position.Right} id="b" isConnectable={isConnectable} />
    </div>
  );
}

function BatchNorm2D({ data, isConnectable }){
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
      <span className='conv2d-title'>BatchNorm2D</span>
      <br/>
      <div>
        <span>num_feature:</span> <br/>
        <input  name="text" onChange={onChange} className="nodrag" />
      </div>
      <div>
        <span>eps:</span> <br/>
        <input  name="text" onChange={onChange} className="nodrag" value={"1e-5"}/>
      </div>
      <div>
        <span>momentum:</span> <br/>
        <input name="text" onChange={onChange} className="nodrag" value={"0.1"}/>
      </div>
      {/* <Handle type="source" position={Position.Bottom} id="a" style={handleStyle} isConnectable={isConnectable}/> */}
      <Handle type="source" position={Position.Right} id="b" isConnectable={isConnectable} />
    </div>
  );
}


class Param {
  name;
  type;
  constructor(name, type) {
      this.name = name
      this.type = type
  }
}

class Module {
  params;
  name;
  constructor(params, moduleName) {
      this.params = params;
      this.name = moduleName;
  }
}

function ParamToDiv(paramter) {
  return (
      <div>
          <span>paramter.name</span> <br />
          <input name="text" onChange={onChange} className="nodrag" />
      </div>
  )
}

// {():int}

function ParamInput(name,type){
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return(
      <div>
          <span>{name}</span> <br />
          <input name="text" onChange={onChange} className="nodrag" />
      </div>
  )
}

function NNmoduleToDiv({ data, isConnectable}, module ) {


  let params = module.params
  let moduleName = module.name

  return (
      <div className="text-updater-node">
          <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
          <span className='conv2d-title'>Conv2D</span>
          <br />
              {params.map((param)=>ParamInput(param.name,param.type))}
          <Handle type="source" position={Position.Right} id="b" isConnectable={isConnectable} />
      </div>
  )
}



function Conv1D({ data, isConnectable}) {

  let param1 = new Param("in_channel", "int");
  let param2 = new Param("out_channel", "int")
  let module = new Module([param1,param2],"Conv1D");
  console.log(module)
  // console.log(module.params);
  return NNmoduleToDiv({data,isConnectable}, module);
}

// function Conv1D({ data, isConnectable }) {
//   const onChange = useCallback((evt) => {
//     console.log(evt.target.value);
//   }, []);

//   return (
//     <div className="text-updater-node">
//       <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
//       <span className='conv2d-title'>BatchNorm2D</span>
//       <br/>
//       <div>
//         <span>num_feature:</span> <br/>
//         <input  name="text" onChange={onChange} className="nodrag" />
//       </div>
//       <div>
//         <span>eps:</span> <br/>
//         <input  name="text" onChange={onChange} className="nodrag" value={"1e-5"}/>
//       </div>
//       <div>
//         <span>momentum:</span> <br/>
//         <input name="text" onChange={onChange} className="nodrag" value={"0.1"}/>
//       </div>
//       {/* <Handle type="source" position={Position.Bottom} id="a" style={handleStyle} isConnectable={isConnectable}/> */}
//       <Handle type="source" position={Position.Right} id="b" isConnectable={isConnectable} />
//     </div>
//   );
// }



// export function ModuleToFlowComponent(module){
//   return ({ data, isConnectable}) => NNmoduleToDiv(data, isConnectable, module);
// }

export {InputTensor, OutputTensor, Conv2D, AvgPool2d, BatchNorm2D, Conv1D};
