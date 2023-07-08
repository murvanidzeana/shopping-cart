import './product.css';


import Nikeshoes from '../../pictures/nike-shoes.jpg';
import Hmtishert from '../../pictures/hm-tshirt.jpg';
import Guccibag from '../../pictures/gucci-bag.jpg'


const array={
    Nike:{
        image:Nikeshoes,
        brand:'Nike',
        nameProducts:'superstar',
        size:'8.5',
        price:'$239.55',

    },
    HM:{
        image:Hmtishert ,
        brand:'H&M',
        nameProducts:'T-shirt',
        size:'s',
        price:'$14.99',

    },
    Gucci:{
        image:Guccibag,
        brand:'Gucci',
        nameProducts:'CG Marmont',
        price:'$1850.00',

    }
}
export default function Product(props){
    const item = array [props.type]
    return(

<div className='shopping-cart'>        
              
<div  className='products'>
        
            <img src={item.image} className='img-product' alt="" />
        

        <div className='description'>
            <h2>{item.brand}</h2>
            <p>{item.nameProducts}</p>
            <h4>{item.size}</h4>


        </div>


        <div className='price'>
            <h5>{item.price}</h5>

        </div>
        
         <div className='addtocart'>
        <button>Add to cart</button>
        </div>
          

 </div>
 
 
 
 

        
 
     </div>

)}
