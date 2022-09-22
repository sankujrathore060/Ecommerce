import React, { useState, useEffect } from "react";
import { Container } from "./Products.Styles";
import { Product } from "./Product";
import { IProduct } from "model/Slider";
import { IProductFilter } from "model/Product/ProductFilter";
import { ProductSort } from "comman/enum";
import axios from "axios";
type ProductsProps = {
  productFilter?: IProductFilter;
  productSort?: ProductSort;
  category?: string;
};

export const Products: React.FC<ProductsProps> = ({
  productFilter,
  productSort,
  category,
}) => {
  const [product, setProduct] = useState<IProduct[]>([]);
  const [filterProduct, setFilterProduct] = useState<IProduct[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        console.log(category);
        const res = await axios.get(
          category
            ? `http://localhost:5000/api/products?category=${category}`
            : `http://localhost:5000/api/products`
        );
        console.log(res);
        setProduct(res.data);
      } catch (e) {
        alert(e);
      }
    };
    getProducts();
  }, [category]);

  useEffect(() => {    
    let colorFilterdProduct: IProduct[] = [];

    if (productFilter) {
      colorFilterdProduct = product.filter((x) =>
        productFilter.color ? x.color.includes(productFilter.color) : x
      );
      colorFilterdProduct = colorFilterdProduct.filter((x) =>
        productFilter.size ? x.size.includes(productFilter.size) : x
      );
    }

    setFilterProduct(colorFilterdProduct);
  }, [category, productFilter, product]);

  useEffect(() => {
    if(productSort === ProductSort.NEWEST) {
      setFilterProduct((prev) => 
        [...prev].sort((a,b) => +new Date(a.createdAt) - +new Date(b.createdAt))
      )
    } else if(productSort === ProductSort.PRICEASC) {
      setFilterProduct((prev) => 
        [...prev].sort((a,b) => a.price - b.price)
      )      
    } else if(productSort === ProductSort.PRICEDESC) {
      setFilterProduct((prev) => 
        [...prev].sort((a,b) => b.price - a.price)
      )   
    }
  }, [productSort])

  const filterProductList = filterProduct.map((product: IProduct) => (
    <Product product={product} key={product._id} />
  ));
  const productList = product.map((product: IProduct) => (
    <Product product={product} key={product._id} />
  ));
  return <Container>{category ? filterProductList : productList}</Container>;
};
