
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
  { id: 17, name: 'crescenz' }
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
  return (<Create {...props}>
    <SimpleForm validate={validateCourse}>
      <TextInput source="title" label="Course Topic" required="true"/>
      <RichTextInput source="description" label="Course Description" stripTags required="true"/>
      <ImageInput source="pictures" label="Related pictures" accept="image/*" >
        <ImageField source="src" title="title" />
      </ImageInput>
      <NumberInput source="duration" label="Course Duration (in mins)" />
      <NumberInput source="price" label="Course Price"  required="true"/>
      <NumberInput source="discountedPrice" label="Discounted Price (optional)" />
      <NumberInput source="rating" label="Initial Rating (optional)" />
      <NumberInput source="numReviews" label="Initial Number of Reviews (optional)" />
      <CheckboxGroupInput
        source="siteId"
        label="Associated Websites" // Update label for clarity
        choices= {websites}
        optionText="name"
        optionValue="id"
      />
      <TextInput source="background" label="Course Background" stripTags/>
      <RichTextInput source="who_will_benefit" label="Who Will Benefit" stripTags/>
      <RichTextInput source="areas_covered" label="Area Covered" stripTags/>
      <TextInput source="instructor" label="Instructor" />
      <DateTimeInput  source="webinarDate" label="Webinar Date"/>
      <RichTextInput source="why_register" label="Why Register" stripTags/>
      <TextInput source="level" label="Level" stripTags/>
      <TextInput source="target_companies" label="Target Companies" stripTags/>
      <TextInput source="target_association" label="Target Association" stripTags/>
      <RichTextInput source="instructor_profile" label="Instructor Profile" stripTags/>
      <BooleanInput source="archieve" label="Archived" />
      <ArrayInput source="pricingData">
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