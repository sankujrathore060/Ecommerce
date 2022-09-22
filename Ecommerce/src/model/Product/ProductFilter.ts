import { ProductColors, ProductSizes } from "comman/enum";

export interface IProductFilter {
  color?: ProductColors;
  size?: ProductSizes;
}
