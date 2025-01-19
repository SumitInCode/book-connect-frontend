// Base interface with common properties
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
