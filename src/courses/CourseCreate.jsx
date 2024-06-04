
import * as React from 'react';
import { Create, SimpleForm, TextInput, NumberInput, ImageInput, ImageField  } from 'react-admin';
const RichTextInput = React.lazy(() =>
    import('ra-input-rich-text').then(module => ({
        default: module.RichTextInput,
    }))
);
const CourseCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" label="Course Title" stripTags/>
      <RichTextInput source="description" label="Course Description" stripTags/>
      <ImageInput source="pictures" label="Related pictures" accept="image/*" >
        <ImageField source="src" title="title" />
      </ImageInput>
      <NumberInput source="duration" label="Course Duration (in hours)" />
      <NumberInput source="price" label="Course Price" />
      <NumberInput source="discountedPrice" label="Discounted Price (optional)" />
      <NumberInput source="rating" label="Initial Rating (optional)" />
      <NumberInput source="numReviews" label="Initial Number of Reviews (optional)" />
      {/* <UrlInput source="detailsLink" label="Course Details Link (optional)" /> */}
      <RichTextInput source="features" label="Course Features" stripTags/>
      <RichTextInput source="what_you_will_learn" label="What You Will Learn" stripTags/>
      <RichTextInput source="content" label="Course Content" stripTags/>
      <TextInput source="instructors" label="Instructors" stripTags/>
    </SimpleForm>
  </Create>
);

export default CourseCreate;