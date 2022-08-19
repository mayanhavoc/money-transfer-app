import { Button } from "@chakra-ui/react";

const WalletButton = (props:any) => {
    return (
        <Button
            colorScheme='grey'
            onClick={props.onClick}
            disabled={props.disabled}>
                {props.children}
            </Button>
    );
};

export default WalletButton;