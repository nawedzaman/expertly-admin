
import * as React from 'react';
import { Create, SimpleForm, TextInput, NumberInput, ImageInput, ImageField,CheckboxGroupInput,DateTimeInput ,ArrayInput,SimpleFormIterator,BooleanInput  } from 'react-admin';
const RichTextInput = React.lazy(() =>
    import('ra-input-rich-text').then(module => ({
        default: module.RichTextInput,
    }))
);
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
  { id: 18, name: 'coachedly' }
];

const CourseCreate = (props) => {
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
   // Default pricing data
   const defaultPricingData = [
    { attendeeCount: 1, price: "199.00", sessionType: "1 Attendee" },
    { attendeeCount: 2, price: "299.00", sessionType: "2 Attendees" },
    { attendeeCount: 3, price: "399.00", sessionType: "3 Attendees" },
    { attendeeCount: 4, price: "499.00", sessionType: "4 Attendees" },
    { attendeeCount: 5, price: "599.00", sessionType: "5 Attendees" },
    { attendeeCount: 1, price: "279.00", sessionType: "Live Plus Recorded session" },
    { attendeeCount: 1, price: "249.00", sessionType: "Live Plus Transcript session" },
    { attendeeCount: 1, price: "239.00", sessionType: "Recorded session" },
    { attendeeCount: 1, price: "199.00", sessionType: "Transcript" },
    { attendeeCount: 1, price: "378.00", sessionType: "Recorded Plus Transcript session" },
    { attendeeCount: 10, price: "1029.00", sessionType: "Group Session For 10 Attendees" },
    { attendeeCount: 11, price: "1499.00", sessionType: "Group Session For More Than 10 Attendees" }
  ];

  return (<Create {...props}>
    <SimpleForm validate={validateCourse}>
      <TextInput source="title" label="Course Topic" required="true"/>
      <TextInput source="instructor" label="Instructor" />
      <DateTimeInput  source="webinarDate" label="Webinar Date"/>
      <RichTextInput source="description" label="Course Description" stripTags required="true"/>
      <ImageInput source="pictures" label="Related pictures" accept="image/*" >
        <ImageField source="src" title="title" />
      </ImageInput>
      <NumberInput source="duration" label="Course Duration (in mins)" />
      <NumberInput source="price" label="Course Price"  required="true"/>
      {/* <NumberInput source="discountedPrice" label="Discounted Price (optional)" />
      <NumberInput source="rating" label="Initial Rating (optional)" />
      <NumberInput source="numReviews" label="Initial Number of Reviews (optional)" /> */}
      <CheckboxGroupInput
        source="siteId"
        label="Associated Websites" // Update label for clarity
        choices= {websites}
        optionText="name"
        optionValue="id"
        defaultValue={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]}
      />
      {/* <TextInput source="background" label="Course Background" stripTags/>
      <RichTextInput source="who_will_benefit" label="Who Will Benefit" stripTags/> */}
      <RichTextInput source="areas_covered" label="Area Covered" stripTags/>

      <RichTextInput source="why_register" label="Why Register" stripTags/>
      {/* <TextInput source="level" label="Level" stripTags/>
      <TextInput source="target_companies" label="Target Companies" stripTags/>
      <TextInput source="target_association" label="Target Association" stripTags/> */}
      <RichTextInput source="instructor_profile" label="Instructor Profile" stripTags/>
      <BooleanInput source="archieve" label="Archived" />
      <ArrayInput source="pricingData" defaultValue={defaultPricingData}>
        <SimpleFormIterator>
          <NumberInput source="attendeeCount" label="Attendee Count" />
          <NumberInput source="price" label="Price for this tier" />
          <TextInput source="sessionType" label="Session Type" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
)};

export default CourseCreate;