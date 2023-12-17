import './App.css';
import React, { useState, useEffect } from 'react';
import mercedes from './images/mercedes.jpeg';
import arnavutkoy from './images/arnavutkoy.png';
import linea from './images/linea.jpg';
import umraniye from './images/umraniye.jpg';
import bmw from './images/bmw.jpeg';
import audi from './images/audi.jpg';
import cerkezkoy from './images/cerkezkoy.jpg';
import CarCard from './Carcard';
import HouseCard from './Housecard';
import AreaCard from './Areacard';
import isuzu from './images/isuzu.jpg';
import kadikoy from './images/kadikoy.jpg';
import cankaya from './images/cankaya.jpg';
import beykoz from './images/beykoz.jpg';


import { Link } from 'react-router-dom';
const ethers = require("ethers");
function App() {
  // let all_cards = [HouseCard,AreaCard,CarCard];

  const [Listing, setListing] = useState([]);
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/');
      const json = await response.json();
      setListing(json);
    };

    fetchData();
  }, []);

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
      <div className='main'>
        <div className='navbar'>
        <div className="edevletimg"><img src="edevlet.png" alt="" style={{ display: "block" }} /></div>
                <h1 style={{ marginLeft: "40px", color: "#e30a17" }}><Link to="/" style={{ textDecoration: "none" }} >İhaleler</Link></h1>
                <h1 style={{ paddingRight: "0px", color: "#e30a17" }}><Link to="/stake" style={{ textDecoration: "none" }} color='#e30a17'>Teminat</Link></h1>
          <button onClick={() => {
            if (account) return;
            connect();
          }}>{account ? "Bağlı" : "Cüzdan Bağla"}</button>
        </div>
        <div className="App">
          <CarCard
            className="card"
            title="2018 model Mercedes marka E200 icradan satılıktır "
            description="İhale No: 287348521"
            date="İhale Tarihi: 16.12.2023"
            year="2018"
            km="100.000"
            color="Gri"
            img={mercedes}
          />

          <AreaCard
            className="card"
            img={arnavutkoy}
            title="İstanbul Arnavutköy'de 2980 m2 arsa mahkemeden satılıktır"
            description="İhale No: 287348521"
            Area="Arsa Alanı: 2980 m2"
          />
          <CarCard
            className="card"
            img={linea}
            title="İlkadım belediyesine ait 4 adet araç açık arttırma ile satışa çıkacaktır"
            description="İhale No: 28743221"
            date="İhale Tarihi: 12.12.2023"
            year="2013"
            color="gri"
          />
          <HouseCard
            className="card"
            img={umraniye}
            title="İstanbul Ümraniye'de 2+1 daire icradan satılıktır"
            description="İhale No: 28564521"
            date="İhale Tarihi: 10.12.2023"
            year="2015"
            Area="Daire Alanı: 120 m2"
          />

          <CarCard
            className="card"
            img={bmw}
            title="BMW marka 520i araç icradan satılıktır"
            description="İhale No: 28767521"
            date="İhale Tarihi: 6.12.2023"
            year="2015"
            km="150.000"
            color="Beyaz"
          />
          <CarCard
            className="card"
            img={audi}
            title="Audi marka A6 araç icradan satılıktır"
            description="İhale No: 28765221"
            date="İhale Tarihi: 1.12.2023"
            year="2017"
            km="120.000"
          />
          <AreaCard
            className="card"
            img={cerkezkoy}
            title="Çerkezköy'de 9872 m2 arsa icradan satılıktır"
            description="İhale No: 287982521"
            Area="Arsa Alanı: 9872 m2"
            date="İhale Tarihi: 16.12.2023"
          />
          <CarCard
            className="card"
            img={isuzu}
            title="Sarıyer Belediyesi'ne ait Isuzu marka kamyon satılıktır"
            description="İhale No: 287431521"
            km="350.000"
            year="2008"
            color="Beyaz"
            date="İhale Tarihi: 16.12.2023"
          />
          <HouseCard
            className="card"
            img={kadikoy}
            title="İstanbul Kadıköy'de 3+1 daire icradan satılıktır"
            description="İhale No: 287729521"
            date="İhale Tarihi: 16.12.2023"
            year="2010"
            Area="Daire Alanı: 150 m2"
          />
          <AreaCard
            className="card"
            img={beykoz}
            title="İstanbul Beykoz'da 5000 m2 arsa ihaleden satılıktır"
            description="İhale No: 287348521"
            Area="Arsa Alanı: 5000 m2"
            date="İhale Tarihi: 16.12.2023"
          />
          <HouseCard
            className="card"
            img={cankaya}
            title="Ankara Çankaya'de 4+1 daire icradan satılıktır"
            description="İhale No: 287952521"
            date="İhale Tarihi: 16.12.2023"
            year="2010"
            Area="Daire Alanı: 200 m2"

          />
        </div>
      </div>

      
    </React.Fragment>


  );
}

export default App;







