import GlobalProvider from '@/context/context';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    );
  }
  
  export default MyApp;