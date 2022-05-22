export interface IHeader {
  title: string;
  content: string;
  url?: string;
}
export interface IBook {
  bookId?: string;
  bookName?: string;
  bookInfo?: string;
  bookPrice?: number;
  bookType?: string;
  bookImage?: string;
}
export interface IAccount {
  accountId?: string;
  userName?: string;
  passWord?: string;
  role?: number;
  userImage?: string;
}

export interface ICart {
  bookId: string;
  bookName: string;
  bookInfo: string;
  bookPrice: number;
  bookType: string;
  image: string;
  numberBook: number;
}
export interface IOrder {
  accountId: string;
  billId: string;
  name: string;
  email: string;
  phoneNumber: string;
  location: string;
  totalBill: number;
  createDate: string;
  status: string;
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
export interface IResponseData {
  status: {
    code: string;
    message: string;
  };
}

export interface IRemoveCartItemInput {
  bookId: string;
  accountId: string;
}
