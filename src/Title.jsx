import React, { useEffect } from "react";

const Title = ({ style }) => {
    // component didunmount
    useEffect(()=>{
        setTimeout(() => {
        console.log('timeout')
        }, 2000);
        return ()=>console.log('ab khatam')
    })
  return (
    <div
      style={{ width: "100%", height: "100vh", background: `red`, ...style }}
    >
    </div>
  );
};

export default Title;
