import { ethers } from "ethers";
import { LOCK_ABI } from "./constants/abi";
import { LOCK_ADDRESS } from "./constants/addresses";
import { useState, useEffect } from "react";

export const UseStakeContract = () => {
    const [contract, setContract] = useState(null);

    useEffect( () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const _contract = new ethers.Contract(LOCK_ADDRESS, LOCK_ABI, signer);
        setContract(_contract);
    }, []);
    
    return contract;
}
