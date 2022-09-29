import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Layout } from '../components/Layout';
import { ThemeProvider } from '../contexts/theme/ThemeContext';

export const queryClient = new QueryClient();

function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
          <ReactQueryDevtools />
        </Layout>
      </ThemeProvider>
      <style jsx global>{`
        html,
        body {
          height: 100%;
          width: 100%;
        }

        * {
          box-sizing: border-box;
          margin: 0;
        }
      `}</style>
    </QueryClientProvider>
  );
}

export default App;
