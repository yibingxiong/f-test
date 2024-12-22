import React from 'react'

interface FuncCompProps {
    ref:any,
}
const  FuncComp:React.FC<FuncCompProps> = ({ref}) => {
    return (
        <div ref={ref}>aaaaaaa</div>
    )
}

export default React.forwardRef((props, ref) => {
    return (
        <FuncComp ref={ref} />
    )
})
