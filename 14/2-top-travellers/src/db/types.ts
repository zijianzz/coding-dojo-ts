import { Generated } from 'kysely';

export interface Database {
  Customers: CustomerTable;
  Order: OrderTable;
}

export interface CustomerTable {
  id: Generated<number>;
  name: string;
}

export interface OrderTable {
  id: Generated<number>;
  customerId: number;
}
