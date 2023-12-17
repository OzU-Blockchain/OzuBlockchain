import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import "./TenderPage.css"
import { ethers } from "ethers";

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
            <div className="maindiv">
                <div className="container11">
                    <div className="time">
                        <h1>
                            Kalan Süre
                        </h1>
                        <h1>
                            4 Saat 15 Dakika 20 Saniye
                        </h1>
                    </div>
                    <div className="photo"><img src="" alt="" /></div>
                </div>
                <div>
dsas
                </div>
            </div>
        </React.Fragment>
    );
}

export default TenderPage;