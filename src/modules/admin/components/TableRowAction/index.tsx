import {
  DeleteOutlined,
  EditOutlined,
  QuestionCircleOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Button, Popconfirm, Space } from "antd";
import React from "react";

interface IProps {
  record: any;
  title: string;
  formScreen?: string;
  onDelete: (record: any) => () => void;
  onEdit: (record: any) => () => void;
  onShowCart?: (record: any) => () => void;
}

const TableRowAction = (props: IProps) => {
  const { onDelete, onEdit, record, title, onShowCart, formScreen } = props;
  return (
    <Space size="small">
      {formScreen === "account_manager" ? (
        <Button
          type="ghost"
          onClick={onShowCart?.(record)}
          shape="circle"
          icon={<ShoppingCartOutlined />}
          size="middle"
          title="Hiển thị thông tin giỏ hàng"
        />
      ) : (
        <></>
      )}

      <Button
        type="ghost"
        onClick={onEdit(record)}
        shape="circle"
        icon={<EditOutlined />}
        size="middle"
        title="Sửa thông tin"
      />
      <Popconfirm
        title={title}
        cancelText="Không"
        okText="Xóa"
        placement="left"
        onConfirm={onDelete(record)}
        icon={<QuestionCircleOutlined style={{ color: "red" }} />}
      >
        <Button
          style={{ color: "red" }}
          type="ghost"
          shape="circle"
          icon={<DeleteOutlined />}
          size="middle"
        />
      </Popconfirm>
    </Space>
  );
};

export default TableRowAction;
