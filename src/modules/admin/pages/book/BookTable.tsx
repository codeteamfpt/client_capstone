import React from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { IBook } from "../../../../common/type";
import TableRowAction from "../../components/TableRowAction";

interface Props {
  items?: IBook[];
  onDelete: (record: any) => () => void;
  onEdit: (record: any) => () => void;
}
const data: IBook[] = [
  {
    image: "1",
    price: "1",
    title: "1",
  },
  {
    image: "2",
    price: "2",
    title: "2",
  },
  {
    image: "3",
    price: "3",
    title: "3",
  },
];
const BookTable = (props: Props) => {
  const columns: ColumnsType<IBook> = [
    {
      title: "No",
      dataIndex: "#",
      key: "#",
      width: 60,
    },
    {
      title: "title",
      dataIndex: "title",
      key: "title",
      sorter: true,
      width: 300,
    },
    {
      title: "price",
      dataIndex: "price",
      key: "price",
      sorter: true,
      width: 300,
    },
    {
      title: "image",
      dataIndex: "image",
      key: "image",
      sorter: true,
      width: 300,
    },
    {
      title: "tool",
      dataIndex: "tool",
      key: "tool",
      width: 120,
      render: (_: any, record: IBook) => (
        <TableRowAction
          title="Bạn có chắc chắn muốn xóa không?"
          record={record}
          onDelete={props.onDelete}
          onEdit={props.onEdit}
        />
      ),
    },
  ];
  return <Table columns={columns} dataSource={data} bordered />;
};

export default BookTable;
