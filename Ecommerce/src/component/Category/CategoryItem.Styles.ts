import styled from "styled-components";
import { mobile } from "responsive";

export const Container = styled.div`
    flex:1;
    margin:1px;
    position: relative;
`;

export const Image = styled.img`
    width: 100%;
    object-fit: cover;
    ${mobile({ height: "20vh" })}
`;

export const Info = styled.div`
    position:absolute;
    top:0;
    bottom:0;
    display: flex;
    height:100%;
    width:100%;
    flex-direction: column;
    align-items:center;
    justify-content: center;
`;

export const Title = styled.h1`
    color: white;
    margin-bottom: 2%;
`;

export const Button = styled.button`
    border: none;
    background: white;
    padding: 10px;
    color:gray;
    cursor: pointer;
    font-weight: 700;
`;
