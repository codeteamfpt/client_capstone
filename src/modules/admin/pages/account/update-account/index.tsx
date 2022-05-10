import React from "react";
import { useNavigate, useParams } from "react-router";
import useAccount from "../../../../../common/hook/useAccount";
import useAccounts from "../../../../../common/hook/useAccounts";
import useUpdateAccount from "../../../../../common/hook/useUpdateAccount";
import { IAccount } from "../../../../../common/type";
import AccountForm from "../account-form";

type Props = {};

const UpdateBook = (props: Props) => {
  const { getAccounts } = useAccounts();

  const { updateAccount } = useUpdateAccount();
  const navigate = useNavigate();

  const onSave = async (values: IAccount) => {
    await updateAccount(values);
    await getAccounts();
    navigate("/admin-book");
  };
  return (
    <AccountForm
      title="Cập nhật người dùng"
      typeForm="update"
      onSave={onSave}
    />
  );
};

export default UpdateBook;
