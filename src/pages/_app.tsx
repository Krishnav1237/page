// src/pages/_app.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;