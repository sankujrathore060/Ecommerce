import axios, { AxiosResponse } from 'axios';
import { IProduct } from 'model/Slider';

const BASE_URL = "http://localhost:5000/api/";
const TOKEN  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDc2NDljODJmZmE3NDkzNDI0ZmY0MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDc0MjU5OSwiZXhwIjoxNjQ1MDAxNzk5fQ.4sGIeI-xgA4hZf1OEJgTAT4o4o9M875JprmXxfolCq8";

export const publicRequest = axios.create({
    baseURL: BASE_URL, 
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}`} 
}); 

export const fetchProduct = (id : string): Promise<AxiosResponse<any, any>> => {
    return publicRequest.get(`/products/find/${id}`);
}