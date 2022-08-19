import "../styles/globals.css";
import type { AppProps } from "next/app";
import { WalletProvider } from "../contexts/wallet";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <WalletProvider>
                <Navbar />
                <Box w='80%' mx='auto' p='5' mb='24'>
                    <Component {...pageProps} />
                </Box>
                <Footer />
            </WalletProvider>
        </ChakraProvider>
    );
}

export default MyApp;