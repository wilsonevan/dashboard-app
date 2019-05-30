import React from "react";
import styled from "styled-components";
import { AuthConsumer } from "../../providers/AuthProvider";
import DashboardAdmin from "./DashboardAdmin";
import DashboardUser from "./DashboardUser";

const DashboardMain = props => {
  const {
    auth: { user, handleLogout },
    history
  } = props;

  return (
    <>
      <DashboardContainer>
        {user.admin ? <DashboardAdmin /> : <DashboardUser />}
      </DashboardContainer>
    </>
  );
};

const DashboardContainer = styled.div``;

const ConnectedDashboardMain = props => (
  <AuthConsumer>
    {value => <DashboardMain {...props} auth={value} />}
  </AuthConsumer>
);

export default ConnectedDashboardMain;
