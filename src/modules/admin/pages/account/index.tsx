import { Button, Col, Row } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";
import { useNavigate } from "react-router";
import useAccount from "../../../../common/hook/useAccount";
import useAccounts from "../../../../common/hook/useAccounts";
import useCarts from "../../../../common/hook/useCart";
import useRemoveAccount from "../../../../common/hook/useRemoveAccount";
import { IAccount } from "../../../../common/type";
import AccountTable from "./AccountTable";

type Props = {};

const AccountManager = (props: Props) => {
  const { accounts, getAccounts } = useAccounts();
  const { removeAccount } = useRemoveAccount();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!accounts) {
      getAccounts();
    }
  }, [accounts]);
  const onDelete = (record: IAccount) => async () => {
    await removeAccount(record);
    await getAccounts();
  };

  // khi ấn vào icon edit thì gọi hàm onedit
  const onEdit = (record: IAccount) => async () => {
    // chuyển đến màn update user
    navigate(`/admin-account/update/${record.accountId}`);
  };
  // khi ấn vào tạo mới thì gọi hàm oncreate
  const onCreate = () => {
    //chuyển đến màn add user
    navigate("/admin-account/add");
  };
  // khi ấn vào icon cart thì gọi hàm onshow cart
  const onShowCart = (record: IAccount) => async () => {
    // chuyển đến màn list sản phẩm có trong cart
    navigate(`/admin-account/user-cart/${record.accountId}`);
  };
  return (
    <Row justify="center" style={{ marginTop: 60 }}>
      <Col span={22} style={{ backgroundColor: "white" }}>
        <Col
          span={24}
          style={{ backgroundColor: "white", padding: "40px 40px 0 40px" }}
        >
          <Row justify="space-between">
            <Col>
              <Title level={2}>Quản lí người dùng</Title>
            </Col>
            <Col style={{ margin: "40px 0 20px 0" }}>
              <Button type="primary" onClick={onCreate}>
                Thêm người dùng
              </Button>
            </Col>
          </Row>
        </Col>
        <Row justify="center">
          <Col span={22}>
            <Col span={24}>
              <AccountTable
                items={accounts}
                onDelete={onDelete}
                onEdit={onEdit}
                onShowCart={onShowCart}
              />
            </Col>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default AccountManager;
