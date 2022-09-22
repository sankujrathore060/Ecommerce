import styled from "styled-components";

export const ProductContainer = styled.div`
  flex: 4;
`;

export const ProductTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
`;

export const ProductTitle = styled.h1``;

export const ProductAddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

export const ProductTop = styled.div`
  display: flex;
`;

export const ProductBottom = styled.div`
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 20px -2px #000000;
  box-shadow: 0px 0px 20px -2px #000000;
`;

export const ProductTopLeft = styled.div`
  flex: 1;
`;

export const ProductTopRight = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 20px -2px #000000;
  box-shadow: 0px 0px 20px -2px #000000;
`;

export const ProductInfoTop = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductInfoBottom = styled.div`
  margin-top: 10px;
`;

export const ProductInfoItem = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

export const ProductInfoKey = styled.span``;

export const ProductInfoValue = styled.span`
  font-weight: 300;
`;

export const ProductImage = styled.img`
  height: 40px;
  width: 40px;
  object-fit: cover;
  border-radius: 50%;
`;

export const ProductName = styled.span`
  font-weight: 600;
`;

export const ProductForm = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductFormLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductFormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductFormLabel = styled.label`
  margin-bottom: 10px;
  color: gray;
`;

export const ProductFormInput = styled.input`
  margin-bottom: 10px;
  border: none;
  padding: 5px;
  border-bottom: 1px solid gray;
`;

export const ProductFormSelect = styled.select`
  margin-bottom: 20px;
`;
export const ProductFormSelectOption = styled.option``;

export const ProductFormUpload = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductFormImage = styled.img`
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 10px;
`;

export const ProductFormSubmit = styled.button`
  border: none;
  cursor: pointer;
  background-color: teal;
  border-radius: 5px;
  color: white;
  padding: 5px;
`;
