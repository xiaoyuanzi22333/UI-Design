import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

const handleStyle = { left: 10 };

function Conv2D({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
      <span className='conv2d-title'>Conv2D</span>
      <div>
        <label htmlFor="text">in_channels:</label>
        <input id="text1" name="text" onChange={onChange} className="nodrag" />
      </div>
      <div>
        <label htmlFor="text">out_channels:</label>
        <input id="text2" name="text" onChange={onChange} className="nodrag" />
      </div>
      <div>
        <label htmlFor="text">kernel_size:</label>
        <input id="text3" name="text" onChange={onChange} className="nodrag" />
      </div>
      <div>
        <label htmlFor="text">stride:</label>
        <input id="text4" name="text" onChange={onChange} className="nodrag" value={"None"}/>
      </div>
      {/* <Handle type="source" position={Position.Bottom} id="a" style={handleStyle} isConnectable={isConnectable}/> */}
      <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />
    </div>
  );
}

function AvgPool2d({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
      <span className='conv2d-title'>AvgPool2d</span>
      <div>
        <label htmlFor="text">kernel_size:</label>
        <input id="text1" name="text" onChange={onChange} className="nodrag" />
      </div>
      <div>
        <label htmlFor="text">stride:</label>
        <input id="text2" name="text" onChange={onChange} className="nodrag" value={"None"}/>
      </div>
      {/* <Handle type="source" position={Position.Bottom} id="a" style={handleStyle} isConnectable={isConnectable}/> */}
      <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />
    </div>
  );
}

function BatchNorm2D({ data, isConnectable }){
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
      <span className='conv2d-title'>BatchNorm2D</span>
      <div>
        <label htmlFor="text">num_feature:</label>
        <input id="text1" name="text" onChange={onChange} className="nodrag" />
      </div>
      <div>
        <label htmlFor="text">eps:</label>
        <input id="text2" name="text" onChange={onChange} className="nodrag" value={"1e-5"}/>
      </div>
      <div>
        <label htmlFor="text">momentum:</label>
        <input id="text2" name="text" onChange={onChange} className="nodrag" value={"0.1"}/>
      </div>
      {/* <Handle type="source" position={Position.Bottom} id="a" style={handleStyle} isConnectable={isConnectable}/> */}
      <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />
    </div>
  );
}

export {Conv2D, AvgPool2d, BatchNorm2D};
