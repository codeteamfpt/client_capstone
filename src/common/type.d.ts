export interface IHeader {
  title: string;
  content: string;
  url?: string;
}
export interface IBook {
  bookId: string;
  bookName: string;
  bookInfo: string;
  bookPrice: number;
  bookType: string;
  image: string;
}
export interface IAccount {
  accountId: string;
  userName: string;
  passWord: string;
  role: number;
  userImage: string;
}

export interface ICart {
  books: IBook[];
}

export interface InputTypeCart {
  accountId: string;
  bookId: string;
  numberBook: number;
}
export interface InputTypeBook {
  bookName: string;
  bookInfo: string;
  bookPrice: number;
  bookType: string;
  image: string;
}

export interface InputTypeAccount {
  userName: string;
  passWord: string;
  role: number;
  userImage: string;
}
