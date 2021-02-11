import React from 'react';
import Button from '@material-ui/core/Button';
import Navbar from './components/Navbar'
import Mid from './components/Mid'
import {useState} from 'react'


import './App.css';
import CardsUp from './components/cardsup';

function Home() {

  const [change, SetChange] = useState('"#1AB394');
  const clickme= () =>{
      // let color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      // SetChange("#1AB394");
     let color = '';
      SetChange(color);

  }

  return ( 
    <div className="Home"  
    style={{ backgroundImage: `url("https://42796r1ctbz645bo223zkcdl-wpengine.netdna-ssl.com/wp-content/uploads/2015/06/bookstore-indepedent.jpg")`}}>

      
    <div className="midpart">

<Mid/>

</div>

      
      <div>
      <CardsUp/>
    </div>


<br/><br/>
    </div>
  );
}

export default Home;
