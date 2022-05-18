import React from "react";
import { useNavigate, useParams } from "react-router";
import useAccount from "../../../../../common/hook/useAccount";
import useAccounts from "../../../../../common/hook/useAccounts";
import useUpdateAccount from "../../../../../common/hook/useUpdateAccount";
import { IAccount } from "../../../../../common/type";
import AccountForm from "../account-form";

type Props = {};

const UpdateAccount = (props: Props) => {
  let { accountId: id } = useParams<"accountId">();
  const { getAccounts } = useAccounts();
  const { getAccount, account } = useAccount();

  const { updateAccount } = useUpdateAccount();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (id) {
      getAccount({ accountId: id || "" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  const onSave = async (values: IAccount) => {
    await updateAccount(values);
    await getAccounts();
    navigate("/admin-account");
  };
  return (
    <AccountForm
      title="Cập nhật người dùng"
      typeForm="update"
      onSave={onSave}
      item={account}
    />
  );
};

export default UpdateAccount;
