import './Header.css'
import { AiFillShopping } from 'react-icons/Ai';
import { MdShoppingBasket } from 'react-icons/Md';

function Header(){
    return(
        <>
            <div className='header'>
                <div className='about-shopping'>
                <div className='shoprange'>
                    <span className='shopicon'><AiFillShopping/></span>
                    <span className='shop-priceSpan'>
                       قیمت کل سفارشات :
                    </span>
                </div>

                <div className='shoprange'>
                    <span className='shopicon'><MdShoppingBasket/></span>
                    <span className='shop-numberSpan'>
                       تعداد محصول در سبد :
                    </span>
                </div>
                </div>

                <div className='menu'>
                    <span className='products-menu'>فهرست محصولات</span>
                    <span className='wallet'>کیف پول</span>
                    <span className='aboutUs'>درباره ما</span>
                </div>

            </div>
        </>
    )
}

export default Header