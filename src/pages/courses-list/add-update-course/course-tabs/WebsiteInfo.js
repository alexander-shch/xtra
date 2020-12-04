import React from 'react';
import InputField from '../../../../components/inputs/input-field/InputField';
import TextArea from '../../../../components/inputs/text-area/TextArea';
import { InputFlex } from '../../../../components/global-style/formsStyle';
import LectureSelector from '../../../../components/lexture-selctor/LectureSelector';

const WebsiteInfo = ({
  handleNestedChange,
  handleChange,
  courseData,
  lectures,
  searchField,
  addLecture,
  removeLecture,
}) => {
  const {
    progress,
    requirements,
    meetingsCount,
    meetingLength,
    target,
    marketing,
    assignedLecturers,
    extTitles,
  } = courseData;
  return (
    <>
      <InputFlex>
        <TextArea
          name='target'
          type='text'
          label='מטרת הקורס'
          value={target}
          handleChange={handleChange}
          hebrew='true'
          small='true'
        />

        <InputField
          name='target'
          handleChange={handleNestedChange}
          value={extTitles.target}
          type='text'
          label='כותרת באתר '
          hebrew='true'
        />
        <InputField
          name='requirements'
          value={requirements}
          handleChange={handleChange}
          type='text'
          label='דרישות/ידע מקדים'
          hebrew='true'
        />
        <InputField
          name='requirements'
          handleChange={handleNestedChange}
          value={extTitles.requirements}
          type='text'
          label='כותרת באתר '
          hebrew='true'
        />
        <InputField
          value={progress}
          handleChange={handleChange}
          name='progress'
          type='text'
          label='איך הקורס יקדם אתכם'
          hebrew='true'
        />
        <InputField
          name='progress'
          handleChange={handleNestedChange}
          value={extTitles.progress}
          type='text'
          label='כותרת באתר '
          hebrew='true'
        />
      </InputFlex>
      <InputField
        name='marketing'
        value={marketing}
        handleChange={handleChange}
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
          handleChange={handleChange}
          hebrew='true'
        />
        <InputField
          name='meetingsCount'
          handleChange={handleNestedChange}
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
          handleChange={handleChange}
          hebrew='true'
        />
        <InputField
          name='meetingLength'
          handleChange={handleNestedChange}
          value={extTitles.meetingLength}
          type='text'
          label='כותרת באתר '
          hebrew='true'
        />
      </InputFlex>
      <LectureSelector
        addLecture={addLecture}
        removeLecture={removeLecture}
        assignedLecturers={assignedLecturers}
        lectures={lectures}
        searchField={searchField}
      />
    </>
  );
};

export default WebsiteInfo;
