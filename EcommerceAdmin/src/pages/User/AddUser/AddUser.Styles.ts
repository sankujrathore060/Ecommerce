import styled from 'styled-components';

type IAddUserFormInputProps = {
    controlType?: string;
}
type IAddUserFormLabelProps = {
    controlType?: string;
}
export const AddUserComponent = styled.div`
    flex: 4;
`;


export const AddUserTitle = styled.h1`

`;

export const AddUserForm = styled.form`
    display: flex;
    flex-wrap: wrap;
`;


export const AddUserFormItem = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-right: 20px;
`;

export const AddUserFormLabel = styled.label<IAddUserFormLabelProps>`
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 500;
    color: gray;    
    margin: ${ props => props.controlType === "radio" ? "10px" : "0px" };
`;

export const AddUserFormInput = styled.input<IAddUserFormInputProps>`
    padding: ${ props => props.controlType === "radio" ? "0px" : "10px" };
    margin-top: ${ props => props.controlType === "radio" ? "15px" : "0px" };
    border: 1px solid gray;
    border-radius: 5px;
`;

export const AddUserFormSelect = styled.select`
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
`;
export const AddUserFormSelectOption = styled.option`
`;

export const AddUserFormRadioGroup = styled.div`
   
`;

export const AddUserFormButton = styled.button`
   width: 200px;
   padding: 10px 0px;
   background: teal;
   border: none;
   border-radius: 10px;
   margin-top: 10px;
   cursor: pointer;
`;