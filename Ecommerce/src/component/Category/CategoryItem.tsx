import React from "react";
import { ICategory } from "model/Slider";
import { Container, Title, Button, Info, Image } from "./CategoryItem.Styles";
import { Link } from "react-router-dom";

type CategoryItemProps = {
  category: ICategory;
};
export const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  return (
    <Container>
      <Link to={`/product/${category.cat}`}>
        <Image src={category.img} />
        <Info>
          <Title>{category.title}</Title>
          <Button>Show</Button>
        </Info>
      </Link>
    </Container>
  );
};
