import { useState } from 'react';
import '../css/pay-page.css'
import { useSelector } from 'react-redux';

const PayPage = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    console.log(cartItems)
    const totalPrice = cartItems.reduce((total, movie) => total + movie.price, 0);

    function backToLibrary() {
        window.location.href = '#/library';
    }

    const [paid, setPaid] = useState(false);

    //doesn't let to proceed if some card fields are empty
    function handleSubmit(event) {
        event.preventDefault();
        setPaid(true);
    }


    if (!paid) {
        return (
            <div className="pp-pay-page">
              
                <section className="pp-payment-section">
                    <form className='pp-pay-form'

                        onSubmit={handleSubmit}

                    >
                        <label>
                            <span>Card number:</span>
                            <input type="text" placeholder="1234 5678 9012 3456" required />

                        </label>
                        {/* hit kan man lägga till ikoner senare
<div className='card-icons'>
    </div>
*/}

                        <div className="pp-date-cvv-row">
                            <label>
                                <span>Date:</span>
                                <input type="text" placeholder='MM/YY' required />
                            </label>

                            <label>
                                <span>Security code:</span>
                                <input type="text" placeholder='CVV' required />
                            </label>
                        </div>

                        <label>
                            <span>Card owner:</span>
                            <input type="text" placeholder='Name as on the card' required />
                        </label>

                        <div className="pp-remember-toggle">
                            <input type="checkbox" />
                            <span> Remember this card</span>

                        </div>
                        <button type="submit" className='pp-pay-button'>Pay {totalPrice}kr.</button>

                    </form>
                </section>

                <section className="pp-movie-info-section">
                    {cartItems.map((movie) => (
                        <div key={movie.id} className="pp-movie-item">
                            <img
                                src={movie.image}
                                alt="no image" />
                            <div className="pp-movie-texts">
                                <h2>{movie.title}</h2>
                                <p>Price: {movie.price}kr.</p>
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