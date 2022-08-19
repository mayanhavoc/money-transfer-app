import React, {
      createContext
    , useState
    , useContext
    , useMemo
    , ReactNode, 
} from "react";
import { BrowserWallet } from '@martifylabs/mesh';

const WalletContext = createContext({
    wallet: {} as BrowserWallet
    , connecting: false
    , walletNameConnected: ""
    , walletConnected: false
    , connectWallet: async (walletName: string) => {}
    , connectedAddress: "",
});

export const WalletProvider = ({ children }: { children: ReactNode }) => {
    const [wallet, setWallet] = useState<BrowserWallet>({} as BrowserWallet);
    const [walletConnected, setWalletConnected] = useState<boolean>(false);
    const [connecting, setConnecting] = useState<boolean>(false);
    const [walletNameConnected, setWalletNameConnected] = useState<string>("");
    const [connectedAddress, setConnectedAddress] = useState<string>("");

    const connectWallet = async (walletName: string) => {
        setConnecting(true);
        const _wallet = await BrowserWallet.enable(walletName);
        const _address = await _wallet.getUsedAddresses();
        if (_wallet) {
            setWallet(_wallet);
            setWalletNameConnected(walletName);
            setWalletConnected(true);
            setConnectedAddress(_address[0]);
        }
        setConnecting(false);
    };

    const memoedValue = useMemo(
        () => ({
              wallet
            , connecting
            , walletNameConnected
            , walletConnected
            , connectWallet
            , connectedAddress,
        }),
        [wallet,walletConnected, connecting, walletNameConnected]
    );
    return (
        <WalletContext.Provider value={memoedValue}>
            {children}
        </WalletContext.Provider>
    );
};

export default function useWallet() {
    return useContext(WalletContext);
}