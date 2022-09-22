import { Visibility } from "@material-ui/icons";
import styled from "styled-components";

export const WidgetSmContainer = styled.div`
    flex: 1;    
    -webkit-box-shadow: 0px 0px 20px -2px #000000; 
    box-shadow: 0px 0px 20px -2px #000000;
    margin-right: 20px;
    padding: 20px;
    padding-right: 0px;
`;

export const WidgetSmTitle = styled.h3`
    font-size: 30px;
    margin-bottom: 20px;
`;

export const WidgetSmList = styled.ul`
    padding: 0px;
    padding-right: 20px;      
    max-height: 400px; 
    overflow-y: auto;
`;

export const WidgetSmListItem = styled.li`
    display: flex;
    list-style-type: none;
    justify-content: space-between;
    margin-bottom: 5px;
`;

export const WidgetSmImage = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
`;

export const WidgetSmUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const WidgetSmUserName = styled.span`
    font-weight: 700;
    font-size: 20px;
    
`;

export const WidgetSmUserTitle = styled.span`
    font-weight: 400;
`;

export const WidgetSmButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10%; 
    padding: 2px 10px; 
    cursor: pointer;
    border:none;
`;

export const WidgetSmIcon = styled(Visibility)`
    margin-right: 10px;
    font-size: 16px !important;
`;

export const HorizontalLine = styled.hr`
    color: #555;
    opacity: 0.5;
    margin: 5px 0px;
`;