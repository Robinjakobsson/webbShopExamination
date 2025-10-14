import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';

export default function CreditCardComponent({ totalPrice, handleSubmit }) {

    const [crash, setCrash] = useState(false);

    if (crash) {
        throw new Error("Имитация ошибки!");
    }

    const [cardNumber, setCardNumber] = React.useState('');

    function checkCardNumber(e) {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
        if (value.length > 16) {
            value = value.slice(0, 16); // Limit to 16 digits
        }
        const formattedValue = value.replace(/(.{4})/g, '$1 ').trim();
        setCardNumber(formattedValue);
    }

    const [cvv, setCvv] = React.useState('');

    function checkCvv(e) {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
        if (value.length > 3) {
            value = value.slice(0, 3); // Limit to 16 digits
        }
        setCvv(value);
    }

    const [date, setDate] = React.useState('');

    function checkDate(e) {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
        if (value.length > 4) {
            value = value.slice(0, 4); // Limit to 16 digits
        }
        if (value.length > 2) {
            value = value.slice(0, 2) + '/' + value.slice(2);
        }
        setDate(value);
    }

    const [cardOwner, setCardOwner] = useState('');

    function checkCardOwner(e) {
        const value = e.target.value.replace(/[^A-Za-zÅÄÖåäö\s]/g, ''); // Remove all characters that aren't letters or spaces.
        setCardOwner(value);
    }

    /**
     * Checks the field values before sent to the handleSubmit in PayPage.
     * If input is not correct, send an alert and return.
     */
    function localHandleSubmit(e) {
        e.preventDefault();
        const cardNumberDigitsOnly = cardNumber.replace(/\D/g, ''); // Removes spaces.

        // Checks that credit card number is exactly 16 digits long.
        if(cardNumberDigitsOnly.length !== 16) {
            alert("Card number has to be 16 digits.");
            return;
        }

        // Using regex to check date validity.
        if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(date)) {
            alert("Incorrect date format");
            return;
        }

        // Checks that cvv code is exactly 3 digits.
        if(cvv.length !== 3) {
            alert("Cvv code has to be 3 digits");
            return;
        }

        handleSubmit(e);
    }

    return (

        <form className='pp-pay-form'
            onSubmit={localHandleSubmit}
        >
            <label>
                <span>Card number:</span>
                <input type="text" placeholder="1234 5678 9012 3456" required
                    value={cardNumber}
                    onChange={checkCardNumber}
                />
            </label>

            <article className='payPageCardLogos'>
                <FontAwesomeIcon icon={faCcMastercard} className='cardLogos'/>
                <FontAwesomeIcon icon={faCcVisa} className='cardLogos'/>
            </article>


            <div className="pp-date-cvv-row">
                <label>
                    <span>Date:</span>
                    <input type="text" placeholder='MM/YY' required 
                    value={date}
                    onChange={checkDate}/>
                </label>

                <label>
                    <span>Security code:</span>
                    <input type="text" placeholder='CVV' required 
                      value={cvv}
                    onChange={checkCvv}/>
                </label>
            </div>

            <label>
                <span>Card owner:</span>
                <input type="text" placeholder='Name as on the card' required 
                    value={cardOwner}
                    onChange={checkCardOwner}
                />
            </label>

            <div className="pp-remember-toggle">
                <input type="checkbox" />
                <span> Remember this card</span>

            </div>
            <button type="submit" className='pp-pay-button'>Pay {totalPrice}kr.</button>
         <button onClick={() => setCrash(true)}>💥 Pay but unsuccessfully</button>
        </form>
    )
}