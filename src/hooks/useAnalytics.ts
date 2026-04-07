import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag?: (command: string, ...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Send page view to Google Analytics whenever route changes
    if (window.gtag) {
      window.gtag('config', 'G-01NH5NMC95', {
        page_path: location.pathname,
        page_title: document.title,
      });
    }

    // Also send to GTM data layer
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'pageview',
        page_path: location.pathname,
        page_title: document.title,
      });
    }
  }, [location.pathname]);
};
