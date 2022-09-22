import styled from "styled-components";

type WidgetLgStatusButtonProps = {
    status: "completed" | "pedding" | "cancled" | "approved" | "onprogress"
}


export const getStatus = (status: "completed" | "pedding" | "cancled" | "approved" | "onprogress") => {
    switch(status){
        case "completed":
            return "green";            
        case "pedding":
            return "red";
        case "cancled":
            return "yellow";            
        case "approved":
            return "blue";
        case "onprogress":
            return "pinck";
    }
}

export const WidgetLgContainer = styled.div`
    flex: 2;    
    -webkit-box-shadow: 0px 0px 20px -2px #000000; 
    box-shadow: 0px 0px 20px -2px #000000;
    padding: 20px;
`;

export const WidgetLgTitle = styled.h3`
    font-size: 30px;
    margin-bottom: 30px;
`;

export const WidgetLgTable = styled.table`
    width: 100%;
`;
export const WidgetLgTableHead = styled.thead`
`;
export const WidgetLgTableBody = styled.tbody`

`;
export const WidgetLgCustomer= styled.div`
    display: flex;
    align-items: center;
`;
export const WidgetLgCustomerImage = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    object-fit: cover;
`;
export const WidgetLgStatusButton = styled.button<WidgetLgStatusButtonProps>`
    background-color: ${ props =>  getStatus(props.status)};
    border: none;
    border-radius: 30%;
    color: gray;
    font-weight: 500;
    padding: 10px;
`;
export const WidgetLgCustomerName = styled.span`

`;
export const WidgetLgTableRow = styled.tr`

`;
export const WidgetLgTableColumn = styled.td` 
    width: auto;
`;