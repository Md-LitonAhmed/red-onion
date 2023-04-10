import Button from 'react-bootstrap/Button';
import { textAlign } from '@mui/system';
import React, { useContext, useState } from 'react'
import { myContext } from '../App';

export default function CategoryButton() {
  const [category, setCategory] = useContext(myContext);
  const [color,setColor]=useState('');
  const handler=()=>{
    const btnColor= color ? '': 'primary';
    setColor(btnColor);
  }


  return (
    <div style={{ textAlign: 'center' }}>
     
     
        <Button  variant={color} onClick={() => setCategory('breakfast')}>Breakfast</Button>
        <Button  variant={color} onClick={() => setCategory('lunch')} >Lunch</Button>
        <Button   variant={color} onClick={() => setCategory('dinner')} >Dinner</Button>
      
    </div>
  )
}
