import React from 'react'
import { Card} from 'react-bootstrap'

function ItemCardHome(props) {

 
  return (

   <>
    <Card  style={{ width: '18rem',backgroundColor:'beige', cursor:'pointer',marginBottom:'20px'}}>
    <Card.Img variant="top" src={props.img} />
    </Card>

  </>
    
  )
}

export default ItemCardHome