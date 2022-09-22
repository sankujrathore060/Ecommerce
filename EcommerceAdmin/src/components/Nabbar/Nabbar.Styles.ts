import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:50px;
    background-color:white;
    position: sticky;
    top: 0px;
    z-index: 999;
`;

export const ContainerWrapper = styled.div`
    height: 100%;
    padding: 0px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NabbarLeft = styled.div`
`;

export const NabbarRight = styled.div`
    display:flex;
`;

export const LogoSpan = styled.span`
    font-weight: bold;
    font-size: 30px;
    color: darkblue;
    cursor: pointer;
`;

export const NabbarIconContainer = styled.div`
    position: relative;
    margin-right: 10px;
    cursor: pointer;
    color: #555;
`;

export const NabbarIconBadge = styled.div`
    position: absolute;
    top: -5px;
    right: 0px;
    width: 15px;
    height: 15px;
    background-color: red;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
`;

export const Image = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    cursor:pointer;
`;