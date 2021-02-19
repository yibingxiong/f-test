import React from 'react'

const UncontrolledComp: React.FC = () => {
    const nameRef = React.createRef<HTMLInputElement>();
    const fileRef = React.createRef<HTMLInputElement>();
    const onSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        console.log(fileRef.current?.files)
        console.log(nameRef.current?.value)
    }
    return (
        <form onSubmit={onSubmit}>
            <input ref={nameRef} name='name' defaultValue="hello" />
            <input type="file" ref={fileRef} />
            <input type='submit' value="提交" />
        </form>
    )
}

export default UncontrolledComp;