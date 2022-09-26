import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Layout } from '../components/Layout';

export const queryClient = new QueryClient();

function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
