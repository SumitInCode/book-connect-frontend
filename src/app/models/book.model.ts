export interface Book {
  id: number;
  title: string;
  authorName: string;
  isbn: string;
  synopsis: string;
  bookCover: string;
  genre: string;
  archived: boolean;
  shareable: boolean;
  rate: number;
}
