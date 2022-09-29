import { Component } from 'react';

// SECTION: Main

interface Props {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

class ErrorBoundary extends Component<Props> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  render() {
    const { hasError } = this.state;
    const { children, fallback } = this.props;
    if (hasError) return fallback;
    return children;
  }
}

export default ErrorBoundary;
