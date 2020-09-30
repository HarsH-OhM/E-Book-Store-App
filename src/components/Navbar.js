import React from 'react';

import AppBar from '@material-ui/core/AppBar'
import MenuIcon from '@material-ui/icons/Menu'
//  import {classes }from '@material-ui/core/styles'

import { Toolbar, IconButton, Typography, Button } from '@material-ui/core'
import {NavLink} from 'react-router-dom'
import '../index.css';

const Navbar = () => {


    return (
        // <AppBar style={{background: '#1AB394'}}
        // iconClassNameRight="muidocs-icon-navigation-expand-more">

        //    <div className="container" >
        //        <span><a href="#">Dashboard</a></span>
        //        <span><a href="#">My Device</a></span>
        //        <span><a href="#">Follow</a></span>
        //        </div>


        //        </AppBar>

        <AppBar position="static" style={{ background: '#1AB394' }}
            iconClassNameRight="muidocs-icon-navigation-expand-more">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                

                <div className="container" >
                 
                <span><NavLink   to="/">HOME</NavLink></span>
                <span><NavLink  to="/form">FORM</NavLink></span>
                {/* <span><NavLink   to="#">ABOUT</NavLink></span> */}
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