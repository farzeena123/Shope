import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ItemCard from './ItemCard'
import data from './Data'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


function Products() {
  return (
    <>
    <Header/>
   <h2 className='text-center mt-3'>ALL PRODUCTS</h2>
   <hr/>
   <Container  className='py-4' style={{display:'flex'}}>
    <Row className='justify-content-center ' >
      {data.productData.map((item,index)=>{
          return(
            
           <ItemCard
           
           img={item.img} 
           tiltle={item.title} 
           desc={item.desc} 
           price={item.price} 
           item={item} 
           key={index} /> 
           
           
          )
      })}
    
    </Row>
   </Container><hr/>
   <Footer/>
   </>
  )
}

export default Products