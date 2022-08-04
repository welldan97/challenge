import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import type { AppProps } from 'next/app';

// SECTION: Main

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
