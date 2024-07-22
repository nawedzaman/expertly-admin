import React from 'react';
import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton,FunctionField } from 'react-admin';

const websites = [
  { id: 1, name: 'goexpertly' },
  { id: 2, name: 'eductre' },
  { id: 3, name: 'gradeage' },
  { id: 4, name: 'theprofess' },
  { id: 5, name: 'mytutorstation' },
  { id: 6, name: 'wishlearners' },
  { id: 7, name: 'wiservisions' },
  { id: 8, name: 'meritcourses' },
  { id: 9, name: 'learnyng' },
  { id: 10, name: 'tutorshour' },
];
const UserList = () => (
  <List >
    <Datagrid>
      <EmailField source="email" />
      <TextField source="fullName" />
      <TextField source="phone" />
      <FunctionField
        source="siteId"
        render={record=>websites.find(w=>w.id===record.siteId)?.name}
      />
      <EditButton basePath="/users" />
      <DeleteButton basePath="/users" />
    </Datagrid>
  </List>
);

export default UserList;