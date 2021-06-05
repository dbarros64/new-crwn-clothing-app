import React from 'react';
import StripeCheckout  from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51ISUwuLEMvkEm1HFG1UX0MrV40YuLItakQ034Xf7fH1VADEXOc1QSCtU7hUlxCSflUYC5ahVBTGdjz4QQrzmMOXL009rPmKKdu';

    const onToken = token => {
        console.log(token);
        alert('Payment successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Crown Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total price is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
        
    )
};


export default StripeCheckoutButton;