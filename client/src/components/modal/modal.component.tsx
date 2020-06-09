import React from 'react';

export interface ModalProps {
  isActive: boolean,
  setActive: (active: boolean) => void,
}

export const Modal: React.FC<ModalProps> = ({isActive, setActive, children}) => {
  return (
    <div className={'modal' + (isActive ? ' is-active' : '')}>
      <div className='modal-background'></div>
      <div className='modal-content box'>
        {children}
      </div>
      <button className='modal-close is-large' aria-label='close' onClick={() => setActive(false)}></button>
    </div>
  )
}
