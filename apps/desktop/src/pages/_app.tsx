import type { AppProps } from 'next/app';

import AlertContainer from '@/components/AlertContainer';
import AppProvider from '@/provider/app.provider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
      <AlertContainer />
    </AppProvider>
  );
}
