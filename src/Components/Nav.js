import React from 'react';
import img from '../images/icons/logo2.png';
import './Nav.css';
import Button from 'react-bootstrap/esm/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
//import Button from '@mui/material/Button';


export default function Nav() {
    return (
        <div className='contain'>

            <img id='imgId' src={img} alt='Logo' />
            <div className='nav'>
            <ShoppingCartOutlinedIcon />
            <Button variant="outline-primary" >Login</Button>
            <Button variant="danger" >Sign Up</Button>
            </div>
            

        </div>
    )
}
