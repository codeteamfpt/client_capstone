import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import React from "react";
import { ICart } from "../../../../common/type";

interface Props {
  items?: ICart[];
}
const data: ICart[] = [];
const CartTable = (props: Props) => {
  const columns: ColumnsType<ICart> = [
    {
      title: "STT",
      dataIndex: "bookId",
      key: "#",
      width: 60,
    },
    {
      title: "Hình ảnh",
      dataIndex: "bookImage",
      key: "bookImage",
      width: 200,
    },
    {
      title: "Tên sách",
      dataIndex: "bookName",
      key: "bookName",
      sorter: true,
      width: 500,
    },
    {
      title: "Giá sách",
      dataIndex: "bookPrice",
      key: "price",
      sorter: true,
      width: 120,
    },
    {
      title: "Loại sách",
      dataIndex: "bookType",
      key: "bookType",
      width: 300,
    },
    {
      title: "Số quyển",
      dataIndex: "numberBook",
      key: "numberBook",
      width: 300,
    },
  ];
  return <Table columns={columns} dataSource={data} bordered />;
};

export default CartTable;
