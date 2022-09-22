import { Close } from "@material-ui/icons";
import { ILoginUser } from "models/User";
import React, { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  Link,
  CloseItem,
  Error
} from "./Login.Styles";
import { useAppDispatch, useAppSelector } from "redux/hook";
import { loginUser } from "service/userService";

type LoginProps = {};

export const Login: React.FC<LoginProps> = ({}) => {
  const [loginForm, setLoginForm] = useState<ILoginUser>({
    username: "",
    password: "",
  });

  const dispatch = useAppDispatch();
  const { isLoading, error, errorMessage } = useAppSelector(state => state.user);
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleLoginClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    loginUser(dispatch, loginForm);
  };

  return (
    <Container>
      <Wrapper>
        <CloseItem>
          <Close />
        </CloseItem>
        <Title>LOGIN</Title>
        <Form>
          <Input
            placeholder="username"
            name="username"
            onChange={handleLoginChange}
          />
          <Input
            placeholder="password"
            type="password"
            name="password"
            onChange={handleLoginChange}
          />
          <Button onClick={handleLoginClick} disabled={isLoading}>Login</Button>
          {error && <Error>Some thing went wrong</Error>}
          <Link>You have forgot password?</Link>
          <Link>You have not account?</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};
