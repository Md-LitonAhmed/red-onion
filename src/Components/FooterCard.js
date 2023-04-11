import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function FooterCard(props) {
    const{service,img,description} =props.data;
  return (
    <div>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{ height: '15rem' }} src={img} />
      <Card.Body>
        <Card.Title>{service}</Card.Title>
        <Card.Text>
         {description}
        </Card.Text>
        <Button variant="primary">see more</Button>
      </Card.Body>
    </Card>
    </div>
  )
}
