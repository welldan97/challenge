import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// SECTION: Main

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
  </QueryClientProvider>
);

export default MyApp;
