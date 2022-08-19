import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Flex, Spacer, Text, Box } from '@chakra-ui/react';
import useWallet from '../contexts/wallet';
import ConnectWallet from './connectWallet';


export default function Footer() {
    const { connecting, connectWallet, walletConnected, connectedAddress, currentNetwork, walletNameConnected } = useWallet();
    const [footerColor, setFooterColor] = useState('green.200')

    useEffect(()=> {
        if(walletConnected){
            setFooterColor('purple.200')
        }
    }, [walletConnected])

    return (
        <Flex pos="fixed" bottom="0" direction="row" w="100%" p="5" bg="pink.500">
            { walletConnected ? (
                <Text>Connected to {currentNetwork} on {walletNameConnected}</Text>
            ) : (
                <Text>Connect a wallet</Text>
            )}
            <Spacer/>
            {/* <ConnectWallet /> */}
            <Spacer/>
            {connectedAddress}
        </Flex>
    )
}