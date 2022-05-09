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
const BookTable = (props: Props) => {
  const columns: ColumnsType<IBook> = [
    {
      title: "No",
      dataIndex: "#",
      key: "#",
      width: 60,
    },
    {
      title: "Image",
      dataIndex: "bookImage",
      key: "bookImage",
      width: 200,
    },
    {
      title: "Name",
      dataIndex: "bookName",
      key: "bookName",
      sorter: true,
      width: 500,
    },
    {
      title: "Price",
      dataIndex: "bookPrice",
      key: "price",
      sorter: true,
      width: 120,
    },
    {
      title: "Type",
      dataIndex: "bookType",
      key: "bookType",
      width: 300,
    },
    {
      title: "Tool",
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
  return (
    <Table
      rowKey="bookId"
      columns={columns}
      dataSource={props.items}
      bordered
    />
  );
};

export default BookTable;
