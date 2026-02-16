/**
 * Error Boundary Component
 * Catches errors in child components and displays error UI
 */

import React, { type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error Boundary Component
 * Use this to wrap your components to catch and display errors
 */
export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  // componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
  //   // console.error('Error caught by boundary:', error, errorInfo);
  // }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 m-4">
            <h2 className="text-red-800 font-bold mb-2">Something went wrong</h2>
            <p className="text-red-700 mb-4">{this.state.error?.message}</p>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Try Again
            </button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

/**
 * Functional Error Boundary using error states
 */
export const ErrorAlert: React.FC<{
  error: Error | null;
  onDismiss?: () => void;
  onRetry?: () => void;
}> = ({ error, onDismiss, onRetry }) => {
  if (!error) return null;

  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-4">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-bold text-red-800">Error</h3>
          <p className="text-red-700 text-sm mt-1">{error.message}</p>
        </div>
        {onDismiss && (
          <button
            onClick={onDismiss}
            className="text-red-600 hover:text-red-800"
          >
            ✕
          </button>
        )}
      </div>
      <div className="mt-3 flex gap-2">
        {onRetry && (
          <button
            onClick={onRetry}
            className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
          >
            Retry
          </button>
        )}
        {onDismiss && (
          <button
            onClick={onDismiss}
            className="px-3 py-1 bg-gray-300 text-gray-800 text-sm rounded hover:bg-gray-400"
          >
            Dismiss
          </button>
        )}
      </div>
    </div>
  );
};
