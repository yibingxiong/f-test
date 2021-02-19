import React from 'react'

interface logPropsParam {
    name: string;
    forwardedRef?: React.ComponentType<any>,
}

function logProps<P>(WrappedComponent: React.ComponentType<P>) {
    class LogPropsComponent extends React.Component<logPropsParam & P> {
        componentDidUpdate() {
            console.log('name:', this.props.name);
            console.log("props:", this.props)
        }
        render() {
            const {
                name,
                forwardedRef,
                ...props
            } = this.props;
            return <WrappedComponent {...props as P} ref={forwardedRef} />
        }
    }
    type A = logPropsParam & P;
    return React.forwardRef((props: A, ref) => {
        return <LogPropsComponent {...props} forwardedRef={ref} />
    })
}

export default logProps;