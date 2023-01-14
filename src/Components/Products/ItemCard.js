import React, { useState } from 'react'
import './itemCard.css'
import {Card,Button,Container,Row,Col} from 'react-bootstrap'
import {StarFill} from 'react-bootstrap-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useCart} from 'react-use-cart';
import {CartProvider} from 'react-use-cart';


const createArray=(length)=>[
  ...Array(length)
]

function Stars({selected=false,onSelect}){
  return(
       <StarFill size={20} color={selected?'rgb(163, 133, 26)':'black'} onClick={onSelect} />
  )
}
function StarRating(){
  const [selected,setSelected]=useState(0)
  return createArray(5).map((n,i)=>(
             <Stars key={i}  selected={selected >i}  onSelect={()=>setSelected(i+1)} />
  ))
}

function ItemCard(props) {
  
   
    const {addItem}=useCart();
   
   return (
    <>
    <CartProvider>
    <Card className='m-3'  style={{ width: '18rem',backgroundColor:'beige', cursor:'pointer',marginBottom:'20px'}}>
    <Card.Img variant="top" src={props.img}  className='zoom' />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
       {props.desc}
      </Card.Text>
      <Card.Text><strong>$ {props.price}</strong></Card.Text>
       <Container fluid>
       <Row  className='d-flex justify-content-center'>
      <Button variant="dark" onClick={()=>addItem(props.item)}>   Add to cart  </Button>
      </Row><br/>
      <Col className='d-flex justify-content-center'>
      <StarRating />
      </Col>
      </Container>
    </Card.Body  >
  </Card>

  
</CartProvider>
  </>
  )
}

export default ItemCard