import React from 'react';
import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton } from 'react-admin';


const UserList = () => (
  <List >
    <Datagrid>
      <EmailField source="email" />
      <TextField source="fullName" />
      <EditButton basePath="/users" />
      <DeleteButton basePath="/users" />
    </Datagrid>
  </List>
);

export default UserList;