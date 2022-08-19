import { useEffect, useState } from "react";
import { BrowserWallet } from "@martifylabs/mesh";
import type { Wallet } from "@martifylabs/mesh";
import useWallet from "../contexts/wallet";


export default function connectWallet() {
    const [availableWallets, setAvailableWallets] = useState<Wallet [] | undefined>(undefined);
    const { walletNameConnected, connecting, connectWallet, walletConnected } = useWallet();

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
                    ? "No wallets found"
                    : availableWallets.map((wallet, i) => (
                        <button
                            key={i}
                            onClick={() => connectWallet(wallet.name)}
                            disabled= { walletConnected || connecting || walletNameConnected
                             == wallet.name }>
                            Connect with {wallet.name}
                        </button>
                    ))
            : "" }
        </>
    );
}
