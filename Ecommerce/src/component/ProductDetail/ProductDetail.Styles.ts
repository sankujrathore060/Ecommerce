import styled from "styled-components";
import { mobile } from "responsive";

interface FilterColorProps {
  color: string;
  selColor: string;
}

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

export const ImgContainer = styled.div`
  flex: 1;
  width: 100%;
`;

export const Image = styled.img`
  height: 70vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

export const Title = styled.h1`
  font-weight: 700;
`;

export const Desc = styled.p`
  font-size: 20px;
  margin: 10px 0px;
`;

export const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

export const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  margin: 30px 0px;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

export const Filter = styled.div`
  display: Flex;
  align-items: center;
`;

export const FilterTitle = styled.span`
  font-weight: 200;
  font-size: 20px;
`;

export const FilterColor = styled.div<FilterColorProps>`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: 1px solid black;
  margin-left: 10px;
  margin-right: ${(props) => props.color === "yellow" && "10px"};
  opacity:${(props) => props.selColor === props.color ? "0.5" : "1.0"};
  &:hover {    
    opacity: 0.5;
  }
`;

export const FilterSize = styled.select`
  margin-left: 10px;
  padding: 10px;
`;

export const FilterSizeOption = styled.option`
  padding: 10px;
`;

export const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

export const Amount = styled.span`
  width: 30px;
  height: 30px;
  border: 1px solid teal;
  border-radius: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

export const Button = styled.button`
  padding: 10px;
  border: 2px solid teal;
  background-color: white;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: #f8f4f4;
  }
`;
