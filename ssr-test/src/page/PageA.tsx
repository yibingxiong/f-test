import React, { useEffect } from 'react';

const PageA: React.FC = () => {
  console.log('nima')
  useEffect(() => {
    setInterval(() => {
      console.log(Date.now())
    }, 10000);
  },[])
  return (
    <span style={{color: 'red'}}>fdfdfdd</span>
  );
}

export default PageA