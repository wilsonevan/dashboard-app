import { createGlobalStyle } from "styled-components";

const GlobalColors = {
  PrimaryWhite: "#F2F2F2",
  PrimaryBlack: "#1C1C1C",
  PrimaryGrey: "#424242",
  SecondaryGrey: "#d3d3d3",
  PrimaryRed: "#E27365",
  SecondaryRed: "#FFA498",
  PrimaryOrange: "#E2A365",
  SecondaryOrange: "#FFCB98",
  PrimaryGreen: "#4BA964",
  SecondaryGreen: "#A8DEB6",
  PrimaryBlue: "#407E8C",
  SecondaryBlue: "#9DC5CE",
};

const GlobalSizes = {
  ScreenWidth: "1000px"
};

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Ubuntu');

* {
    font-family: 'Ubuntu', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: inherit !important;
}

body {
    box-sizing: border-box !important;
    /* font-family: Montserrat, san-serif; */
    letter-spacing: 1.25px !important;
    font-weight: 300 !important;
    background: #F2F2F2 !important;
    color: ${GlobalColors.PrimaryGrey};
}

h1 {
    font-family: 'Ubuntu', sans-serif !important;
    letter-spacing: 2px !important;
    font-weight: 1200 !important;
    font-size: 4rem !important;
    padding-bottom: 0.2rem;
    /* word-spacing: 1.2rem; */
    color: ${GlobalColors.PrimaryGrey};
    /* border-bottom: 1px solid #349dc4; */

    @media only screen and (max-width: ${GlobalSizes.ScreenWidth}) {
        font-size: 3rem !important;
    };
}

h2, h3, h4, h5, h6,
p, div, button, a, 
input, select, textarea {
    /* font-family: Montserrat, san-serif; */
    font-weight: 300 !important;
    letter-spacing: 1.25px !important;
    color: ${GlobalColors.PrimaryGrey};
}
`;

export { GlobalStyles, GlobalColors, GlobalSizes };
