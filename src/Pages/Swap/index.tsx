import React, {useState} from "react";
import Swap from "../../Components/Swap";
import Token from "../../Components/Tokens/tokens";
import { SwapWidget } from "@uniswap/widgets";
import "@uniswap/widgets/fonts.css";


const SwapPage = (props: any) => {

    const [showTokens, setShowTokens] = useState(false);

    const toggleTokens = () => {
        setShowTokens(!showTokens)
    }

    return (
        <>
            {
                showTokens ? <Token close={toggleTokens} /> : null
            }
            <Swap click={toggleTokens} />
            <SwapWidget width="460px"   />
        </>
    )
}

export default SwapPage;