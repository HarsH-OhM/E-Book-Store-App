import React from 'react';
import Button from '@material-ui/core/Button';
import Navbar from './components/Navbar'
import Mid from './components/Mid'


import './App.css';
import CardsUp from './components/cardsup';

function Home() {
  return (
    <div className="Home">

      
    <div className="midpart">

<Mid/>

</div>

      
      <div>
      <CardsUp/>
    </div>



    </div>
  );
}

export default Home;
