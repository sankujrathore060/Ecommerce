import { Add, Remove } from "@material-ui/icons";
import { Announcement } from "component/Announcement/Announcement";
import { Footer } from "component/Footer/Footer";
import { Nabbar } from "component/Nabbar/Nabbar";
import React, { useState, useEffect } from "react";
import {
  Container,
  Wrapper,
  Title,
  Top,
  Bottom,
  TopButton,
  TopTexts,
  TopText,
  Info,
  Summery,
  Product,
  ProductDetail,
  ProductId,
  ProductName,
  ProductSize,
  ProductColor,
  PriceDetail,
  Details,
  Image,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Hr,
  SummeryTitle,
  SummeryItem,
  SummeryItemText,
  SummeryItemPrice,
  SummeryButton,
  NotProductAddedTitle,
} from "./Cart.Styles";
import { useAppSelector} from "redux/hook";
import { IProduct } from "model/Slider";
import { useAppDispatch } from "redux/hook";
import { updateProductFromCart } from "redux/cartRedux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import StripeCheckout, { Token } from "react-stripe-checkout";
import { userRequest } from "service/productService";

type CartProps = {};

const STRIPE_KEY = process.env.REACT_APP_STRIPE ?? "";

export const Cart: React.FC<CartProps> = ({}) => {
  const cart = useAppSelector(state => state.cart);
  const [stripeToken, setStripeToken] = useState<Token | null>(null)
  console.log(STRIPE_KEY);
  const navigate = useNavigate();

  const onToken = (token:Token) => {
      setStripeToken(token)
  }

  useEffect(() => {
      const insertPaymentDetail = async() => {
          try{
              const res = await userRequest.post("checkout/payment", 
              {
                  tokenId: stripeToken?.id,
                  amount: cart.total * 100,
              });
              console.log(res.data)   
             navigate('/success')           
          }
          catch(err){
              console.log(err)
          }
      }
      stripeToken && cart.total > 0 && insertPaymentDetail();
  }, [stripeToken, cart.total, navigate])
  const dispatch = useAppDispatch();
  const handleAddToCartClick = (product: IProduct) => {
    dispatch(updateProductFromCart({ ...product, quantity: product.quantity + 1, isFromCart: true }))
  }
  const handleRemoveToCartClick = (product: IProduct) => {
    product.quantity > 0 && dispatch(updateProductFromCart({ ...product, quantity: product.quantity - 1, isFromCart: true }));
  }
  return (
    <Container>
      <Nabbar />
      <Announcement />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <Link to="/">          
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText> Shopping Bag(2) </TopText>
            <TopText> Your Whishlist (2) </TopText>
          </TopTexts>
          <TopButton filled={true}>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>    
            {cart.products.length > 0 && cart.quantity > 0 ? cart.products.map((product: IProduct) => product.quantity > 0 && (
              <>
                <Product>
                  <ProductDetail>
                    <Image src={product.img} />
                    <Details>
                      <ProductName>
                        <b>Product: </b> {product.title}
                      </ProductName>
                      <ProductId>
                        <b>ID:</b> {product._id}
                      </ProductId>                      
                      <ProductColor color={product.color.at(0)?.toString() ?? ""} />
                      <ProductSize>
                        <b>Size:</b> {product.size.at(0)?.toString()}
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add  onClick={() => handleAddToCartClick(product)}/>
                        <ProductAmount>{product.quantity}</ProductAmount>
                      <Remove onClick={() => handleRemoveToCartClick(product)}/>
                      
                    </ProductAmountContainer>
                    <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
                  </PriceDetail>
                </Product>
                <Hr />
              </>                 
            )) : (<Product><NotProductAddedTitle>Not Any Product Selected</NotProductAddedTitle></Product>)}
          </Info>
          <Summery>
            <SummeryTitle>ORDER SUMMARY</SummeryTitle>
            <SummeryItem>
              <SummeryItemText>Subtotal</SummeryItemText>
              <SummeryItemPrice>$ {cart.total}</SummeryItemPrice>
            </SummeryItem>
            <SummeryItem>
              <SummeryItemText>Esitmated Shipping</SummeryItemText>
              <SummeryItemPrice>$ 5.90</SummeryItemPrice>
            </SummeryItem>
            <SummeryItem>
              <SummeryItemText>Shipping Discount</SummeryItemText>
              <SummeryItemPrice>$ -5.90</SummeryItemPrice>
            </SummeryItem>
            <SummeryItem type="total">
              <SummeryItemText>Total</SummeryItemText>
              <SummeryItemPrice>$ {cart.total}</SummeryItemPrice>
            </SummeryItem>
            <StripeCheckout
                name="Sankuj Store"
                image="/images/ecommerce.png"
                billingAddress
                shippingAddress
                description = " Yout total is $20"
                amount={cart.total * 100}
                token= {onToken}
                stripeKey={STRIPE_KEY}
            >                
                
            <SummeryButton>CHECKOUT NOW</SummeryButton>
            </StripeCheckout>
          </Summery>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};
