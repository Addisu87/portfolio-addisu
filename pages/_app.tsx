import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { BreakpointProvider } from 'react-socks';
import { Analytics } from '@vercel/analytics/react';

function App({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  return (
    <BreakpointProvider>
      <Component {...pageProps} />;
      <Analytics />
    </BreakpointProvider>
  );
}

export default App;
