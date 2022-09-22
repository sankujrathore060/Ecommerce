import { ProductColors, ProductSizes } from "comman/enum";

export interface ISlider {
    img: string,
    title: string,
    desc: string,
}

export interface ICategory {
    id: number,
    img: string,
    title: string,
    cat: string,
}

export interface IProduct {
    title: string,
    desc: string,
    img: string,
    categories: string[],
    size: ProductSizes[],
    color: ProductColors[],
    price: number,
    inStock: boolean,
    _id: string;
    createdAt: Date,
    quantity: number,
    isFromCart?: boolean
}