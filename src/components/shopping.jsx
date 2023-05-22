import './shopping.css'
import Icon  from '../../src/pictures/icon.png'
import Nikeshoes from '../../src/pictures/nike-shoes.jpg'
import Hmtishert from '../../src/pictures/hm-tshirt.jpg'
import Guccibag from '../../src/pictures/gucci-bag.jpg'


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
export default function Shopping(props){
    const item = array [props.type]
    return(
 <div className='background'>
  <div className='shopping-cart'>
          
             <div className='header-icon'>
               <h1>Shopping cart</h1>
               <img src={Icon} alt="" />
             </div>

             <div className='text-h3'>
               <h3>3 items </h3>
             </div>
              
      <div  className='products'>
        <div>
            <img src={item.image} className='img-product' alt="" />
        </div>

        <div className='description'>
            <h2>{item.brand}</h2>
            <p>{item.nameProducts}</p>
            <h4>{item.size}</h4>


        </div>


        <div className='price'>
            <h5>{item.price}</h5>

        </div>

        <div className='addtocart-circle'>
            <h6>Add to cart</h6>

      </div>


        
    </div>  

    <div className='space'>

    </div>
    <footer>
        <div className='totalfooter'>
        <p className='total'> Total</p>
        <p className='finallyprice'> $2104.54 </p>
        </div>
        
        <button>Chekout</button>

    </footer>
   
    </div>
</div>
    )
}
