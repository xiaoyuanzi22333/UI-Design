import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

class Param {
    constructor(name, type) {
        this.name = name
        this.type = type
    }
}

class Module {
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
    return(
        <div>
            <span>{paramName}</span> <br />
            <input name="text" onChange={onChange} className="nodrag" />
        </div>
    )
}

function NNmoduleToDiv({ data, isConnectable, module }) {
    params = module.params
    moduleName = module.name

    return (
        <div className={moduleName} >
            <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
            <span className='conv2d-title'>Conv2D</span>
            <br />
                {params.map((paramName,tyep)=>ParamInput(paramName,type))}
            <Handle type="source" position={Position.Right} id="b" isConnectable={isConnectable} />
        </div>
    )
}


