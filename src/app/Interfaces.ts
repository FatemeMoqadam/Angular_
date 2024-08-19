export interface Customer {
  id: number;
  Firstname: string;
  Lastname: string;
}

export interface Item {
  id: number;
  Name: string;
  Price: number;
}

export const CUSTOMERS: Customer[] = [
  { id: 1, Firstname: 'Alex',   Lastname: 'Brundle' },
  { id: 2, Firstname: 'George', Lastname: 'Smith' },
  { id: 3, Firstname: 'Sarah',  Lastname: 'King' },
  { id: 4, Firstname: 'Lily',   Lastname: 'James' },
  { id: 5, Firstname: 'Moka',   Lastname: 'Spring' },
  { id: 6, Firstname: 'David',  Lastname: 'Conner' },
  { id: 7, Firstname: 'Katy',   Lastname: 'Locke' },
  { id: 8, Firstname: 'Xaviar', Lastname: 'Lively' },
  { id: 9, Firstname: 'Will',   Lastname: 'Jackman' },
];

export const ITEMS: Item[] = [
  { id: 1, Name: 'Phone',   Price: 120 },
  { id: 2, Name: 'Laptop',  Price: 68 },
  { id: 3, Name: 'Table',   Price: 240 },
  { id: 4, Name: 'Ball',    Price: 697 },
  { id: 5, Name: 'Board',   Price: 340 },
  { id: 6, Name: 'Rubber',  Price: 241 },
  { id: 7, Name: 'Book',    Price: 700},
  { id: 8, Name: 'Mask',    Price: 298 },
  { id: 9, Name: 'Walker',  Price: 333 },
];
