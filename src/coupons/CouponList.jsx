import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  TopToolbar,
  CreateButton,
  ExportButton,
  DeleteButton,
  BooleanField
} from "react-admin";

const CouponList = () => {
const CouponListActions=()=>(
  <TopToolbar>
  <CreateButton />
  <ExportButton />
  <DeleteButton selection="multiple" mutationMode="pessimistic" />
</TopToolbar>
);
  return (<List actions={<CouponListActions />}>
    <Datagrid rowClick="edit">
      <TextField source="code" label="Coupon Code" />
      <TextField source="discountType" label="Discount Type" />
      <TextField source="discountValue" label="Discount Value" />
      <TextField source="description" label="Description" />
      <TextField source="startDate" label="Start Date" />
      <TextField source="endDate" label="End Date" />
      <BooleanField source="isActive" label="Is Active?" />
      <EditButton basePath="/coupons" />
      <DeleteButton basePath="/coupons" />
    </Datagrid>
  </List>)
};

export default CouponList;
