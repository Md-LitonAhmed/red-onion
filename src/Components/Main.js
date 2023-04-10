import React, { useContext, useEffect, useState } from 'react';
import { myContext } from '../App';
import Data from '../Data.json';
import Cart from './Cart';
import './Main.css';

export default function Main() {
    const[category]=useContext(myContext);
    const[foods,setFoods]=useState([])
    useEffect(()=>{
        const matchFood=Data.filter(dt=> dt.category === category.toLowerCase());
        setFoods(matchFood);

    },[category])
  return (
    <div className='cardStyle'>
       
       {
        foods.map(food =>  <Cart food={food}/>)
       }

    </div>
  )
}
