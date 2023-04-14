import React from 'react';
import Card from 'react-bootstrap/Card';
import './Card.css';

export default function Cart(props) {
    const { name, category, img, description, price } = props.food;
    return (
        <div className='container cartDiv'>
            
            <Card className=' border-0' style={{ width: '16rem', height:'32rem' }}>

                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title id='name'>{name}</Card.Title>
                    <Card.Text>
                        {description}
                        <br />
                        <p id='price'>Price: {price}$</p>
                    </Card.Text>
                </Card.Body>
               
            </Card>
        

        </div>
    )
}
