
import React from 'react';
import TenderCard from './TenderCard';
import mercedes from './images/mercedes.jpeg';


function App() {
  return (
    
    <div className='App.js'> 
      <img src={mercedes} alt="mercedes" width="100" height="100"></img>
    <TenderCard></TenderCard>
    <h1> İhaleler</h1> 
    <TenderCard
    title="2018 model Mercedes marka E200 icradan satılıktır "
    description="İhale No: 287348521"
    date="İhale Tarihi: 16.12.2023"
    year="2018"
    km="100.000"
    color="Gri"
    />
    <TenderCard
    title= "İstanbul Arnavutköy'de 2980 m2 arsa mahkemeden satılıktır"
    description="İhale No: 287348521"
    Area="Arsa Alanı: 2980 m2"
    />
    <TenderCard
    title="İlkadım belediyesine ait 4 adet araç açık arttırma ile satışa çıkacaktır"
    description="İhale No: 28743221"
    date="İhale Tarihi: 12.12.2023"
    year="2013"
    color="gri"
    />
    <TenderCard
    title="İstanbul Ümraniye'de 2+1 daire icradan satılıktır"
    description="İhale No: 28564521"
    date="İhale Tarihi: 10.12.2023"
    year="2015"
    Area="Daire Alanı: 120 m2"
    />

    <TenderCard
    title="BMW marka 520i araç icradan satılıktır"
    description="İhale No: 28767521"
    date="İhale Tarihi: 6.12.2023"
    year="2015"
    km="150.000"
    color="Beyaz"
    />
    <TenderCard
    title="Audi marka A6 araç icradan satılıktır"
    description="İhale No: 28765221"
    date="İhale Tarihi: 1.12.2023"
    year="2017"
    km="120.000"
    />
    <TenderCard
    title="Çerkezköy'de 9872 m2 arsa icradan satılıktır"
    description="İhale No: 287982521"
    Area="Arsa Alanı: 9872 m2"

    />
    </div>
  );
}

export default App;







