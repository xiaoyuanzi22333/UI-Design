import React, {useState} from 'react';
import Sidernodes from './SiderNodes'
import classnames from 'classnames';
import './Sider.css'

function Sider() {
  const [isOpen, setIsOpen] = useState(false);
  const onDragStart = (event, nodeType) => {
    console.log("output the nodetype");
    console.log(nodeType);
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };  

  return (
    <div className='sider'>
      <span className='sider_title'> Layer Choice </ span>
      <div className="nodes">
          {Sidernodes?.map((x) => (
            <div
              key = {x.data.label}
              className={classnames(["sider-node", x.data.label])}
              onDragStart={(event) => onDragStart(event, x.type)}
              draggable
            >
              {x.data.label}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Sider;