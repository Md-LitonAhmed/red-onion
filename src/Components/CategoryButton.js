import Button from 'react-bootstrap/Button';
import { textAlign } from '@mui/system';
import React, { useContext, useState } from 'react'
import { myContext } from '../App';

export default function CategoryButton() {
  const [category, setCategory] = useContext(myContext);
  const [colorbreak,setColorbreak]=useState('');
  const [colorlunch,setColorlunch]=useState('');
  const [colordinner,setColordinner]=useState('');


  const handlerBreak=()=>{
   
    setColorbreak('primary');
    setColorlunch('');
    setColordinner('');   
  }

  const handlerLunch=()=>{
    setColorlunch('primary');
    setColorbreak('');
    setColordinner('');
  }
  const handlerDinner=()=>{
    setColordinner('primary');
    setColorbreak('');
    setColorlunch('');
  }


  return (
    <div style={{ textAlign: 'center' }}>
     
     
        <Button  variant={colorbreak} onClick={() => {setCategory('breakfast'); handlerBreak();}}>Breakfast</Button>
        <Button  variant={colorlunch} onClick={() => {setCategory('lunch'); handlerLunch()}}>Lunch</Button>
        <Button   variant={colordinner} onClick={() => {setCategory('dinner'); handlerDinner()}} >Dinner</Button>
      
    </div>
  )
}
