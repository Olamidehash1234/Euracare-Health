import { useEffect } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'loading';
  show: boolean;
  onHide: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, show, onHide }) => {
  useEffect(() => {
    if (show && type !== 'loading') {
      // Only auto-close for success and error, not for loading
      const timer = setTimeout(() => {
        onHide();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [show, type, onHide]);

  if (!show) return null;

  const getIcon = () => {
    switch (type) {
      case 'success':
        return (
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        );
      case 'error':
        return (
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        );
      case 'loading':
        return (
          <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        );
    }
  };

  const getBgColor = () => {
    switch (type) {
      case 'success':
        return 'bg-[#053A7A]';
      case 'error':
        return 'bg-red-500';
      case 'loading':
        return 'bg-[#040323]';
    }
  };

  return (
    <div className="fixed top-[80px] right-6 z-[999]">
      <div className={`${getBgColor()} text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 min-w-[300px] justify-center transition-all duration-300 ease-in-out`}>
        <span className="flex-shrink-0">{getIcon()}</span>
        <p className="text-[16px] font-medium">{message}</p>
      </div>
      {(type === 'success' || type === 'error') && (
        <div className="h-1 w-full bg-white/30 rounded-b-lg overflow-hidden">
          <div className="h-full bg-[#FCF9F5]" style={{ width: '100%', animation: 'toast-progress 5s linear forwards' }}></div>
        </div>
      )}
      <style>{`
        @keyframes toast-progress {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
};

export default Toast;
