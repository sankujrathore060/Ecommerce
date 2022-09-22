import styled from "styled-components";
import { mobile } from "responsive";

export const Container = styled.div`
  display: flex;
  background-color: lightcoral;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 250px;
`;
export const Title = styled.h1`
  font-size: 40px;
  line-height: 1px;
  font-weight: 700;
`;
export const Desc = styled.div`
  font-size: 20px;
  font-weight: 500;  
  ${mobile({ textAlign: "center" })}
`;

export const InputContainer = styled.div`
  border: 1px solid;
  display: flex;
  width: 40%;
  justify-content: space-between;
  ${mobile({ width: "80%" })}
`;

export const Input = styled.input`
  border: none;
  flex: 8;
  padding: 10px;
`;

export const Button = styled.button`
  border: none;
  flex: 1;
  background-color: teal;
`;
