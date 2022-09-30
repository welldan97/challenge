import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import type { AppProps } from 'next/app';
import AppWrapper from '../components/lib/AppWrapper';

// SECTION: Main

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AppWrapper>
    <Component {...pageProps} />
  </AppWrapper>
);

export default MyApp;
