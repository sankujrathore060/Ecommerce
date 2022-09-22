import React from 'react';
import { FeaturedInfoContainer, FeaturedItem, FeaturedMoney, FeaturedMoneyContainer, FeaturedMoneyRate, FeaturedTitle, FeaturedSub } from './FeaturedInfo.Styls';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

type FeaturedInfoProps = {};

const FeaturedInfo: React.FC<FeaturedInfoProps> = ({}) => {
  return (
    <FeaturedInfoContainer>
        <FeaturedItem>
            <FeaturedTitle>Revanue</FeaturedTitle>
            <FeaturedMoneyContainer>
                <FeaturedMoney>$5000</FeaturedMoney>
                <FeaturedMoneyRate>-11.4 <ArrowUpward  style={{color: "Green", fontSize: 15}}/> </FeaturedMoneyRate>
            </FeaturedMoneyContainer>
            <FeaturedSub>Compared to Last Month</FeaturedSub>
        </FeaturedItem>
        <FeaturedItem>
            <FeaturedTitle>Revanue</FeaturedTitle>
            <FeaturedMoneyContainer>
                <FeaturedMoney>$5000</FeaturedMoney>
                <FeaturedMoneyRate>-11.4 <ArrowDownward style={{color: "Red", fontSize: 15}}/> </FeaturedMoneyRate>
            </FeaturedMoneyContainer>
            <FeaturedSub>Compared to Last Month</FeaturedSub>
        </FeaturedItem>
        <FeaturedItem>
            <FeaturedTitle>Revanue</FeaturedTitle>
            <FeaturedMoneyContainer>
                <FeaturedMoney>$5000</FeaturedMoney>
                <FeaturedMoneyRate>-11.4 <ArrowUpward style={{color: "Green", fontSize: 15}}/> </FeaturedMoneyRate>
            </FeaturedMoneyContainer>
            <FeaturedSub>Compared to Last Month</FeaturedSub>
        </FeaturedItem>
    </FeaturedInfoContainer>
    );
};

export default FeaturedInfo;
