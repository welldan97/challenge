import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, Suspense } from 'react';
import ErrorBoundary from '../../lib/ErrorBoundary';

// SECTION: Main

interface Props {
  children: ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

export default function AppWrapper({ children }: Props) {
  return (
    <ErrorBoundary fallback={<h1>Error</h1>}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </Suspense>
    </ErrorBoundary>
  );
}
