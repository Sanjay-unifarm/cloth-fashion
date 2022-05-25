import React from "react";
import StripeCheckout from "react-stripe-checkout";


export const StripCheckoutButton = ({price})=>{
    const priceForStripe = price * 100;
    const publishablekey = "pk_test_51L2A7WSBQz3y3uWXNbrQvlvwcuvIYLQcdEkhJrhNdnnl7T1xNJ3WQt0pKelWNLk6Ad6VUsNIuv67Qkis2pbFLwZh00qtCl5O7C"

    const onToken = (token)=>{
        console.log(token);
        alert('payment successfull');

    }

    return(
        <StripeCheckout
            label="Pay Now"
            name="Cloth Fashions"
            billingAddress
            shippingAddress
            image= ''
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel= 'Pay Now'
            token={onToken}
            stripeKey={publishablekey}
           

        
        />
    )
}