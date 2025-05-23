import React from 'react';
import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton,FunctionField } from 'react-admin';

const websites = [
  { id: 1, name: 'goexpertly' },
  { id: 2, name: 'eductre' },
  { id: 3, name: 'gradeage' },
  { id: 4, name: 'theprofess' },
  { id: 5, name: 'mytutorstation' },
  { id: 6, name: 'wishlearners' },
  { id: 7, name: 'studyassistants' },
  { id: 8, name: 'tutorshour' },
  { id: 9, name: 'wiservisions' },
  { id: 10, name: 'eazyteach' },
  { id: 11, name: 'substantile' },
  { id: 12, name: 'skillvybe' },
  { id: 13, name: 'coachavo' },
  { id: 14, name: 'proficientme' },
  { id: 15, name: 'classtron' },
  { id: 16, name: 'workshopbay' },
  { id: 17, name: 'crescenz' },
  { id: 18, name: 'coachedly' },
  { id: 19, name: 'securmo' },
  { id: 20, name: 'wisearcs' },
  { id: 21, name: 'wikilay' },
  { id: 22, name: 'kodiqe' },
  { id: 23, name: 'zenmatix' },
  { id: 24, name: 'britewizard' },
  { id: 25, name: 'higheringco' },
  { id: 26, name: 'mindvalves' }
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