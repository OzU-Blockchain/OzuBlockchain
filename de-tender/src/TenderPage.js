import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import "./TenderPage.css"
import { ethers } from "ethers";
import mercedes from './images/mercedes.jpeg';
const TenderPage = () => {
    const [account, setAccount] = useState("");
    const [provider, setProvider] = useState(null);
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
            <div className="maindiv1">
                <div className="container11">
                    <div className="time">
                        <h1>
                            Kalan Süre
                        </h1>
                        <h1>
                            4 Saat 15 Dakika 20 Saniye
                        </h1>
                    </div>
                    <img src={mercedes} alt="" style={{height:"400px", width:"400px",marginLeft:"100px", borderRadius:"20px"}} />
                    <button>Teklif Ver</button>
                </div>
                <div style={{display:"flex", flexDirection:"column",marginTop:"30px"}}>
                    <h3>Muhammen Bedel : 1.400.00,00TL</h3>
                    <h3>Arttırma başlangış tarih ve saati : 17.12.2023 07.09</h3>
                    <h3>Arttırma bitiş tarih ve saati :24.12.2023 07.09</h3>
                </div>
            </div>
        </React.Fragment>
    );
}

export default TenderPage;