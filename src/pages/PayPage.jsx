import { useState } from 'react';
import '../css/pay-page.css'
import { useSelector, useDispatch } from 'react-redux';
import { cleanCart } from '../features/cartSlice';
import CreditCardComponent from '../components/CreditCardComponent';


const PayPage = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);
    console.log(cartItems)
    const imgUrl = "https://image.tmdb.org/t/p/w92"
    const totalPrice = cartItems.reduce((total, movie) => total + (movie.price * movie.quantity), 0);

    function backToLibrary() {
        window.location.href = '#/library';
    }

    const [paid, setPaid] = useState(false);

    //doesn't let to proceed if some card fields are empty
    function handleSubmit(event) {
        event.preventDefault();
        setPaid(true);
        dispatch(cleanCart());
    }

    if (!paid) {
        return (
            <div className="pp-pay-page">
                <section className="pp-payment-section">
                    <CreditCardComponent totalPrice={totalPrice} handleSubmit={handleSubmit} />
                </section>
                
                <section className="pp-movie-info-section">
                    {cartItems.map((item) => (
                        <div key={item.movie.id} className="pp-movie-item">
                            <img
                                src={`${imgUrl}${item.movie.poster_path}`}
                                alt="no image" />
                            <div className="pp-movie-texts">
                                <h2>{item.movie.title.length > 20
                                    ? item.movie.title.slice(0, 20) + "..."
                                    : item.movie.title}</h2>
                                <p>Price: {item.price * item.quantity} kr.</p>
                            </div>
                        </div>
                    ))}


                </section>
            </div>
        )
    } else {
        return (
            <div className="pp-payment-complete">
                <h1>Thank you for your purchase!</h1>
                <p>Your order number is {Math.floor(Math.random() * 1000 + 1)}.</p>
                <button onClick={backToLibrary}>Back to Library</button>
            </div>
        )
    }
}

export default PayPage