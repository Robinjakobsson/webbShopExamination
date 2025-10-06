import '../css/pay-page.css'

const movies = [
    { id: 1, title: 'Movie 1', price: 10, image: 'url1' },
    { id: 2, title: 'Movie 2', price: 15, image: 'url2' },
    { id: 3, title: 'Movie 3', price: 20, image: 'url3' },
]

const PayPage = () => {
    return (
        <div className="pay-page">
            <section className="payment-section">
                <h1>Your order</h1>
                <form className='pay-form'>
                    <label>
                        <span>Card number:</span>
                        <input type="text" placeholder="1234 5678 9012 3456" required />

                    </label>
                    {/* hit kan man lägga till ikoner senare
<div className='card-icons'>
    </div>
*/}

                    <div className="date-cvv-row">
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

                    <div className="remember-toggle">
<span>Remember this card</span>
<input type="checkbox" />
                    </div>
                    <button type="submit" className='pay-button'>Pay</button>

                </form>
            </section>

            <section className="movie-info-section">
                {movies.map((movie) => (
                    <div key={movie.id} className="movie-item">
                        <img
                            src={movie.image}
                            alt="no image" />
                        <div className="movie-texts">
                            <h2>{movie.title}</h2>
                            <p>Price: {movie.price}kr.</p>
                        </div>
                    </div>
                ))}

            </section>
        </div>
    )
}

export default PayPage