import React from "react";
import { Nabbar } from "component/Nabbar/Nabbar";
import { Announcement } from "component/Announcement/Announcement";
import { SliderStyled } from "component/Slider/SliderStyled";
import { Categories } from "component/Category/Categories";
import { Products } from "component/Product/Products";
import { NewsLatter } from "component/NewsLatter/NewsLatter";
import { Footer } from "component/Footer/Footer";

type HomeProps = {};

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <>
      <Announcement />
      <Nabbar />
      <SliderStyled />
      <Categories />
      <Products />
      <NewsLatter />
      <Footer />
    </>
  );
};
