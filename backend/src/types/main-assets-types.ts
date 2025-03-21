/*This file is contains all the types for main assets including user and cat data types */


enum pouchSize {
  A,
  B,
  C,
  D,
  E,
  F
}
export interface Cats{
  name: string,
  subscriptionActive: boolean,
  breed: string,
  pouchSize: pouchSize
}


export interface Users {
    id: string;
    firstName: string;
    lastName:string;
    email: string; //can be more strongly typed.
    cats: Cats[];
  }