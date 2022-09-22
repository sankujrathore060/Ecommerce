import React, { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { slideData } from "data";
import { ISlider } from "model/Slider";
import {
  Container,
  Arrow,
  Wrapper,
  ImgContainer,
  InfoContainer,
  Slide,
  Title,
  Desc,
  Button,
} from "./Slider.Styles";
import { SliderDirection } from "comman/enum";

type SliderProps = {};

export const Slider: React.FC<SliderProps> = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slideDetail = slideData.map((slide: ISlider) => (
    <Slide key={new Date().getMilliseconds()}>
      <ImgContainer>
        <img
          src={process.env.PUBLIC_URL + slide.img}
          className="product-image"
          width="90%"
        />
      </ImgContainer>
      <InfoContainer>
        <Title>{slide.title}</Title>
        <Desc>{slide.desc}</Desc>
        <Button>SHOP NOW</Button>
      </InfoContainer>
    </Slide>
  ));
  const handleArrowClick = (direction: SliderDirection) => {
    if (direction === SliderDirection.Left) {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : slideData.length - 1);
    } else {
      setSlideIndex(slideIndex < slideData.length - 1 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction={SliderDirection.Left} onClick={() => handleArrowClick(SliderDirection.Left)}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>{slideDetail}</Wrapper>
      <Arrow direction={SliderDirection.Right} onClick={() => handleArrowClick(SliderDirection.Right)}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};
