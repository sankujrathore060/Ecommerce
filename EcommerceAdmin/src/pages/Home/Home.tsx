import Chart from "components/Chart/Chart";
import FeaturedInfo from "components/FeaturedInfo/FeaturedInfo";
import WidgetLg from "components/WidgetLg/WidgetLg";
import WidgetSm from "components/WidgetSm/WidgetSm";
import { IPageBreadcrumb } from "models/PageBreadcrumb";
import { PageBreadcrumb } from "pages/PageBreadcrumb/PageBreadcrumb";
import React from "react";
import { HomeContainer, Widget } from "./Home.Styles";

type HomeProps = {};

const data = [
  { name: "Jan", activeUser: 400 },
  { name: "Fav", activeUser: 200 },
  { name: "March", activeUser: 1000 },
  { name: "April", activeUser: 800 },
  { name: "May", activeUser: 2000 },
  { name: "Jun", activeUser: 700 },
  { name: "July", activeUser: 1500 },
  { name: "Aug", activeUser: 1700 },
];
const crumbList: IPageBreadcrumb[] = [
];
const Home: React.FC<HomeProps> = ({}) => {
  return (
    <HomeContainer>      
      <PageBreadcrumb crumbsList={crumbList} />
      <FeaturedInfo />
      <Chart title="Sales Analytics" data={data} grid dataKey="activeUser" />
      <Widget>
        <WidgetSm />
        <WidgetLg />
      </Widget>
    </HomeContainer>
  );
};

export default Home;
