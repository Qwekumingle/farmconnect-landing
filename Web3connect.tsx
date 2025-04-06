'use client';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';

export default function Web3Connect() {
  const { connect } = useConnect({
    connector: new MetaMaskConnector(),
  });
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <button
      onClick={() => isConnected ? disconnect() : connect()}
      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
    >
      {isConnected ? `Connected: ${address?.slice(0, 6)}...${address?.slice(-4)}` : '🌐 Connect Wallet'}
    </button>
  );
}
