import React from 'react';

import AppBar from '@material-ui/core/AppBar'
import MenuIcon from '@material-ui/icons/Menu'
//  import {classes }from '@material-ui/core/styles'
import {useState} from 'react'
import { Toolbar, IconButton, Typography, Button } from '@material-ui/core'
import {NavLink} from 'react-router-dom'
import '../index.css';

import {setChangeColor} from '../store/action/index';
import { useSelector, useDispatch } from 'react-redux';
const Navbar = () => {

    const [change, SetChange] = useState('"#1AB394');
    const dispatch = useDispatch();
    const clickme= () =>{
        let color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        // SetChange("#1AB394");
        SetChange(color);
        dispatch(setChangeColor(color));

    }

    return (
        // <AppBar style={{background: '#1AB394'}}
        // iconClassNameRight="muidocs-icon-navigation-expand-more">

        //    <div className="container" >
        //        <span><a href="#">Dashboard</a></span>
        //        <span><a href="#">My Device</a></span>
        //        <span><a href="#">Follow</a></span>
        //        </div>


        //        </AppBar>

        <AppBar position="static" 
            iconClassNameRight="muidocs-icon-navigation-expand-more" style={{ background: change }}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" >
                <NavLink   style={{color:"white"}} to="/"><MenuIcon  onClick={clickme} /></NavLink>
                </IconButton>
                

                <div className="container" >
                 
                <span><NavLink   to="/">HOME</NavLink></span>
                <span><NavLink  to="/form">FORM</NavLink></span>
                {/* <span><NavLink   to="#">ABOUT</NavLink></span> */}
                <Button color="inherit" onClick={clickme}>clickme</Button>
                </div>
                <Typography >
                <marquee behavior="scroll" direction="DOWN">Hello..!</marquee>
    </Typography >
                
                {/* <Button color="inherit">Hello..!</Button> */}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;