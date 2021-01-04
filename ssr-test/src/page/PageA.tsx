import React, { useEffect } from 'react';

const PageA: React.FC = () => {
  console.log('nima')
  useEffect(() => {
    setInterval(() => {
      console.log(Date.now())
    }, 100);
  },[])
  return (
    <span style={{color: 'red'}}>5555</span>
  );
}

export default PageA