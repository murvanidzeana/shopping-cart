// import Shopping from './components/shopping';
import './App.css';
import Shoppingcart from './components/shoppingcart/shoppingcart';
import Product1 from './components/product1/product1';
import Checkout from './components/checkout/checkout';
import React, { useState } from 'react';


function App() {
  const [totalproduct,settotalproduct]=useState(0)

  const [totalprice,settotalprice]=useState(0)

  

 
       
  return (
    <div className='app'>
      
    <Shoppingcart  />
    <div className='quantity'><h6>{totalproduct} </h6></div>
    
    <Product1 type='Nike' settotalproduct={settotalproduct} settotalprice={settotalprice}/>
    <Product1 type='HM' settotalproduct={settotalproduct}  settotalprice={settotalprice}/>
    <Product1 type='Gucci' settotalproduct={settotalproduct} settotalprice={settotalprice}/>
    <Checkout />
    <div className='finallyprice'> ${totalprice}</div>
    

    </div>
    
  
   

    
  );
}

export default App;
