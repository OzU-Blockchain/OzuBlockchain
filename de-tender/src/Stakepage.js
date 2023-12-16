import "./Stakepage.css"
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { ethers } from "ethers";

const Stakepage = () => {
    const [Listing, setListing] = useState([]);
    const [provider, setProvider] = useState(null);
    const [account, setAccount] = useState("");

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
                <h1 style={{ marginLeft: "40px", color: "#e30a17" }}><Link to="/" style={{ textDecoration: "none" }} >İhaleler</Link></h1>
                <h1 style={{ paddingRight: "0px", color: "#e30a17" }}><Link to="/stake" style={{ textDecoration: "none" }} color='#e30a17'>Teminat</Link></h1>
                <div className="edevletimg"><img src="edevlet.png" alt="" style={{display:"block"}}/></div>
                <button onClick={() => {
                    if (account) return;
                    connect();
                }}>{account ? "Bağlı" : "Cüzden Bağla"}</button>
            </div>
            <div className="mainphoto">
                <h1 className="maintext" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>İhalelere katılım gösterebilmek için en az 10 bin dijital türk lirası teminat yatırımı gerekmektedir</h1>
                <button className="mainbutton"> Teminat Yatır</button>
            </div>
        </React.Fragment>

    )
}

export default Stakepage;