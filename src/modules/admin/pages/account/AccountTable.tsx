import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import React from "react";
import { IAccount } from "../../../../common/type";
import TableRowAction from "../../components/TableRowAction";

interface Props {
  items?: IAccount[];
  onDelete: (record: any) => () => void;
  onEdit: (record: any) => () => void;
  onShowCart: (record: any) => () => void;
}
const AccountTable = (props: Props) => {
  const columns: ColumnsType<IAccount> = [
    {
      title: "STT",
      dataIndex: "accountId",
      key: "#",
      width: 60,
    },
    {
      title: "Avatar",
      dataIndex: "userImage",
      key: "userImage",
      width: 300,
    },
    {
      title: "Tên người dùng",
      dataIndex: "userName",
      key: "userName",
      width: 400,
    },
    {
      title: "Mật khẩu",
      dataIndex: "passWord",
      key: "passWord",
      width: 400,
    },
    {
      title: "Vai trò",
      dataIndex: "role",
      key: "role",
      width: 300,
      render: (_, record, __) => (
        <span>{record.role === 1 ? "ADMIN" : "USER"}</span>
      ),
    },
    {
      title: "",
      dataIndex: "tool",
      key: "tool",
      width: 120,
      render: (_: any, record: IAccount) => (
        <TableRowAction
          title="Bạn có chắc chắn muốn xóa không?"
          record={record}
          formScreen="account_manager"
          onShowCart={props.onShowCart}
          onDelete={props.onDelete}
          onEdit={props.onEdit}
        />
      ),
    },
  ];
  return (
    <Table
      rowKey="accountId"
      columns={columns}
      dataSource={props.items}
      bordered
    />
  );
};

export default AccountTable;
