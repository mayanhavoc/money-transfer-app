import "../styles/globals.css";
import type { AppProps } from "next/app";
import { WalletProvider } from "../contexts/wallet";
import { ChakraProvider } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <WalletProvider>
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </WalletProvider>
        </ChakraProvider>
    );
}

export default MyApp;