import { Close } from "@material-ui/icons";
import React from "react";
import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Aggrement,
  Button,
  CloseItem,
} from "./Register.Styles";

type RegisterProps = {};

export const Register: React.FC<RegisterProps> = ({}) => {
  return (
    <Container>
      <Wrapper>  
        <CloseItem>
            <Close/>
        </CloseItem>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name"/>          
          <Input placeholder="last-name"/>
          <Input placeholder="username"/>
          <Input placeholder="email"/>
          <Input placeholder="password"/>
          <Input placeholder="confirm password"/>
          <Aggrement>By Accepting Tearm you must follow codition of <b>PRIVATE POLICY</b> and you not spoil given private policy ant time.</Aggrement>
          <Button>Register</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};
