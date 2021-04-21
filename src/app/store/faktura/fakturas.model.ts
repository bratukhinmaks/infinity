
export interface FakturasModel {
  id: number;
  data: string;
  seller: Seller;
  price: number;
}

export interface Seller {
  id: number;
  name: string;
  address: string;
}

export interface FakturasState {
 fakturas: FakturasModel[];
 filteredFakturas: FakturasModel[];
 selectedFaktura: FakturasModel[];
 sellers: Seller[];
}

export const initialState: FakturasState = {
  fakturas: [],
  selectedFaktura: [],
  sellers: [],
  filteredFakturas: [],
};
