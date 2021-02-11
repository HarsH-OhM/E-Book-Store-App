import React from 'react';
import Button from '@material-ui/core/Button';
import Navbar from './components/Navbar'
import Mid from './components/Mid'
import Home from './Home'
import Api from './Api'
import {useState} from 'react'
import Bookcrud from './compo2/Bookcrud'
import  BookDetailPage from './components/bookdetailpage'
import {BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';

function App(props) {

 

  
  


  return (
    <BrowserRouter>
    <div>
      <Navbar />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/book/:bookId" exact component={BookDetailPage} />
      <Route path="/form" component={Bookcrud} exact />

    </Switch>

     </div>
 
    </BrowserRouter>
   
  );
}

export default App;
