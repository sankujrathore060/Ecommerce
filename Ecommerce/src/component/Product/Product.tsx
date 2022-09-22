import React, { useMemo } from "react";
import { FavoriteBorderOutlined, SearchOutlined , ShoppingCartOutlined } from "@material-ui/icons";
import { Container } from "./Product.Styles";
import { IProduct } from "model/Slider";
import { Circle, Info, Icon } from "./Product.Styles";
import { Link, useLocation } from "react-router-dom";
type ProductProps = {
  product: IProduct;
};

export const Product: React.FC<ProductProps> = ({ product }) => {

  return (
      <Container>
        <Circle/>
        <img src={product.img} height="75%" width="240px" style={{zIndex: 2}}/>
        <Info>
          <Icon>
              <ShoppingCartOutlined />
          </Icon>
          <Link to={`/product/detail/${product._id}`}>          
            <Icon>
                <SearchOutlined/>
            </Icon>
          </Link>
          <Icon>
              <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </Container>
    );
};
