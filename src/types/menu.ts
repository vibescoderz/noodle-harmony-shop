export interface MenuItem {
  id: string;
  name: string;
  nameJp: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string;
  isPopular?: boolean;
  spicyLevel?: 1 | 2 | 3;
}

export type MenuCategory = 
  | 'ramen'
  | 'sides'
  | 'drinks'
  | 'desserts';

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface OrderInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  notes?: string;
}
