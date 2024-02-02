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

class Param {
  name;
  type;
  constructor(name, type) {
      this.name = name;
      this.type = type;
  }
}

class KeyValue{
  name;
  value;
  constructor(name,value){
    this.name = name;
    this.value = value;
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

function ParamInput(name,type){
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return(
      <div key = {name}>
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
          <span className='conv2d-title'>{moduleName}</span>
          <br />
              {params.map((param)=>ParamInput(param.name,param.type))}
          <Handle type="source" position={Position.Right} id="b" isConnectable={isConnectable} />
      </div>
  )
}

function BatchNorm2D({ data, isConnectable}) {
  let param1 = new Param("num_feature", "int");
  let param2 = new Param("eps", "float");
  let param3 = new Param("momentum", "float");
  let module = new Module([param1,param2,param3],"BatchNorm2D");
  // console.log(module.params);
  return NNmoduleToDiv({data,isConnectable}, module);
}

function Conv1D({ data, isConnectable}) {

  let param1 = new Param("in_channel", "int");
  let param2 = new Param("out_channel", "int")
  let module = new Module([param1,param2],"Conv1D");
  // console.log(module.params);
  return NNmoduleToDiv({data,isConnectable}, module);
}

function AvgPool2d({ data, isConnectable }) {
  let param1 = new Param("Kernel_size", "int");
  let param2 = new Param("stride", "int");
  let module = new Module([param1,param2],"AvgPool2d");
  // console.log(module.params);
  return NNmoduleToDiv({data,isConnectable}, module);
}

function Conv2D({ data, isConnectable }) {
  let param1 = new Param("in_channel", "int");
  let param2 = new Param("out_channel", "int");
  let param3 = new Param("kernel_size", "int");
  let param4 = new Param("stride","int")
  let module = new Module([param1,param2,param3,param4],"AvgPool2d");
  // console.log(module.params);
  return NNmoduleToDiv({data,isConnectable}, module);
}

export {InputTensor, OutputTensor, Conv2D, AvgPool2d, BatchNorm2D, Conv1D};
