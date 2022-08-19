import { useEffect, useState } from "react";
import { BrowserWallet } from "@martifylabs/mesh";
import type { Wallet } from "@martifylabs/mesh";
import useWallet from "../contexts/wallet";

import { Button } from '@chakra-ui/react';


export default function connectWallet() {
    const { walletNameConnected, connecting, connectWallet } = useWallet();
    const [availableWallets, setAvailableWallets] = useState<Wallet [] | undefined>(undefined);

    useEffect(() => {
        async function init () {
            setAvailableWallets(BrowserWallet.getInstalledWallets());
        }
        init ();
    }, []);
    return (
        <>
            {availableWallets 
                ? availableWallets.length == 0
                    ? 'No wallets found'
                    : availableWallets.map((wallet, i) => (
                        <Button key={i} onClick={() => connectWallet(wallet.name)} colorScheme='purple' m={2}>
                            Connect with {wallet.name}
                        </Button>
                    ))
                : "" }
            </>
    );
}
