import React from 'react'

interface Iprops {
    theme: string;
}
const Button: React.FC<Iprops> = ({ theme }) => {
    return (
        <button style={{ background: theme, display:'inline-block' }}>按钮</button>
    )
}

export default Button;