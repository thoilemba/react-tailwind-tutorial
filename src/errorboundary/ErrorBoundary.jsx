import { Component } from "react";

class ErrorBoundary extends Component {
  constructor (props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch (error, errorInfo) {
    // Log the error to an error reporting service
    console.error("Error caught by error boundary:", error, errorInfo);
    this.setState({ hasError: true });
  }

  render () {
    if (this.state.hasError) {
      // You can render a custom fallback UI here or provide a default UI
      return this.props.fallback || <div className="h-screen flex justify-center items-center text-red-500">Something went wrong.</div>;
    }

    // Render the children if no error occurred
    return this.props.children;
  }
}

export default ErrorBoundary;
