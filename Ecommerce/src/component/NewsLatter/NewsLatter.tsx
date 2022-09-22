import React from "react";
import { Send } from "@material-ui/icons";
import {
  Container,
  Title,
  Desc,
  InputContainer,
  Input,
  Button,
} from "./NewsLatter.Styles";

type NewsLatterProps = {};

export const NewsLatter:React.FC<NewsLatterProps> = ({}) => {
  return (
    <Container>
      <Title>Test</Title>
      <Desc>This is Test</Desc>
      <InputContainer>
        <Input />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};
