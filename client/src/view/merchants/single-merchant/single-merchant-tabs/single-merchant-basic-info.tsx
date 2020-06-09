import React from 'react';
import Box from '../../../../components/box/box.component';
import { MerchantProps } from '../../merchants.model';

export const SingleMerchantBasicInfo: React.FC<MerchantProps> = ({merchant}) => {

  const [repFormEditable, setRepFormEditable] = React.useState(false);

  return (
    <React.Fragment>
      <Box title='Contact Info'>
        <p className='selectable'>Email: {merchant.email}</p>
      </Box>
      <Box title='Fevo Rep'>
        <div className='field is-grouped'>
          <div className='control'>
            {/* <input className='input' type='text' placeholder='First Name' onChange={() => setRepFormEditable(true)} defaultValue={merchant.fevoRep.firstName}/> */}
            <input className='input' type='text' placeholder='First Name' onChange={() => setRepFormEditable(true)} defaultValue='TODO: Fevo rep first name'/>
          </div>
          <div className='control'>
            {/* <input className='input' type='text' placeholder='Last Name' onChange={() => setRepFormEditable(true)} defaultValue={merchant.fevoRep.lastName}/> */}
            <input className='input' type='text' placeholder='Last Name' onChange={() => setRepFormEditable(true)} defaultValue='TODO: Fevo rep last name'/>
          </div>
        </div>
        <div className='field'>
          <div className='control'>
            {/* <input className='input' type='text' placeholder='Email' onChange={() => setRepFormEditable(true)} defaultValue={merchant.fevoRep.email}/> */}
            <input className='input' type='text' placeholder='Email' onChange={() => setRepFormEditable(true)} defaultValue='TODO: Fevo rep email'/>
          </div>
        </div>
        <div className='field'>
          <div className='control'>
            {/* <input className='input' type='text' placeholder='Tel. no' onChange={() => setRepFormEditable(true)} defaultValue={merchant.fevoRep.telephone}/> */}
            <input className='input' type='text' placeholder='Tel. no' onChange={() => setRepFormEditable(true)} defaultValue='TODO: Fevo rep telephone'/>
          </div>
        </div>
        <div className='field'>
          <div className='control'>
            <button className='button is-link' disabled={!repFormEditable}>Save Changes</button>
          </div>
        </div>
      </Box>
      <Box title='Tags'>
        <div className='tags'>
          {merchant.productTags.map((tag, index) => 
            <span key={index} className='tag'>{tag}</span>
          )}
        </div>
      </Box>
    </React.Fragment>
  );
};
