import './product1.css'
import Nikeshoes from '../../pictures/nike-shoes.jpg'
import Hmtishert from '../../pictures/hm-tshirt.jpg'
import Guccibag from '../../pictures/gucci-bag.jpg'
import React ,{ useState } from 'react';








const array={
    Nike:{
        image:Nikeshoes,
        brand:'Nike',
        nameProducts:'superstar',
        size: "8.5",
        price:239.55,

    },
    HM:{
        image:Hmtishert ,
        brand:'H&M',
        nameProducts:'T-shirt',
        size:'s',
        price:14.99,

    },
    Gucci:{
        image:Guccibag,
        brand:'Gucci',
        nameProducts:'CG Marmont',
        price:1850.00,

    }
}



export default function Product1(props){

    const [count,setcount]=useState(0)
    
    function increment(){
        props.settotalproduct((prev)=>prev+1)
        setcount(count+1)

    }


    const[price,setprice]=useState(0)

     
    function sumprice(){
        props.settotalprice((prev)=>prev +item.price)
        setprice(price+1)
      

    }





    const item = array[props.type]
    return(
      <div className='cont'>
<div className='conteiner'>
   <div className='products'>

    <div className='img-product'>
        <img src={item.image} alt="" />

    </div>


    <div className='description'>
        <h2>{item.brand}</h2>
        <h3>{item.nameProducts}</h3>
        <h4>{item.size}</h4>


    </div>

    <div className='price'>
        <h5>${item.price}</h5>

    </div>

    <div >
     <button className='button_add' onClick={()=>{increment(); sumprice()}} >Add to cart</button>

    </div>

   </div>
</div>  




</div>


    )
}