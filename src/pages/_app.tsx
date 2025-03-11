import '@/styles/globals.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import type { AppProps } from 'next/app';
import { AuthProvider } from '@/context/AuthContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}