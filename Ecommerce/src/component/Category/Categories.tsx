import React from "react";
import { Container } from "./Categories.Styles";
import { categories } from "data";
import { CategoryItem } from "./CategoryItem";
import { ICategory } from "model/Slider";

type CategoriesProps = {};

export const Categories: React.FC<CategoriesProps> = () => {
  const categoryList = categories.map((category: ICategory) => (
    <CategoryItem key={category.id} category={category} />
  ));

  return <Container>{categoryList}</Container>;
};
