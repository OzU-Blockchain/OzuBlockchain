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



 function App() { 
  // let all_cards = [HouseCard,AreaCard,CarCard];

    const [Listing, setListing] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('http://localhost:3000/');
        const json = await response.json();
        setListing(json);
      };
  
      fetchData();
    }, []);



  return (
    
    <div className="App"> 
    
      
      
      

      <h1> İhaleler</h1> 
    
    
    <CarCard
    
    title="2018 model Mercedes marka E200 icradan satılıktır "
    description="İhale No: 287348521"
    date="İhale Tarihi: 16.12.2023"
    year="2018"
    km="100.000"
    color="Gri"
    img= {mercedes}
    />
    
     <AreaCard
    img={arnavutkoy}
    title= "İstanbul Arnavutköy'de 2980 m2 arsa mahkemeden satılıktır"
    description="İhale No: 287348521"
    Area="Arsa Alanı: 2980 m2"
    />
    <CarCard
    img={linea}
    title="İlkadım belediyesine ait 4 adet araç açık arttırma ile satışa çıkacaktır"
    description="İhale No: 28743221"
    date="İhale Tarihi: 12.12.2023"
    year="2013"
    color="gri"
    />
    <HouseCard
    img={umraniye}
    title="İstanbul Ümraniye'de 2+1 daire icradan satılıktır"
    description="İhale No: 28564521"
    date="İhale Tarihi: 10.12.2023"
    year="2015"
    Area="Daire Alanı: 120 m2"
    />

    <CarCard
    img={bmw}
    title="BMW marka 520i araç icradan satılıktır"
    description="İhale No: 28767521"
    date="İhale Tarihi: 6.12.2023"
    year="2015"
    km="150.000"
    color="Beyaz"
    />
    <CarCard
    img={audi}
    title="Audi marka A6 araç icradan satılıktır"
    description="İhale No: 28765221"
    date="İhale Tarihi: 1.12.2023"
    year="2017"
    km="120.000"
    />
    <AreaCard
    img={cerkezkoy}
    title="Çerkezköy'de 9872 m2 arsa icradan satılıktır"
    description="İhale No: 287982521"
    Area="Arsa Alanı: 9872 m2"
    date="İhale Tarihi: 16.12.2023"
    />
    <CarCard
    img={isuzu}
    title="Sarıyer Belediyesi'ne ait Isuzu marka kamyon satılıktır"
    description="İhale No: 287431521"
    km="350.000"
    year="2008"
    color="Beyaz"
    date="İhale Tarihi: 16.12.2023"
    />
    <HouseCard
    img={kadikoy}
    title="İstanbul Kadıköy'de 3+1 daire icradan satılıktır"
    description="İhale No: 287729521"
    date="İhale Tarihi: 16.12.2023"
    year="2010"
    Area="Daire Alanı: 150 m2"
    />
    <AreaCard
    img={beykoz}
    title="İstanbul Beykoz'da 5000 m2 arsa ihaleden satılıktır" 
    description="İhale No: 287348521"
    Area="Arsa Alanı: 5000 m2"
    date="İhale Tarihi: 16.12.2023"
    />
    <HouseCard
    img={cankaya}
    title="Ankara Çankaya'de 4+1 daire icradan satılıktır"
    description="İhale No: 287952521"
    date="İhale Tarihi: 16.12.2023"
    year="2010"
    Area="Daire Alanı: 200 m2"
    
    />

   

    
    </div> 
    
  );
}

export default App;







