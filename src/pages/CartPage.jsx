import { useSelector } from 'react-redux'
import '../css/cart-page.css'
import SingleCartItemComponent from '../components/SingleCartItemComponent';
import { Link } from 'react-router';

const CartPage = () => {
    const userCart = useSelector((state) => state.cart.cartItems);
    const totalPrice = userCart.reduce((total, movie) => total + (movie.price * movie.quantity), 0);

    return (
        <section className='cartPage'>
            <p className='cartPageTitle'>Your cart</p>

            {userCart.length === 0 && (
                <p className='cartPagEmptyCartText'>Your cart is empty</p>
            )}

            <section className='cartPageCartItems'>
                {userCart.map((item) => (
                    <SingleCartItemComponent key={item.movie.title} item={item} />
                ))}
            </section>

                {userCart.length > 0 && (
                    <section className='cartPagePay'>
                        <section className='cartPageTotalSum'>
                            {/* Här är tanken att räkna ut totala summan om vi får till ett pris på varje film. Just nu bara placeholder. */}
                            <p>Total: {totalPrice} SEK</p>
                        </section>

                        <Link to ="/pay">
                        <button className='cartPageBtnPay'>CONTINUE TO PAYMENT</button>
                        </Link>
                    </section>
                    
                )}
            
        </section>
    )
}

export default CartPage