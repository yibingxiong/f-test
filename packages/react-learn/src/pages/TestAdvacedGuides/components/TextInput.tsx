import React from 'react'

class TextInput extends React.Component<{
    forwardRef: any,
}> {
    render() {
        return (
            <div>
                <label>input
                </label>
                <input type="text" ref={this.props.forwardRef} />
            </div>
        )
    }
}

export default React.forwardRef<HTMLInputElement>(function TextInputRef(props, forwardRef) {
    return <TextInput {...props} forwardRef={forwardRef} />
})