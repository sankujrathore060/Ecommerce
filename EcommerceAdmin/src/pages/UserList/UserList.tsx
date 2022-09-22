import React, { useState } from 'react';
import { UserListContainer, UserImage, UserDiv, UserName, UserButton, ActionIcon } from './UserList.Styles';
import { DataGrid, GridCellParams, GridColDef } from '@material-ui/data-grid';
import { Edit, Delete } from '@material-ui/icons';
import { users } from  'common/data';
import { Link } from "react-router-dom";
import { IPageBreadcrumb } from 'models/PageBreadcrumb';
import { PageBreadcrumb } from 'pages/PageBreadcrumb/PageBreadcrumb';

type UserListProps = {};

export const UserList: React.FC<UserListProps> = ({}) => {

  const [userRow, setUserRow] = useState(users);

  const handleDeleteUser = (id :number) => {
    setUserRow(userRow.filter( x => x.id !== id));
  }
  
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'user',
    headerName: 'User',
    width: 250,
    editable: true,
    renderCell:(params: GridCellParams) => {
      return (
        <UserDiv className='userListUser'>
          <UserImage src={params.row.avatar} alt="" />
          <UserName>
            {params.row.userName}
          </UserName>
        </UserDiv>
      )
    }
  },
  {
    field: 'transaction',
    headerName: 'Transaction',
    width: 200,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    //type: 'number',
    width: 200,
    editable: true,
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 200,
    renderCell:(params: GridCellParams) => {
      return (
        <UserButton>
          <Link to={"/user/" + params.row.id }>            
            <ActionIcon>
              <Edit style={{color: "green"}}/>
            </ActionIcon>          
          </Link>
          <ActionIcon onClick={() => handleDeleteUser(params.row.id)}>
            <Delete style={{color: "red"}}/>            
          </ActionIcon>
        </UserButton>
      )
    } 
  }
];
const crumbList: IPageBreadcrumb[] = [
  { to: "/users", title: "UserList", isLast: true },    
];

  return (
      <UserListContainer>
      <PageBreadcrumb crumbsList={crumbList} />
      <DataGrid
        rows={userRow}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
      </UserListContainer>
  );
};
