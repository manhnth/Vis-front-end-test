export interface PhotoData {
  name: string;
  value: string;
}

export interface PhotoRes {
  SKU: string;
  active: boolean;
  category: string;
  description: string;
  id: string;
  metadata: PhotoData[];
  name: string;
  price: number;
}
