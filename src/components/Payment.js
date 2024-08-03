import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Productcontext } from '../App';

const Payment = () => {
  const context = useContext(Productcontext);
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [error, setError] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    // Validate the inputs (simple validation example)
    if (cardNumber.length !== 16 || cvv.length !== 3 || !expiryDate || !cardholderName) {
      setError('Please enter valid payment details.');
      return;
    }
    // Here, you would handle the payment process (e.g., integrating with a payment gateway)
    console.log('Processing payment...');
    alert('Payment successful! Thank you for your purchase.');

    // Clear the cart and navigate to a success page or homepage
    context.setcart([]);
    context.setcartValue(0);
    navigate('/');
  };

  return (
    <div className="payment">
      <h1>Payment Details</h1>
      <form onSubmit={handlePayment}>
        <div>
          <label>Card Number:</label>
          <input
            type="text"
            maxLength="16"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Expiry Date (MM/YY):</label>
          <input
            type="text"
            placeholder="MM/YY"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>CVV:</label>
          <input
            type="text"
            maxLength="3"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Cardholder Name:</label>
          <input
            type="text"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;