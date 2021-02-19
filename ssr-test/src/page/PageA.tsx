import React, { useEffect } from 'react';

const PageA: React.FC = () => {
  useEffect(() => {
    setInterval(() => {
      console.log(Date.now())
    }, 1000);
  },[])
  return (
    <span style={{color: 'red'}}>4444-</span>
  );
}

export default PageA