import "../styles/globals.css";
import type { AppProps } from "next/app";
import { WalletProvider } from "../contexts/wallet";
import { ChakraProvider } from "@chakra-ui/react";

import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <WalletProvider>
                <Navbar />
                <Component {...pageProps} />
            </WalletProvider>
        </ChakraProvider>
    );
}

export default MyApp;