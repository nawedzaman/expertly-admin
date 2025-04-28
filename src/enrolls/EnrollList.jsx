import React from "react";
import {
  List,
  Datagrid,
  FunctionField,
  DateField,
  EditButton,
  DeleteButton,
  Button,
} from "react-admin";
import VisitorIcon from '@mui/icons-material/Collections';

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
const EnrollmentList = () => (
  <List>
    <Datagrid>
      <FunctionField label="OrderId" render={(record) => record.orderId} />
      <FunctionField label="User" render={(record) => record.User.fullName} />
      <FunctionField
        label="Email"
        render={(record) => record.User.email}
      />
      <FunctionField
      label="Phone"
      render={(record) => record.User.phone}
      />
      <FunctionField
      label="Site"
      source="siteId"
      render={record=>websites.find(w=>w.id===record.User.siteId)?.name}
      />
      <FunctionField
        label="Course"
        render={(record) => record.Course.title}
      />
      <FunctionField label="Payment Amount" render={(record) => record.actualPricePaid} />
      <DateField source="Course.webinarDate" label="Webinar Date"/>
      <FunctionField
        label="Instructor"
        render={(record) => record.Course.instructor}
      />
      <DateField showTime="true" source="createdAt" label="Enrolled At" />
      <FunctionField
        label="Session Type"
        render={(record) => record.sessionType}
      />
      <FunctionField
        label="Invoice"
        render={(record) => {
          if (!record) return null; // Handle potential undefined record
          return (
            <a
              href={record.invoiceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
               <VisitorIcon/>
            </a>
          );
        }}
      />
    </Datagrid>
  </List>
);

export default EnrollmentList;
