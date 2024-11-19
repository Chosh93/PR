import type { AppProps } from 'next/app';

import { MantineProvider } from '@mantine/core';

import AlertContainer from '@/components/AlertContainer';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <Component {...pageProps} />
      <AlertContainer />
    </MantineProvider>
  );
}
