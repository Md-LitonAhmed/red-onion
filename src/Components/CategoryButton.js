import Button from 'react-bootstrap/Button';
import { textAlign } from '@mui/system';
import React, { useContext, useState } from 'react'
import { myContext } from '../App';

export default function CategoryButton() {
  const [category, setCategory] = useContext(myContext);
  const [color,setColor]=useState('');
  const [colorlunch,setColorlunch]=useState('');
  const [colordinner,setColordinner]=useState('');


  const handlerBreak=()=>{
    const btnColor= color ? '': 'primary';
    setColor(btnColor);
  }
  const handlerLunch=()=>{
    const btnColor= colorlunch ? '': 'primary';
    setColorlunch(btnColor);
  }
  const handlerDinner=()=>{
    const btnColor= colordinner ? '': 'primary';
    setColordinner(btnColor);
  }


  return (
    <div style={{ textAlign: 'center' }}>
     
     
        <Button  variant={color} onClick={() => {setCategory('breakfast'); handlerBreak();}}>Breakfast</Button>
        <Button  variant={colorlunch} onClick={() => {setCategory('lunch'); handlerLunch()}} >Lunch</Button>
        <Button   variant={colordinner} onClick={() => {setCategory('dinner'); handlerDinner()}} >Dinner</Button>
      
    </div>
  )
}
