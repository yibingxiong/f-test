import React from 'react'

interface Iprops {
    theme: string;
}
const Button: React.FC<Iprops> = ({ theme }) => {
    const a = () => {
        for(let i = 0; i < 5000; i++) {
            // console.log(i)
        }
    }
    a();
    return (
        <button style={{ background: theme, display:'inline-block' }}>按钮</button>
    )
}

export default Button;