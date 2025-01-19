export interface Pagination {
  currentPage: number;  
  pageSize: number; 
  totalItems: number;   
  totalPages: number;    
  hasNext: boolean;    
  hasPrevious: boolean;  
}
export interface BookBase {
  id: number;
  title: string;
  authorName: string;
  bookCover: string;
  genre: string;
  rate: number;
}

export interface Book extends BookBase {
  isbn: string;
  synopsis: string;
  archived: boolean;
  shareable: boolean;
}

export interface BookMinimal extends BookBase {}
export interface BookMinimalResponse extends BookMinimal, Pagination {}
