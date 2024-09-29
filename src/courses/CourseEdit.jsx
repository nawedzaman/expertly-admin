import * as React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput, CheckboxGroupInput , ImageInput, ImageField, ArrayField, Datagrid,FunctionField,DateInput,NumberField,TextField,List,BooleanInput   } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text'; // Assuming RichTextInput is imported correctly
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
  { id: 10, name: 'meritcourses' },
];
const CourseEdit = (props) => {
  const [siteId, setSiteId] = React.useState([]);
  const validateCourse = (values) => {
    const errors = {};
    if (!values.siteId|| values.siteId.length === 0) {
      errors.siteId = 'Please select at least one option.';
    }
    if (!values.description|| values.description.length === 0) {
      errors.description = 'Course description is missing';
    }
     return errors;
  };
  const handleCheckboxChange = (event) => {
    setSiteId(event.target.value); // Update siteId with selected values
  }
 return( <Edit {...props}>
    <SimpleForm validate={validateCourse}>
      <TextInput source="title" label="Course Topic" stripTags required="true"/>
      <RichTextInput source="description" label="Course Description" stripTags required="true"/>
      <ImageInput source="pictures" label="Related pictures">
        <ImageField source="src" title="title" />
      </ImageInput>
      <p style={{ fontSize: '0.75em',color: 'grey' }}>Current Image</p>
      <ImageField source="imageSrc" title="image"/>
      <NumberInput source="duration" label="Course Duration (in hours)" />
      <NumberInput source="price" label="Course Price" required="true"/>
      <DateInput source="webinarDate" label="Webinar Date" />
      <NumberInput source="discountedPrice" label="Discounted Price (optional)" />
      <NumberInput source="rating" label="Initial Rating (optional)" />
      <NumberInput source="numReviews" label="Initial Number of Reviews (optional)" />
      <CheckboxGroupInput
        source="siteId"
        choices={websites}
        optionText="name"
        optionValue="id"
        value={siteId} // Set the current selected value
        onChange={handleCheckboxChange} // Handle checkbox group changes
      />
      <p style={{ fontSize: '0.75em',color: 'grey' }}>Selected Sites</p>
      <FunctionField 
          label="Sites" 
          render={record => record.Sites.map(site => site.name).join(', ')} 
        />
      <TextInput source="background" label="Course Background" stripTags/>
      <RichTextInput source="who_will_benefit" label="Who Will Benefit" stripTags/>
      <RichTextInput source="areas_covered" label="Area Covered" stripTags/>
      <TextInput source="instructor" label="Instructors" />
      <RichTextInput source="why_register" label="Why Register" stripTags/>
      <TextInput source="level" label="Level" stripTags/>
      <TextInput source="target_companies" label="Target Companies" stripTags/>
      <TextInput source="target_association" label="Target Association" stripTags/>
      <RichTextInput source="instructor_profile" label="Instructor Profile" stripTags/>
      <TextInput source="fees" label="Fees" stripTags/>
      <BooleanInput source="archieve" label="Archived" />
      <h2>Pricing Details</h2>
        <ArrayField source="Pricings" label="Items in Promotion">
        <List dataSource="Pricings" hasCreate={false} hasEdit={true} hasDelete={true}>
        </List>
          <Datagrid>
            <NumberField source="attendeeCount" label="Attendee Count" />
            <NumberField source="price" label="Price" />
            <TextField source="sessionType" label="Session Type" />
          </Datagrid>
        </ArrayField>
    </SimpleForm>
  </Edit>
)};

export default CourseEdit;