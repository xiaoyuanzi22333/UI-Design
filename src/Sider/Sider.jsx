import React, {useState} from 'react';

function Sider() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='sider'>
      <span className='sider_title'> Layer Choice </ span>
    </div>
  );
}

export default Sider;