/**
 * Performance Monitoring Utils
 * Utilities for monitoring and measuring application performance
 */

interface PerformanceMetrics {
  metric: string;
  value: number;
  timestamp: number;
}

const metrics: PerformanceMetrics[] = [];

/**
 * Measure function execution time
 */
export const measureTime = async <T>(
  fn: () => Promise<T>,
  label: string = 'Operation'
): Promise<T> => {
  const start = performance.now();
  try {
    return await fn();
  } finally {
    const duration = performance.now() - start;
    recordMetric(label, duration);
    console.log(`⏱️ ${label}: ${duration.toFixed(2)}ms`);
  }
};

/**
 * Record performance metric
 */
export const recordMetric = (metric: string, value: number) => {
  metrics.push({
    metric,
    value,
    timestamp: Date.now(),
  });

  // Keep only recent metrics (last 1 hour)
  const oneHourAgo = Date.now() - 60 * 60 * 1000;
  metrics.filter(m => m.timestamp > oneHourAgo);
};

/**
 * Get average metric value
 */
export const getAverageMetric = (metricName: string): number => {
  const metricValues = metrics.filter(m => m.metric === metricName);
  if (metricValues.length === 0) return 0;
  const sum = metricValues.reduce((acc, m) => acc + m.value, 0);
  return sum / metricValues.length;
};

/**
 * Get all recorded metrics
 */
export const getAllMetrics = () => {
  return metrics;
};

/**
 * Clear metrics
 */
export const clearMetrics = () => {
  metrics.length = 0;
};

/**
 * Log Core Web Vitals
 */
export const logCoreWebVitals = () => {
  // LCP (Largest Contentful Paint)
  if ('PerformanceObserver' in window) {
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        recordMetric('LCP', lastEntry.renderTime || lastEntry.startTime || 0);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.warn('LCP observer not supported');
    }

    // FID (First Input Delay)
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          recordMetric('FID', entry.processingDuration || 0);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      console.warn('FID observer not supported');
    }

    // CLS (Cumulative Layout Shift)
    try {
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          recordMetric('CLS', (entry as any).value * 100);
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      console.warn('CLS observer not supported');
    }
  }
};

/**
 * Get page load time
 */
export const getPageLoadTime = (): number => {
  const perfData = window.performance.timing;
  return perfData.loadEventEnd - perfData.navigationStart;
};

/**
 * Get resource timing
 */
export const getResourceTiming = (resourceName: string): PerformanceResourceTiming | null => {
  const entries = window.performance.getEntriesByType('resource');
  return (entries.find(
    entry => entry.name.includes(resourceName)
  ) as PerformanceResourceTiming) || null;
};

/**
 * Log all performance data
 */
export const logPerformanceData = () => {
  console.group('📊 Performance Metrics');
  console.log('Page Load Time:', `${getPageLoadTime()}ms`);
  console.log('Average API Response:', `${getAverageMetric('API')}ms`);
  console.log('Average Component Render:', `${getAverageMetric('Component')}ms`);
  console.log('LCP:', `${getAverageMetric('LCP')}ms`);
  console.log('FID:', `${getAverageMetric('FID')}ms`);
  console.log('CLS:', `${getAverageMetric('CLS')}`);
  console.groupEnd();
};
