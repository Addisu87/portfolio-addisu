import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { BreakpointProvider } from 'react-socks';

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
    </BreakpointProvider>
  );
}

export default App;
