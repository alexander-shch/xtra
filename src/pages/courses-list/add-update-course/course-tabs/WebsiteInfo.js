import React from 'react';
import InputField from '../../../../components/inputs/input-field/InputField';
import TextArea from '../../../../components/inputs/text-area/TextArea';
import { InputFlex } from '../../../../components/global-style/formsStyle';
import LectureSelector from '../../../../components/lexture-selctor/LectureSelector';

const WebsiteInfo = ({
  handdleNestedChange,
  handdleChange,
  courseData,
  lectures,
  searchField,
}) => {
  const {
    requirements,
    meetingsCount,
    meetingLength,
    target,
    marketing,
    extTitles,
  } = courseData;
  return (
    <>
      <InputFlex>
        <InputField name='title' type='text' label='שם הקורס' hebrew='true' />
        <InputField
          name='title'
          handleChange={handdleNestedChange}
          value={extTitles.title}
          type='text'
          label='כותרת באתר '
          hebrew='true'
        />
        <TextArea
          name='target'
          type='text'
          label='מטרת הקורס'
          value={target}
          handleChange={handdleChange}
          hebrew='true'
          small='true'
        />

        <InputField
          name='target'
          handleChange={handdleNestedChange}
          value={extTitles.target}
          type='text'
          label='כותרת באתר '
          hebrew='true'
        />
        <InputField
          name='requirements'
          value={requirements}
          handleChange={handdleChange}
          type='text'
          label='דרישות/ידע מקדים'
          hebrew='true'
        />
        <InputField
          name='requirements'
          handleChange={handdleNestedChange}
          value={extTitles.requirements}
          type='text'
          label='כותרת באתר '
          hebrew='true'
        />
        <InputField
          name='progress'
          type='text'
          label='איך הקורס יקדם אתכם'
          hebrew='true'
        />
        <InputField
          name='progress'
          handleChange={handdleNestedChange}
          value={extTitles.progress}
          type='text'
          label='כותרת באתר '
          hebrew='true'
        />
      </InputFlex>
      <InputField
        name='marketing'
        value={marketing}
        handleChange={handdleChange}
        type='text'
        label='עיגול שיווקי'
        hebrew='true'
      />
      <InputFlex>
        <InputField
          name='meetingsCount'
          value={meetingsCount}
          type='number'
          label='מספר מפגשים'
          handleChange={handdleChange}
          hebrew='true'
        />
        <InputField
          name='meetingsCount'
          handleChange={handdleNestedChange}
          value={extTitles.meetingsCount}
          type='text'
          label='כותרת באתר '
          hebrew='true'
        />
        <InputField
          name='meetingLength'
          value={meetingLength}
          type='text'
          label='אורך כל מפגש'
          handleChange={handdleChange}
          hebrew='true'
        />
        <InputField
          name='meetingLength'
          handleChange={handdleNestedChange}
          value={extTitles.meetingLength}
          type='text'
          label='כותרת באתר '
          hebrew='true'
        />
      </InputFlex>
      <LectureSelector lectures={lectures} searchField={searchField} />
    </>
  );
};

export default WebsiteInfo;
