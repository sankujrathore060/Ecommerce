import styled from "styled-components";
import { SliderDirection } from "comman/enum";
import { SliderTransform } from "comman/constant";
import { mobile } from "responsive";

export interface ArrowProps {
  direction: SliderDirection;
}

export interface WrapperProps {
  slideIndex: number;
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

export const Arrow = styled.div<ArrowProps>`
  width: 50px;
  height: 50px;
  background-color: whitesmoke;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props: ArrowProps) => props.direction === SliderDirection.Left && "10px"};
  right: ${(props: ArrowProps) => props.direction === SliderDirection.Right && "10px"};
  margin: auto;
  z-index:2;
`;

export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

export const InfoContainer = styled.div`
  flex: 2;
`;

export const Wrapper = styled.div<WrapperProps>`
  height: 100%;
  display: flex;
  transition: all 1.5s;
  transform: translateX(${props => props.slideIndex * SliderTransform }vw);
`;

export const Title = styled.h1`
  font-size: 50px;

`;
export const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
export const Button = styled.button`
  padding:10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;