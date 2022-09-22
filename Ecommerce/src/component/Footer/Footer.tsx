import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Room,
  Phone,
  MailOutlined,
} from "@material-ui/icons";
import {
  Container,
  Left,
  Center,
  Right,
  Logo,
  Desc,
  SocialContainer,
  SocialIcon,
  Title,
  List,
  ListItem,
  ContactItem,
} from "./Footer.Styles";

type FooterProps = {};

export const Footer:React.FC<FooterProps> = ({}) => {
  return (
    <Container>
      <Left>
        <Logo>Sankuj</Logo>
        <Desc>This is Description</Desc>
        <SocialContainer>
          <SocialIcon color="blue">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="pink">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="lightblue">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Usefull Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Products</ListItem>
          <ListItem>Cantact us</ListItem>
          <ListItem>Login</ListItem>
          <ListItem>Category</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Home</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "5px" }} /> asd sdfsdfsdfds
        </ContactItem>

        <ContactItem>
          <Phone style={{ marginRight: "5px" }} /> +11 1212121211
        </ContactItem>

        <ContactItem>
          <MailOutlined style={{ marginRight: "5px" }} /> abc@123.com
        </ContactItem>
        <img src="/images/payment.png" height="50px" width="150px" />
      </Right>
    </Container>
  );
};
