import React from 'react';
import InputField from '../../../../components/inputs/input-field/InputField';
import TextArea from '../../../../components/inputs/text-area/TextArea';
import MyButton from '../../../../components/My-button/MyButton';
import { InputFlex } from '../../../../components/global-style/formsStyle';

const WebsiteInfo = ({ goBack }) => {
  return (
    <form>
      <InputFlex>
        <InputField
          name='title'
          type='text'
          label='שם הקורס'
          hebrew='true'
          required
        />
        <InputField
          name='courseGoalsSiteTitle'
          type='text'
          label='כותרת באתר '
          hebrew='true'
        />
        <TextArea
          name='courseGoals'
          type='text'
          label='מטרת הקורס'
          hebrew='true'
          small='true'
        />

        <InputField
          name='courseGoalsSiteTitle'
          type='text'
          label='כותרת באתר '
          hebrew='true'
        />
        <InputField
          name='preliminaryKnowledge'
          type='text'
          label='דרישות/ידע מקדים'
          hebrew='true'
        />
        <InputField
          name='preliminaryKnowledgeSiteTitle'
          type='text'
          label='כותרת באתר '
          hebrew='true'
        />
        <InputField
          name='howPromoteYou'
          type='text'
          label='איך הקורס יקדם אתכם'
          hebrew='true'
        />
        <InputField
          name='howPromoteYouSiteTitle'
          type='text'
          label='כותרת באתר '
          hebrew='true'
        />
      </InputFlex>
      <InputField
        name='marketing'
        type='text'
        label='עיגול שיווקי'
        hebrew='true'
      />
      <InputFlex>
        <InputField
          name='numberOfSessions'
          type='number'
          label='מספר מפגשים'
          hebrew='true'
        />
        <InputField
          name='numberOfSessionsSiteTitle'
          type='text'
          label='כותרת באתר '
          hebrew='true'
        />
        <InputField
          name='sessionLength'
          type='text'
          label='אורך כל מפגש'
          hebrew='true'
        />
        <InputField
          name='sessionLengthSiteTitle'
          type='text'
          label='כותרת באתר '
          hebrew='true'
        />
      </InputFlex>

      <div className='buttons'>
        <MyButton>שמור</MyButton>
        <MyButton onClick={() => goBack()} type='button' forgot>
          חזרה
        </MyButton>
      </div>
    </form>
  );
};

export default WebsiteInfo;
