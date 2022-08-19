import {
      Box
    , Heading
    , Text
    , Spinner
    , Center
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import type { NextPage } from "next";
import useWallet from "../contexts/wallet";
import ConnectWallet from "../components/connectWallet";

const Home: NextPage = () => {
    const { wallet, walletConnected, connecting, connectWallet, connectedAddress } = useWallet();
    const [currentNetwork, setCurrentNetwork] = useState<"Testnet" | "Mainnet" | "Not Connected">("Not Connected");
    const [ assets, setAssets ] = useState<null | any>(null);
    const [ loading, setLoading ] = useState<boolean>(false);

    useEffect(()=> {

        const fetchNetwork = async () => {
            const _network = await wallet.getNetworkId();
            if (_network === 0) {
                setCurrentNetwork("Testnet")
            }
            else if (_network === 1){
                setCurrentNetwork("Mainnet")
            }
            setLoading(false);
        }

        if (walletConnected) {
            setLoading(true);
            fetchNetwork();
        }
    }, [walletConnected])


    async function getAssets() {
        if (wallet) {
            setLoading(true);
            const _assets = await wallet.getAssets();
            setAssets(_assets);
            setLoading(false);
        }
    }
    return (
        <Box>
            <Heading>Connect Wallet</Heading>
            <Box m='5' p='5' bg='teal.700' color='white'>
                { loading ? (
                    <Center>
                        <Spinner />
                    </Center>
                ) : (
                    <>
                    {walletConnected ? 
                        (
                        <Box w='80%' mx='auto' my='5' p='5' bg='green.100' color='black'>
                            <Text fontSize='xl'>Successfully connected to {walletConnected} wallet on {currentNetwork} at address: {connectedAddress}</Text>
                        </Box> ) : (
                    <Box w='80%' mx='auto' my='5' p='5' bg='green.100' color='black'>
                        <Text fontSize='xl'>Unsuccessful connection, try again.</Text>
                    </Box>
                    )
                }
            <ConnectWallet />
            </>
        )}
        </Box>
    </Box>
    )
}

export default Home;