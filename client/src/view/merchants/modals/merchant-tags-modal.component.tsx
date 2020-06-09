import React from 'react';
import {Modal, ModalProps} from '../../../components/modal/modal.component';

interface MerchatTagModalProps extends ModalProps {
    storeName: string;
    tags: string[];
}

export const MerchantTagModal: React.FC<MerchatTagModalProps> = ({isActive, setActive, storeName, tags}) => {
  return (
    <Modal isActive={isActive} setActive={setActive}>
      <h2>Tags for {storeName}</h2>
      <div className='tags'>
        {tags.map((tag, index) => 
          <span key={index} className='tag'>{tag}</span>
        )}
      </div>
      <button className='button is-info is-small' onClick={() => setActive(!isActive)}>Close</button>
    </Modal>
  )
}