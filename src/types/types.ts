import { ElementType } from 'react';

export type TSidebarItem = {
  icon: ElementType;
  label: string;
  url?: string;
  // children?: TSidebarItem[];
};

export type THeaderData = {
  id: string;
  label: string;
};

export type TVendorBodyData = {
  logo: string;
  name: string;
  location: string;
  address: string;
  tinNumber: string;
  license: string;
  totalReviews?: number;
  averageRating?: number;
  details?: string;
  totalProducts: number;
  totalOrders: number;
  completed: number;
  cancelled: number;
  returned: number;
};

export type TProductBodyData = {
  productImage: string;
  name: string;
  brand: string;
  category: string;
  vendor: string;
};

export type TUserBodyData = {
  name: string;
  email: string;
  phone: string;
  address: string;
};
