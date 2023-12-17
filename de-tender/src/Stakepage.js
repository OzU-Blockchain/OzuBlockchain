import "./Stakepage.css"
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { ethers } from "ethers";
import {UseStakeContract} from "../src/UseStakeContract";

const Stakepage = () => {
    const [Listing, setListing] = useState([]);
    const [provider, setProvider] = useState(null);
    const [account, setAccount] = useState("");

    const stake_contract=UseStakeContract();

    const stakefunct = async()=>{
        const result =await stake_contract.stake(1);
    }

    function connect() {
        if (!window.ethereum) {
            alert("Metamask is not installed");
            return;
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);
        provider
            .send("eth_requestAccounts", [])
            .then((accounts) => setAccount(accounts[0]))
            .catch((err) => console.log(err));

    }

    return (
        <React.Fragment>
            <div className='navbar'>
                <div className="edevletimg"><img src="edevlet.png" alt="" style={{ display: "block" }} /></div>
                <h1 style={{ marginLeft: "40px", color: "#e30a17" }}><Link to="/" style={{ textDecoration: "none" }} >İhaleler</Link></h1>
                <h1 style={{ paddingRight: "0px", color: "#e30a17" }}><Link to="/stake" style={{ textDecoration: "none" }} color='#e30a17'>Teminat</Link></h1>
                <button onClick={() => {
                    if (account) return;
                    connect();
                }}>{account ? "Bağlı" : "Cüzdan Bağla"}</button>
            </div>
            <div className="mainphoto">
                <div className="container1">
                    <h1 className="maintext" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>İhalelere katılım gösterebilmek için en az 10 bin dijital Türk lirası teminat yatırımı gerekmektedir.</h1>
                    <button onClick={stakefunct}className="mainbutton" > Teminat Yatır</button>
                </div>
                <h1 style={{color:"aliceblue", margin:"20px",paddingRight:"120px"}}>Veya</h1>
                <div className="container2">
                    <h1 className="maintext" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>Nakit yerine bir dijital varlığınızı teminat göstermeniz gerekmektedir. </h1>
                    <button className="mainbutton"> Teminat Göster</button>
                </div>
            </div>
        </React.Fragment>

    )
}

export default Stakepage;