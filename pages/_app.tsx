import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';
import ErrorBoundary from '../lib/ErrorBoundary';

// SECTION: Main
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ErrorBoundary fallback={<h1>Error</h1>}>
    <Suspense fallback={<h1>Loading...</h1>}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Suspense>
  </ErrorBoundary>
);

export default MyApp;
