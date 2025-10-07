import { useDispatch, useSelector } from 'react-redux'
import '../css/cart-page.css'
import { decreaseQuantity, deleteItem, increaseQuantity } from '../features/cartSlice';
import binIcon from '../assets/bin-icon.png';

const CartPage = () => {
    const dispatcher = useDispatch();
    const userCart = useSelector((state) => state.cart.cartItems);
    const imgUrl = "https://image.tmdb.org/t/p/w92"

    return (
        <section className='cartPage'>
            <p className='cartPageTitle'>Your cart</p>

            {userCart.length === 0 && (
                <p className='cartPagEmptyCartText'>Your cart is empty</p>
            )}

            <section className='cartPageCartItems'>
                {userCart.map((item) => (
                    <article key={item.movie.title} className='cartPageSingleCartItem'>
                        <article className='cartPageCartItemImgAndQuantity'>
                            <img className='cartPageMovieImg' src={`${imgUrl}${item.movie.poster_path}`}/>
                            <article className='cartPageItemInfo'>
                                <p>{item.movie.title}</p>
                                <article className='cartPageItemQuantity'>
                                    <p>{item.quantity}</p>
                                    <article className='cartPageBtnQuantityContainer'>
                                        <button 
                                            onClick={() => dispatcher(decreaseQuantity(item))} 
                                            className={`cartPageBtnSubtractQuantity ${item.quantity > 1 ? "several" : "one"}`}
                                            disabled={item.quantity <= 1}
                                        >
                                            -
                                        </button>
                                        <button onClick={() => dispatcher(increaseQuantity(item))} className='cartPageBtnAddQuantity'>+</button>
                                    </article>
                                </article>
                            </article>
                        </article>

                        <article className='cartPageDeleteBtnAndPriceContainer'>
                            <p>149 kr</p>
                            <button onClick={() => dispatcher(deleteItem(item))} className='cartPageBtnDeleteCartItem'>
                                {/* Delete */}
                                <img src={binIcon} style={{height: "1.5rem", width: "auto"}}></img>
                            </button>
                        </article>
                        

                        
                    </article>
                ))}
            </section>

                {userCart.length > 0 && (
                    <section className='cartPagePay'>
                        <section className='cartPageTotalSum'>
                            {/* Här är tanken att räkna ut totala summan om vi får till ett pris på varje film. Just nu bara placeholder. */}
                            <p>Total: 459 SEK</p>
                        </section>

                        <button className='cartPageBtnPay'>CONTINUE TO PAYMENT</button>
                    </section>
                    
                )}
            
        </section>
    )
}

export default CartPage