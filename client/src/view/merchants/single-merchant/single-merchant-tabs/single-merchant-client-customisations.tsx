import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Box from '../../../../components/box/box.component';
import { MerchantProps, Merchant } from '../../merchants.model';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_MERCHANT_COLOUR } from '../../merchants.gql';
import { addNotification } from '../../../../services/notifications/notifications';
import { ApolloError } from 'apollo-client';
import { Toggle } from '@fevo-tech/component-library';
import { SketchPicker, ColorResult } from 'react-color';

export const SingleMerchantClientCustomisations: React.FC<MerchantProps> = ({merchant}) => {

  const [updateMerchantColorMutation] = useMutation(UPDATE_MERCHANT_COLOUR,
    {
      onCompleted(data: {updateMerchantColor: Merchant}) {
        addNotification(`Brand Colour for ${merchant.storeName} changed`, 'success')
      },
      onError(error: ApolloError) {
        addNotification(error.message, 'danger')
      },
    });

  const updateMerchantColor = (id: string, color: string ) => {
    updateMerchantColorMutation({
      variables: {
        id,
        color,
      },
    });
  }
  const [newBrandColor, setNewBrandColor] = useState(merchant.brandColor);
  return (
    <React.Fragment>
      <Box title='Branding' subtitle={`Choose the brand color for ${merchant.storeName}`}>
        <div className='field'>
          <div className='control'>
            <label className='label'>Brand Colour: <FontAwesomeIcon size='lg' icon='circle' color={merchant.brandColor} /></label>
            <SketchPicker
              color={newBrandColor}
              onChangeComplete={(color: ColorResult) => setNewBrandColor(color.hex)}
            />
          </div>
        </div>

        <div className='field'>
          <div className='control'>
            <button
              className='button is-primary'
              disabled={newBrandColor === merchant.brandColor}
              onClick={() =>updateMerchantColor(merchant.id, newBrandColor)}>
                Save
            </button>
          </div>
        </div>
      </Box>
      <Box title='Inventory Description'>
        <ul>
          <li>
            Show in listing?
            {merchant.inventoryDescription.showInListings ?
              <span className='icon has-text-success'>
                <FontAwesomeIcon icon={'check-circle'} title='Yes' /> 
              </span> :
              <span className='icon has-text-danger'>
                <FontAwesomeIcon icon={'times-circle'} title='No' />
              </span>
            }
          </li>
          <li>Character Limit: {merchant.inventoryDescription.characterLimit}</li>
        </ul>
      </Box>
    </React.Fragment>
  );
};
