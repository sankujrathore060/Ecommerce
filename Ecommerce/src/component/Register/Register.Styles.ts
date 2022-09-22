import styled from "styled-components";
import { mobile } from "responsive";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url("/images/register2.jpg") center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
  position: relative;
  ${mobile({ width: "75%" })}
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 300;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 10px;
  margin: 20px 10px 0 0;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

export const Aggrement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: teal;
  border: none;
  width: 40%;
  cursor: pointer;
`;

export const CloseItem = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  &:hover {
    background-color: #f8f4f4 !important;
  }
`;
