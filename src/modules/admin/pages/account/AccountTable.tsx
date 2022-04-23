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
const data: IAccount[] = [
  {
    password: "1",
    username: "1",
  },
  {
    password: "2",
    username: "2",
  },
  {
    password: "3",
    username: "3",
  },
];
const AccountTable = (props: Props) => {
  const columns: ColumnsType<IAccount> = [
    {
      title: "No",
      dataIndex: "#",
      key: "#",
      width: 60,
    },
    {
      title: "username",
      dataIndex: "username",
      key: "username",
      sorter: true,
      width: 300,
    },
    {
      title: "password",
      dataIndex: "password",
      key: "password",
      sorter: true,
      width: 300,
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
  return <Table columns={columns} dataSource={data} bordered />;
};

export default AccountTable;
