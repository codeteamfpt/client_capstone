import React from "react";
import { useNavigate, useParams } from "react-router";
import useAccount from "../../../../../common/hook/useAccount";
import useAccounts from "../../../../../common/hook/useAccounts";
import useUpdateAccount from "../../../../../common/hook/useUpdateAccount";
import { IAccount } from "../../../../../common/type";
import AccountForm from "../account-form";

type Props = {};

const UpdateAccount = (props: Props) => {
  // lấy id ở trên đường dẫn
  let { accountId: id } = useParams<"accountId">();
  const { getAccounts } = useAccounts();
  const { getAccount, account } = useAccount();

  const { updateAccount } = useUpdateAccount();
  const navigate = useNavigate();

  // khi id thay đổi thì get lại dữ liệu của user
  React.useEffect(() => {
    if (id) {
      getAccount({ accountId: id || "" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // khi ấn save để thay đổi thông tin user thì gọi hàm để update thông tin
  const onSave = async (values: IAccount) => {
    await updateAccount(values);
    // update xong thì cập nhật lại user list
    await getAccounts();
    // xong tất cả thì chuyển lại màn user list
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
