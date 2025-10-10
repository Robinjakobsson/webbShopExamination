import React from 'react'

export default function CreditCardComponent({ totalPrice, handleSubmit }) {

    const [cardNumber, setCardNumber] = React.useState('');

    function checkCardNumber(e) {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
        if (value.length > 16) {
            value = value.slice(0, 16); // Limit to 16 digits
        }
        const formattedValue = value.replace(/(.{4})/g, '$1 ').trim();

        setCardNumber(formattedValue);
    }
    return (

        <form className='pp-pay-form'

            onSubmit={handleSubmit}


        >
            <label>
                <span>Card number:</span>
                <input type="text" placeholder="1234 5678 9012 3456" required
                    value={cardNumber}
                    onChange={checkCardNumber}
                />

            </label>


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

    )
}