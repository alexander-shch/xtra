import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Box from '../../components/box/box.component';
import { FilterMerchantModal } from './modals/filter-merchants-modal.component';
import { MerchantTagModal } from './modals/merchant-tags-modal.component';
import { Link } from 'react-router-dom';
import { GET_MERCHANTS } from './merchants.gql';
import { PaginatedItems } from '../..';
import { Merchant } from './merchants.model';

export const Merchants: React.FC = () => {
  const { loading, error, data, fetchMore } = useQuery<{merchants: PaginatedItems<Merchant>}>(GET_MERCHANTS, {
    variables: {
      limit: 5,
      offset: 0,
    },
    fetchPolicy: 'cache-and-network',
    notifyOnNetworkStatusChange: true,
  });

  const [filterModalActive, setFilterModalActive] = React.useState(false);
  const [tagModalActive, setTagModalActive] = React.useState(false);

  const productTotalSum = data?.merchants.items.reduce((sum, merchant) => sum = sum + merchant.productsCount, 0)

  return (
    <Box
      title='Merchants'
      subtitle={`There are ${data?.merchants.total} active merchants selling ${productTotalSum} products`}
      buttonText='Filter by merchant name, storename or tags'
      buttonAction={() => setFilterModalActive(!filterModalActive)}
    >
      <FilterMerchantModal isActive={filterModalActive} setActive={setFilterModalActive}></FilterMerchantModal>
      <div className='lists-wrapper'>
        {error ? (
          <p className='notification is-warning is-light'>
            There was an error fetching the merchants, please try again.
          </p>
        ) : (
          <table className='table is-striped is-fullwidth'>
            <thead>
              <tr>
                <th></th>
                <th>Store</th>
                <th>Tags</th>
                <th>Product Amount</th>
                <th>Last Sync</th>
                <th>Revenue</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr>
                  <td colSpan={7}>
                    <progress
                      className='progress is-small is-primary'
                      max='100'
                    >
                      15%
                    </progress>
                  </td>
                </tr>
              )}
              {data?.merchants.total ?
                data.merchants.items.map((merchant) => (
                  <tr key={merchant.id}>
                    <td>
                      {merchant.tribeVerified ?
                        <span className='icon has-text-success'>
                          <FontAwesomeIcon icon={'check-circle'} title='Tribe Verified' /> 
                        </span> :
                        <span className='icon has-text-danger'>
                          <FontAwesomeIcon icon={'times-circle'} title='Not Tribe Verified' />
                        </span>
                      }
                    </td>
                    <td>
                      <a className='button is-small is-success' href={merchant.storeUrl} target='_blank' title='Go to Store'>
                        <span className='icon is-small'>
                          <FontAwesomeIcon icon={['fab', 'shopify']} />
                        </span>
                        <span>
                          {merchant.storeName}
                        </span>
                        <span className='icon is-small'>
                          <FontAwesomeIcon icon={'external-link-alt'} />
                        </span>
                      </a>
                    </td>
                    <td>
                      <div className='tags'>
                        {!merchant.productTags.length &&
                          <em className='has-text-grey'>There are currently no tags for this store.</em>
                        }
                        {merchant.productTags.length < 5 ?
                          merchant.productTags.map((tag, index) => 
                            <span key={index}  className='tag'>{tag}</span>
                          ) :
                          <React.Fragment>
                            {merchant.productTags.slice(0, 5).map((tag, index) => 
                              <span key={index} className='tag'>{tag}</span>
                            )}
                            <button
                              className='button is-text is-small'
                              title='See all'
                              onClick={() => setTagModalActive(!tagModalActive)}>
                                &hellip; See All
                              </button>
                            <MerchantTagModal
                              isActive={tagModalActive}
                              setActive={setTagModalActive}
                              tags={merchant.productTags}
                              storeName={merchant.storeName}>
                            </MerchantTagModal>
                          </React.Fragment>
                        }
                      </div>
                    </td>
                    <td>{merchant.productsCount}</td>
                    <td>
                      {merchant.lastSync || <em className='has-text-grey'>No data on previous syncs</em>}
                      &nbsp;
                      {/* <button className='button is-small'> */}
                        <span className='icon is-small has-text-success'>
                          <FontAwesomeIcon icon={'sync-alt'} title='Resync' /> 
                        </span>
                      {/* </button> */}
                    </td>
                    <td>
                      <span className='has-text-success'>
                        TODO: Merchant revenue
                        {/* {merchant.revenue} */}
                      </span>
                    </td>
                    <td>
                      <Link className='button is-small is-primary' to={'/merchant/' + merchant.id + '/basic-info'}>View/Edit</Link>
                    </td>
                  </tr>
                )) :
                <tr>
                  <td colSpan={7}>There are currently no merchants</td>
                </tr>
                }
            </tbody>
          </table>
        )}
      </div>
    </Box>
  );
};
