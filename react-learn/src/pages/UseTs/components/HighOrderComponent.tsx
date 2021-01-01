import React from 'react'

interface LoadingHOCProps {
    loading: boolean;
}

function LoadingHOC<P>(WrappedComponent: React.ComponentType<P>) {
    return class extends React.Component<P & LoadingHOCProps> {
        render() {
            const {
                loading,
                ...props
            } = this.props;
            return loading ? <p>loding</p> : <WrappedComponent {...props as P} />
        }
    }
}

export default LoadingHOC;