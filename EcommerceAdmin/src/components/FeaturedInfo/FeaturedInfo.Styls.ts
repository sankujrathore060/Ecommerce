import styled from 'styled-components';

export const FeaturedInfoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const FeaturedItem = styled.div`
    flex:1;    
    margin: 0px 20px;
    padding: 30px;
    border-radius: 10px;
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 20px -2px #000000; 
    box-shadow: 0px 0px 20px -2px #000000;
`;

export const FeaturedTitle = styled.span`
    font-size: 20px;
`;

export const FeaturedMoneyContainer = styled.div`
    margin: 10px 0px;
    display: flex;
    align-items: center;
`;

export const FeaturedMoney = styled.span`
   font-size: 20px;
   font-weight: 600;
`;

export const FeaturedMoneyRate = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
`;

export const FeaturedSub = styled.span`
    font-size: 15px;
    color: gray;
`;