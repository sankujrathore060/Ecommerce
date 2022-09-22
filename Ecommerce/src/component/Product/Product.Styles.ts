import styled from "styled-components";


export const Info = styled.div`
    opacity: 0;
    position: absolute;
    z-index: 3;
    display: flex;
    height: 100%;
    width: 100%;
    background-color: gray;
    align-items: center;
    justify-content: space-around;    
    transition: all 0.5s ease;
`;
export const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfb;
  position:relative;
  &:hover ${Info}{
    opacity: 0.2;
  }
`;

export const Circle = styled.div`
    position: absolute;
    height: 250px;
    width: 250px;
    border-radius: 50%;
    background-color: white;
`;


export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: white;   
  transition: all 0.5s ease;
  &:hover {
    background-color: #00FFFF;   
    transform: scale(1.1);
  }
`;