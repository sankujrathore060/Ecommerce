import styled from "styled-components";

type IAddProductFormInputProps = {
  controlType?: string;
};
type IAddProductFormLabelProps = {
  controlType?: string;
};
export const AddProductComponent = styled.div`
  flex: 4;
`;

export const AddProductTitle = styled.h1``;

export const AddProductForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

export const AddProductFormItem = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-right: 20px;
`;

export const AddProductFormLabel = styled.label<IAddProductFormLabelProps>`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
  color: gray;
  margin: ${(props) => (props.controlType === "radio" ? "10px" : "0px")};
`;

export const AddProductFormInput = styled.input<IAddProductFormInputProps>`
  padding: ${(props) => (props.controlType === "radio" ? "0px" : "10px")};
  margin-top: ${(props) => (props.controlType === "radio" ? "15px" : "0px")};
  border: 1px solid gray;
  border-radius: 5px;
`;

export const AddProductFormSelect = styled.select`
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;
export const AddProductFormSelectOption = styled.option``;

export const AddProductFormRadioGroup = styled.div``;

export const AddProductFormButton = styled.button`
  width: 200px;
  padding: 10px 0px;
  background: teal;
  border: none;
  border-radius: 10px;
  margin-top: 10px;
  cursor: pointer;
`;
