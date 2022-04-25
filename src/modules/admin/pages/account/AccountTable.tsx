import React from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { IAccount, ICart } from "../../../../common/type";
import TableRowAction from "../../components/TableRowAction";

interface Props {
  items?: IAccount[];
  onDelete: (record: any) => () => void;
  onEdit: (record: any) => () => void;
}
const AccountTable = (props: Props) => {
  const columns: ColumnsType<IAccount> = [
    {
      title: "No",
      dataIndex: "#",
      key: "#",
      width: 60,
    },
    {
      title: "userImage",
      dataIndex: "userImage",
      key: "userImage",
      width: 300,
    },
    {
      title: "userName",
      dataIndex: "userName",
      key: "userName",
      sorter: true,
      width: 400,
    },
    {
      title: "passWord",
      dataIndex: "passWord",
      key: "passWord",
      width: 400,
    },
    {
      title: "role",
      dataIndex: "role",
      key: "role",
      width: 300,
      render: (_, record, __) => (
        <span>{record.role === 1 ? "ADMIN" : "USER"}</span>
      ),
    },
    {
      title: "tool",
      dataIndex: "tool",
      key: "tool",
      width: 120,
      render: (_: any, record: IAccount) => (
        <TableRowAction
          title="Bạn có chắc chắn muốn xóa không?"
          record={record}
          onDelete={props.onDelete}
          onEdit={props.onEdit}
        />
      ),
    },
  ];
  return <Table columns={columns} dataSource={props.items} bordered />;
};

export default AccountTable;
