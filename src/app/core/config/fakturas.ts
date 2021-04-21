import {FakturasModel, Seller} from '../../store/faktura';

export const sellers: {[key: string]: Seller} = {
  audi: {id: 1, name: 'audi', address: 'Kongo'},
  bmw: {id: 2, name: 'bmw', address: 'Germany'},
  mazerati: {id: 3, name: 'mazerati', address: 'Kongo'},
  linkoln: {id: 4, name: 'linkoln', address: 'Kongo'},
  buggati: {id: 5, name: 'buggati', address: 'Kongo'},
  baz: {id: 6, name: 'baz', address: 'Kongo'},
  mercedes: {id: 7, name: 'mercedes', address: 'Kongo'},

};

export const fakturas: FakturasModel[] = [
  {
    id: 1,
    data: '12.04.2000',
    seller: sellers.audi,
    price: 12,
  },
  {
    id: 2,
    data: '17.04.2010',
    seller: sellers.bmw,
    price: 25,
  },
  {
    id: 3,
    data: '12.04.2000',
    seller: sellers.audi,
    price: 32,
  },
  {
    id: 4,
    data: '12.04.2000',
    seller: sellers.audi,
    price: 47,
  },
  {
    id: 5,
    data: '12.04.2000',
    seller: sellers.audi,
    price: 19,
  },
  {
    id: 6,
    data: '12.04.2000',
    seller: sellers.mazerati,
    price: 27,
  },
  {
    id: 7,
    data: '12.04.2000',
    seller: sellers.linkoln,
    price: 88,
  },
  {
    id: 8,
    data: '12.04.2000',
    seller: sellers.baz,
    price: 93,
  },
  {
    id: 9,
    data: '12.04.2000',
    seller: sellers.buggati,
    price: 1,
  },
  {
    id: 10,
    data: '12.04.2000',
    seller: sellers.mercedes,
    price: 10,
  },
];
