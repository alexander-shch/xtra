import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Box from '../../../components/box/box.component';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SingleMerchantTabs } from './single-merchant-tabs/single-merchant-tabs';
import { MerchantProps } from '../merchants.model';
import { GET_MERCHANT } from '../merchants.gql';

export const SingleMerchant: React.FC = () => {
  const { merchantId } = useParams();
  const { loading, error, data, fetchMore } = useQuery<MerchantProps>(GET_MERCHANT, { //useQuery<PaginatedData<Merchant>>(
    variables: {id: merchantId},
    fetchPolicy: 'cache-and-network',
    notifyOnNetworkStatusChange: true,
  });

  //const fakeData = merchants.merchants.find(merchant => merchant.id === merchantId);

  const titleIcon = data?.merchant.tribeVerified ?
    <span className='icon has-text-success'>
      <FontAwesomeIcon icon={'check-circle'} title='Tribe Verified' /> 
    </span> :
    <span className='icon has-text-danger'>
      <FontAwesomeIcon icon={'times-circle'} title='Not Tribe Verified' />
    </span>

  return (
    <Box
      title={data?.merchant.storeName || 'Merchant not found'}
      titleIcon={titleIcon}
      subtitle='View or edit this merchants data'
    >
      {data &&
        <SingleMerchantTabs merchant={data.merchant}/>
      }
    </Box>
  );
};
