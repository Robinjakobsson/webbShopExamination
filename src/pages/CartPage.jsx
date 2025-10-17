import { useSelector } from 'react-redux'
import '../css/cart-page.css'
import SingleCartItemComponent from '../components/SingleCartItemComponent';
import { Link } from 'react-router';
import MovieDetailPage from './MovieDetailPage';
import { hideMovieDetailPage } from '../features/moviesSlice';
import { useEffect } from 'react';

const CartPage = () => {
    const showMovieDetail = useSelector((state) => state.movies.showMovieDetail);
    const selectedMovie = useSelector((state) => state.movies.selectedMovie);
    const userCart = useSelector((state) => state.cart.cartItems);
    const totalPrice = userCart.reduce((total, movie) => total + (movie.price * movie.quantity), 0);

    useEffect(() => {
        if(selectedMovie !== null) {
            dispatch(hideMovieDetailPage());
        }
    }, [])

    return (
        <section className='cartPage'>
            {!showMovieDetail &&
            <>
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
            </>
            }

            {showMovieDetail && selectedMovie &&
                <MovieDetailPage selectedMovie={selectedMovie}/>
            }
        </section>
    )
}

export default CartPage