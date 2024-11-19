import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../styles/globals.css';  // Import global styles

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;