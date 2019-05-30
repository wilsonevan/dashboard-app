import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GlobalColors, GlobalSizes } from "../styles/GlobalStyles";
import { Loader } from "semantic-ui-react";

const Home = () => {
  return (
    <>
      <PageContainer>Home Page</PageContainer>
    </>
  );
};

const PageContainer = styled.div``;

export default Home;
