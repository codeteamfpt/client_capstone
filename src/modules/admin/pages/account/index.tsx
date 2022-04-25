import { Col, Row } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";
import { useRecoilState } from "recoil";
import useAccounts from "../../../../common/hook/useAccounts";
import { globalState } from "../../../../state/appState";
import AccountTable from "./AccountTable";

type Props = {};

const AccountManager = (props: Props) => {
  const { accounts } = useAccounts();
  const onDelete = () => () => {};
  const onEdit = () => () => {};

  return (
    <Row justify="center" style={{ marginTop: 60 }}>
      <Col span={22} style={{ backgroundColor: "white" }}>
        <Col span={22}>
          <Title level={2} style={{ padding: "20px 0 0 20px" }}>
            Quản lí tài khoản
          </Title>
        </Col>
        <Row justify="center">
          <Col span={22}>
            <Col span={24}>
              <AccountTable
                items={accounts}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            </Col>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default AccountManager;
