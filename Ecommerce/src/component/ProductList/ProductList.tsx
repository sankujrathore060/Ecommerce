import React,{ ChangeEvent, useMemo, useState } from "react";
import { useLocation} from "react-router-dom";
import { Nabbar } from "component/Nabbar/Nabbar";
import {
  Container,
  FilterContainer,
  Filter,
  Title,
  FilterText,
  Select,
  Option,
} from "./ProductList.Styles";
import { Announcement } from "component/Announcement/Announcement";
import { Products } from "component/Product/Products";
import { NewsLatter } from "component/NewsLatter/NewsLatter";
import { Footer } from "component/Footer/Footer";
import { IProductFilter } from "model/Product/ProductFilter";
import { ProductColors, ProductSizes, ProductSort } from "comman/enum";

type ProductListProps = {};

export const ProductList: React.FC<ProductListProps> = ({}) => {
  const location = useLocation();

  const category = useMemo(() => {
    return location ? location.pathname.split('/')[2] : "";
  }, [location]);  

  const [productFilter, setProductFilter] = useState<IProductFilter>({
    color:  undefined,
    size: undefined
  });

  const [productSort, setProductSort] = useState<ProductSort>(ProductSort.NEWEST);
  
  const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const filterValue = event.target.value;
    setProductFilter({
      ...productFilter,
      [event.target.name]: filterValue
    })
  }

  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setProductSort(event.target.value as ProductSort);
  }
  return (
    <Container>
      <Nabbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText> Product Search : </FilterText>
          <Select name="color" onChange={handleFilterChange}>
            <Option disabled selected>
              Select Color
            </Option>
            <Option value={ProductColors.RED}>Red</Option>
            <Option value={ProductColors.GREEN}>Green</Option>
            <Option value={ProductColors.BLUE}>Blue</Option>
            <Option value={ProductColors.YELLOW}>Yellow</Option>
            <Option value={ProductColors.BLACK}>Black</Option>
            <Option value={ProductColors.WHITE}>White</Option>
          </Select>{" "}
          <Select name="size" onChange={handleFilterChange}>
            <Option disabled selected>
              Select Size
            </Option>
            <Option value={ProductSizes.XS}>XS</Option>
            <Option value={ProductSizes.S}>S</Option>
            <Option value={ProductSizes.M}>M</Option>
            <Option value={ProductSizes.L}>L</Option>
            <Option value={ProductSizes.XL}>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText> Sort :</FilterText>{" "}
          <Select onChange={handleSortChange}>
            <Option disabled selected>
              Select Record
            </Option>
            <Option value={ProductSort.NEWEST}>Newest</Option>
            <Option value={ProductSort.PRICEASC}>Price (asc)</Option>
            <Option value={ProductSort.PRICEDESC}>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products productFilter={productFilter} productSort={productSort} category={category}/>
      <NewsLatter />
      <Footer />
    </Container>
  );
};
