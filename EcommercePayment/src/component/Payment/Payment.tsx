import React, { useState, useEffect } from 'react'
import StripeCheckout, { Token } from 'react-stripe-checkout'
import { Container, Button } from './Payment.Styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
type PaymentProps = {}

const KEY  = "pk_test_51K4R9RSCICTyxlD84Sn8CLwsTf5LAsaLxGW80cEuGx5upCyH7Uqv71QgWMGrlmkkuzkVfAz4QIw2pOyrOhH6pc7U00hlsNCHgu"
const BASE_URL = "http://localhost:5000"
export const Payment: React.FC<PaymentProps> = () => {
    const [stripeToken, setStripeToken] = useState<Token | null>(null)

    const navigate = useNavigate();

    const onToken = (token:Token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const insertPaymentDetail = async() => {
            try{
                const res = await axios.post(BASE_URL + "/api/checkout/payment", 
                {
                    tokenId: stripeToken?.id,
                    amount: 2000,
                });
                console.log(res.data)   
                navigate('/success')           
            }
            catch(err){
                console.log(err)
            }
        }
        stripeToken && insertPaymentDetail();
    }, [stripeToken])
    
    return (
        <Container>
            <StripeCheckout
                name="Sankuj Store"
                image="/images/ecommerce.png"
                billingAddress
                shippingAddress
                description = " Yout total is $20"
                amount={2000}
                token= {onToken}
                stripeKey={KEY}
            >                
                <Button>Payment</Button>
            </StripeCheckout>
        </Container>
    )
}
