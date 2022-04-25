import React from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { ICart } from "../../../../common/type";
import TableRowAction from "../../components/TableRowAction";

interface Props {
  items?: ICart[];
  onDelete: (record: any) => () => void;
  onEdit: (record: any) => () => void;
}
const data: ICart[] = [];
const CartTable = (props: Props) => {
  const columns: ColumnsType<ICart> = [
    {
      title: "No",
      dataIndex: "#",
      key: "#",
      width: 60,
    },
    {
      title: "product",
      dataIndex: "product",
      key: "product",
      sorter: true,
      width: 300,
    },

    {
      title: "tool",
      dataIndex: "tool",
      key: "tool",
      width: 120,
      render: (_: any, record: ICart) => (
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

export default CartTable;
