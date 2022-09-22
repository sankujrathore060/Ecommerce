import React from "react";
import { Badge } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlined from "@material-ui/icons/ShoppingCartOutlined";
import {
  Container,
  Wrapper,
  Left,
  Right,
  Center,
  Language,
  SearchContainer,
  Input,
  Logo,
  MenuItem,
} from "component/Nabbar/Nabbar.Styles";
import { useAppSelector } from "redux/hook";
import { Link } from "react-router-dom";
import { IRegisterUser } from "model/User/User";

type NabbarProps = {};

export const Nabbar: React.FC<NabbarProps> = ({}) => {
  const quantity = useAppSelector((state) => state.cart.quantity);
  const user: IRegisterUser = useAppSelector((state) => state.user.currentUser);
  
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="search" />
            <SearchIcon style={{ fontSize: 16, color: "gray" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Sankuj</Logo>
        </Center>
        <Right>
          {!user || !user.email && <MenuItem>
            <Link to="/login">Login</Link></MenuItem>}
          {!user || (user && user.isAdmin) && <MenuItem>Register</MenuItem>}
          <MenuItem>
            <Link to="/cart">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};
