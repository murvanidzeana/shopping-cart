import './shoppingcart.css'

import Icon  from '../../pictures/icon.png'




export default function Shoppingcart(){



  
    return(

    <>    
    <header>   
<div className='header-icon'>
               <h1>Shopping cart</h1>
               <img className='icon' src={Icon}    alt="" />
           
              
             </div>


             <div className='text-h3'>
               <h3>3 items </h3>
             </div>
  </header>         
  </>
    
    )
}
