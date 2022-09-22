import styled from "styled-components";
import { mobile } from "responsive";

export const Container = styled.div`
  height: 100px;  
  ${mobile({ height: "80px" })}
  position: sticky;
  top: 0;
  z-index: 99999;
  background: white;
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;  
  ${mobile({ padding: "10px 0px" })}
`;

export const Language = styled.div`
  font-size: 14px;
  cursor: pointer;  
  ${mobile({ display: "none" })}
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Center = styled.div`
  flex: 1;
  text-align: center;
`;

export const Right = styled.div`
  flex: 1;
  display:flex;
  justify-content: flex-end;  
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

export const SearchContainer = styled.div`
  display: flex;
  border: 0.5px solid lightgray;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

export const Input = styled.input`
  border: none;  
  ${mobile({ width: "50px" })}
`;

export const Logo = styled.h1`
  font-weight: bold;  
  ${mobile({ fontSize: "24px" })}
`;

export const MenuItem = styled.div`
 font-size: 14px;
 cursor: pointer;
 margin-left: 10px; 
 ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;