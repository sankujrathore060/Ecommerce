import styled from "styled-components";
import { mobile } from "responsive";

export const Container = styled.div``;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px; 
  ${mobile({ display: "flex", flexDirection: "column" })}
`;
export const Title = styled.h1`
  font-size: 40px;
  padding: 20px;
  margin: 0;  
  ${mobile({ paddingBottom: "0px" })}
`;

export const Filter = styled.div`
  display: flex;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

export const FilterText = styled.h1`
  font-size: 30px;
  font-weight: 600;
  ${mobile({ marginRight: "0px" })}
`;

export const Select = styled.select`
  padding: 10px;
  margin-left: 10px;
  ${mobile({ margin: "10px 0px" })}
`;
export const Option = styled.option`
  padding: 10px;
`;
