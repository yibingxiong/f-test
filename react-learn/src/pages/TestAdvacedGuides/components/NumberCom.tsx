import React from 'react'

interface Iprops {
    n: number|string;
}
const  NumberComp:React.FC<Iprops> = ({ n }) => {
    return (
        <div>
            {
                n &&
                <div>n={n}</div>
            }
        </div>
    )
}

export default NumberComp;