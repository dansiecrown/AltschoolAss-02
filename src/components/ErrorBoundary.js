import React, { Component } from 'react';
import FallbackPage from './FallbackPage';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }



    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <FallbackPage />
        }

        return this.props.children;
    }
}

