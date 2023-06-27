import './Homepage.css'
import Header from '../header/Header'
import CartPosition from '../cartsPosition/cartPosition'



function Homepage(){
    return(
        <>
           <div className='homepage'>
           <Header/> 
           <CartPosition/>
           </div>
        </>
    )
}


export default Homepage