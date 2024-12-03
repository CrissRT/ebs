import React from 'react';
import icon from "/assets/404.png"

const NotFound: React.FC = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <img src={icon} className='h-screen max-h-[1000px]'/>
    </div>
  )
};

export default NotFound;
