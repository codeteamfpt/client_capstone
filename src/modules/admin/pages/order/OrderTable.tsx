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
const OrderTable = (props: Props) => {
  const columns: ColumnsType<IBook> = [
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
      title: "",
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

export default OrderTable;
