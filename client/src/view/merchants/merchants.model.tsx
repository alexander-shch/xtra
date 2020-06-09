export enum syncStatus {
  RUNNING = 'Running',
  SUCCESS = 'Success',
  ERROR = 'Error',
}

export interface Merchant {
  disabled: boolean;
  id: string;
  storeUrl: string;
  storeName: string;
  tribeVerified: boolean;
  // name: string;
  email: string;
  // telephone: string;
  productTags: string[];
  productsCount: number;
  lastSync: string;
  syncStatus: syncStatus;
  // revenue: number;
  // fevoRep: User;
  brandColor: string;
  multiSiteSharingEnabled: boolean;
  inventoryDescription: {
    showInListings: boolean;
    characterLimit: number;
  };
}

export interface MerchantProps {
  merchant: Merchant;
}
