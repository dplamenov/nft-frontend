import './App.css';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Marketplace from './pages/Marketplace';
import ContactUs from './pages/ContactUs';
import Create from './pages/Create';
import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import MarketplaceAbi from './contractsData/Marketplace.json'
import MarketplaceAddress from './contractsData/Marketplace-address.json'
import NFTAbi from './contractsData/NFT.json'
import NFTAddress from './contractsData/NFT-address.json'

function App() {
  const [account, setAccount] = useState(null)
  const [nft, setNFT] = useState({})
  const [marketplace, setMarketplace] = useState({})
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    web3Handler();
  }, []);

  const web3Handler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(accounts[0])
    // Get provider from Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    // Set signer
    const signer = provider.getSigner()

    window.ethereum.on('chainChanged', (chainId) => {
      window.location.reload();
    })

    window.ethereum.on('accountsChanged', async function (accounts) {
      setAccount(accounts[0])
      await web3Handler()
    })
    loadContracts(signer, accounts[0])
  }

  const loadContracts = async (signer, account) => {
    // Get deployed copies of contracts
    const marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi.abi, signer)
    setMarketplace(marketplace)
    const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer)
    setNFT(nft)
    setLoading(false)
  }

  if (loading) return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Loading...</h2>
    </main>
  )

  return (
    <> 
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/marketplace" element={<Marketplace nft={nft} marketplace={marketplace} account={account}/>} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/create" element={<Create />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
