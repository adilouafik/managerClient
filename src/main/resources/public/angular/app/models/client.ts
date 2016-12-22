export interface Client {
  id: number;
  name: string;
  address: string;
  type: string;
  commandes: Commande[];
}

export interface Commande {
  id: number;
  numero: string;
  dateTimeCommande: Date;
  client: Client;
}

export interface Pagination {
    CurrentPage : number;
    ItemsPerPage : number;
    TotalItems : number;
    TotalPages: number;
}

export class PaginatedResult<T> {
    result :  T;
    pagination : Pagination;
}

export interface Predicate<T> {
    (item: T): boolean
}