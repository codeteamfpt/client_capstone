import React from "react";
import { useNavigate } from "react-router";
import useAccounts from "../../../../../common/hook/useAccounts";
import useCreateCart from "../../../../../common/hook/useCreateCart";
import useRegister from "../../../../../common/hook/useRegister";
import { IAccount } from "../../../../../common/type";
import AccountForm from "../account-form";

type Props = {};

const AddAccount = (props: Props) => {
  const navigate = useNavigate();
  const { getAccounts } = useAccounts();
  const { register } = useRegister();

  // khi ấn save thì gọi hàm register để đăng kí thêm account
  const onSave = async (values: IAccount) => {
    await register(values);
    // đăng kí xong lấy lại list để cập nhật lại dữ liệu ra màn hình
    await getAccounts();
    // xong hết ở trên thì quay trở lại màn user list
    navigate("/admin-account");
  };
  return (
    <AccountForm title="Tạo mới người dùng" typeForm="create" onSave={onSave} />
  );
};

export default AddAccount;
