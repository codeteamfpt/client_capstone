import Form from "antd/lib/form/Form";
import React from "react";

type Props = {};

const UserProfile = (props: Props) => {
  return (
    <div id="user-profile">
      <div className="profile-wrapper">
        <Form>
          <div className="user-image"></div>
          <div className="user-info"></div>
        </Form>
      </div>
    </div>
  );
};

export default UserProfile;
