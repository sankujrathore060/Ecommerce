import styled from "styled-components";
import { mobile } from "responsive";

interface FooterProps {
  color: string;
}

export const Container = styled.div`
  display: flex;
  padding: 20px;
  ${mobile({ flexDirection: "column" })}
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
`;

export const Center = styled.div`
  flex: 1;  
  padding: 20px;
  ${mobile({ display: "none" })}
`;

export const Right = styled.div`
  flex: 1;  
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

export const Logo = styled.h1`
  font-size: 40px;
  font-weight: 700;
`;

export const Desc = styled.p`
  font-size: 20px;
`;

export const SocialContainer = styled.div`
  display: flex;
`;

export const SocialIcon = styled.div<FooterProps>`
  color: white;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  transition: all 0.5s ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 5px;
  font-size: 20px;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
`;
