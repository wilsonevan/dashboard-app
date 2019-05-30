import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";
import React from "react";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import Login from "./components/Login";
import Register from "./components/Register";
import DashboardMain from "./components/dashboard/DashboardMain";
// import Profile from "./components/profile/Profile";
import FetchUser from "./components/FetchUser";
import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Navbar from "./components/Navbar";
// import Pricing from "./components/pricing/PricingView";
// import Features from "./components/pricing/Features";
import styled from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";

const App = () => (
  <>
    <GlobalStyles />
    {/* <Route exact path="/pricing" component={Pricing} /> */}
    {/* <Route exact path="/checkout" component={Checkout} /> */}
    {/* <Route exact path="/features" component={Features} /> */}
    <FetchUser>
      <Navbar />
      <Container as={AppContainer}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <ProtectedRoute exact path="/dashboard" component={DashboardMain} />
          {/* <ProtectedRoute exact path="/profile" component={Profile} /> */}
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
);

// This styling allows any App view and the Sidebar to fill up the entire page height
const AppContainer = styled.div`
  min-height: 100vh;
  margin-top: 8rem;
`;

export default App;
