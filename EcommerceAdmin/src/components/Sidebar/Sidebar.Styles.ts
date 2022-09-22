import styled from 'styled-components';

type ISidebarListItemProps = {
    active?: boolean;
}

type ISidebarListProps = {
    active?: boolean;
}

export const SidebarContainer = styled.div`
    flex: 1;
    height: calc(100vh - 50px);
    background-color: rgb(251, 251, 255);
    position: sticky;
    top: 50px;
`;

export const SidebarWrapper = styled.div`
    padding: 20px;
    color: #555;
`;

export const SidebarMenuContainer = styled.div`
    margin-bottom: 10px;
`;

export const SidebarTitle = styled.h1`
    font-size: 13px;
    color: rgb(187, 186, 186);
`;

export const SidebarList = styled.ul<ISidebarListProps>`
    list-style: none;
    padding: 5px;    
    display: ${ props => props.active ? 'block' : 'none' };
`;

export const SidebarListItem = styled.li<ISidebarListItemProps>`
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;
    &:hover {
        color: orange;
        background-color: rgb(228, 228, 250);
    }
    
    color: ${ props => props.active ? 'orange' : '' } ;
    background-color: ${ props => props.active ? 'rgb(228, 228, 250)' : '' } ;
`;

export const DropableIcon = styled.span`
    cursor: pointer;
   &:hover {
    border-radius: 50%;
    height: 20px;
    width: 20px;
    background-color: orange;
    display: flex;
    align-items: center;
    justify-content: center;
   }
`;

export const Menu = styled.div`
    display:flex;
    align-items: center; 
    justify-content: space-between;
`;