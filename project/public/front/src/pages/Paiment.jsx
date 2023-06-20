import StripeCheckout  from 'react-strip-checkout'
const Paimant=()=>{

    return <StripeCheckout

    stripeKey="pk_test_51Jgto9SHO5t3rrNYYdOXIdScpGSRdEpZcnqeqj3y1CaI8I3DTfoN6qOy8nWizdPSW3dloOn05BmIkJ1c1NT1Wd4X00Sd3aN3IP"
    token={handleToken}
    billingAddress
    shippingAddressamount={totalPrice*100}
    name="All Products"
    >

    </StripeCheckout>
}
export default Paimant
