import React from 'react';
import {Modal, ModalProps} from '../../../components/modal/modal.component';

export const FilterMerchantModal: React.FC<ModalProps> = ({isActive, setActive}) => {
    return (
      <Modal isActive={isActive} setActive={setActive}>
        <h2>Find a Merchant</h2>
        <div className='field'>
          <label className='label'>Merchant name</label>
          <div className='control'>
            <input className='input' type='text' placeholder='Merchant Name'/>
          </div>
        </div>
        <div className='field'>
          <label className='label'>Store name</label>
          <div className='control'>
            <input className='input' type='text' placeholder='Store name'/>
          </div>
        </div>
        <div className='field is-grouped'>
          <div className='control'>
            <button className='button is-link'>Search</button>
          </div>
          <div className='control'>
            <button className='button is-link is-light' onClick={() => setActive(!isActive)}>Cancel</button>
          </div>
        </div>
      </Modal>
    )
}