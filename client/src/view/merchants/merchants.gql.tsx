import gql from "graphql-tag";

const MerchantFragment = gql`
  fragment MerchantProps on Merchant {
    id
    storeUrl
    storeName
    tribeVerified
    # name
    email
    # telephone
    productTags
    productsCount
    lastSync
    syncStatus
    # revenue
    # fevoRep
    brandColor
    multiSiteSharingEnabled
    inventoryDescription {
      showInListings
      characterLimit
    }
  }
`

export const GET_MERCHANTS = gql`
  query getMerchants($limit: Int!, $offset: Int) {
    merchants(limit: $limit, offset: $offset) {
      items {
        ...MerchantProps
      }
      total
    }
  }
  ${MerchantFragment}
`;

export const GET_MERCHANT = gql`
  query getMerchant($id: String!) {
    merchant(id: $id) {
      ...MerchantProps
    }
  }
  ${MerchantFragment}
`;

export const UPDATE_MERCHANT_COLOUR = gql`
  mutation updateMerchantColor($id: String!, $color: String!) {
    updateMerchantColor(id: $id, color: $color) {
      ...MerchantProps
    }
  }
  ${MerchantFragment}
`;