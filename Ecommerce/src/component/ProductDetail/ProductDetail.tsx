import React, { useMemo, useEffect, useState } from "react";
import { useLocation} from "react-router-dom";
import {
  Container,
  ImgContainer,
  InfoContainer,
  Wrapper,
  Image,
  Title,
  Desc,
  Price,
  Filter,
  FilterColor,
  FilterContainer,
  FilterSize,
  FilterSizeOption,
  FilterTitle,
  AddContainer,
  AmountContainer,
  Amount,
  Button,
} from "./ProductDetail.Styles";
import { Announcement } from "component/Announcement/Announcement";
import { Footer } from "component/Footer/Footer";
import { Nabbar } from "component/Nabbar/Nabbar";
import { NewsLatter } from "component/NewsLatter/NewsLatter";
import { Add, Remove } from "@material-ui/icons";
import { fetchProduct } from "service/productService";
import { IProduct } from "model/Slider";
import { useAppDispatch } from "redux/hook";
import { addProduct } from "redux/cartRedux";
import { ProductSizes, ProductColors } from "comman/enum";

type ProductDetailProps = {};

const productData: IProduct = {
    title: "",
    desc: "",
    img: "",
    categories: [],
    size: [],
    color: [],
    price: 0,
    inStock: false,
    _id: "0",
    quantity: 0,
    createdAt: new Date()  
};

export const ProductDetail: React.FC<ProductDetailProps> = ({}) => {
  const [product, setProduct] = useState<IProduct>(productData);
  const [quantity, setQuantity] = useState<number>(0);
  const [color, setColor] = useState<ProductColors[]>([]);
  const [size, setSize] = useState<ProductSizes[]>([]);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const productId = useMemo(() => {
    return location ? location.pathname.split('/')[3] : "";
  }, [location]);   
  useEffect(() => {
  const getProductById = async () => {
    try {       
      const res = await fetchProduct(productId);
      console.log(res)
      setProduct(res.data);
    }
    catch(e){
      console.log(e);
    }
  }
  getProductById();
  }, [productId])

  useEffect(() => {
    if(product && product.color.length > 0){
      const firstColor = product.color.at(0);
      firstColor && setColor([firstColor])
    }
    if(product && product.size.length > 0){
      const firstSize = product.size.at(0);
      firstSize && setSize([firstSize])
    }
  }, [product])
  
  const handleAddToCartClick = () => {
    dispatch(addProduct({ ...product, color, size, quantity }))
  }

  return (
    <Container>
      <Nabbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>{product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color.map((col, index) => 
              <FilterColor selColor={color.at(color.length - 1) ?? ""} color={col} key={index} onClick={() => setColor([col])}/>)}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSize([e.target.value as ProductSizes])}>                
              {product.size.map((si, index) => 
               <FilterSizeOption>{si}</FilterSizeOption>)}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
              <AmountContainer>
                  <Remove onClick={() => quantity > 0 && setQuantity(quantity - 1) }/>
                    <Amount>{quantity}</Amount>
                  <Add onClick={() => setQuantity(quantity + 1) }/>
              </AmountContainer>
              <Button onClick={handleAddToCartClick}>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLatter />
      <Footer />
    </Container>
  );
};
