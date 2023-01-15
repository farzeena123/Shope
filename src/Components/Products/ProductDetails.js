import React from 'react'
import { Button, Col, Container, Row,Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Header from '../Header/Header';
import data from '../../Data';

const ProductDetails =()=> {

    const proid=useParams();
    const proDetails=data.productData.filter(x=>x.id === proid)
    const product=proDetails;
    console.log(product)
  return (
    <>
    <Header/>
        <Container  >
          <Row className='bg-white'>
          <Col md={6}>
          <Image src={product.img}  style={{height:'500px', width:'400px'}} />
            </Col>
            <Col md={6}>
              <h4 className='text-uppercase text-black-50' >{product.title}</h4>
              <h1>{product.desc}</h1>
              <h3>{product.price}</h3>
              <Button className='btn btn-dark' >Add to Cart</Button>
            </Col>
          </Row>
        </Container>
    </>
  )
}

export default ProductDetails;