import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Import thirdweb provider and Goerli ChainId
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { ChainId } from '@thirdweb-dev/sdk';

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

// Wrap your app with the thirdweb provider
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider activeChain="mumbai" clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}>
      <App />
    </ThirdwebProvider>
  </React.StrictMode>,
);

