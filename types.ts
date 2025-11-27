export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  description: string;
  specs: {
    movement: string;
    case: string;
    waterResistance: string;
    strap: string;
  };
  image: string; // Fallback image
  colors: {
    case: string;
    dial: string;
    strap: string;
  };
}

export interface CartItem extends Product {
  quantity: number;
}
