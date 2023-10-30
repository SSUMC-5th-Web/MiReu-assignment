import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  background-color: #22254b;
  margin-top: 50px;
  margin-bottom: 50px;
}
`;

export const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const MovieContainer = styled.div`
  position: relative;
  margin: 16px;
  width: 150px;
  border: 1px solid black;
  background-color: #373b69;
  color: white;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);

  img {
    max-width: 100%;
  }

  .overview {
    display: none;
    position: absolute;
  }

  &.show-overview .overview {
    display: block;
  }

  ${(props) =>
    props.isMouseOver &&
    `
  .overview {
    display: block;
  }
`}
`;

export const MovieInfo = styled.div`
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-size: 5px;
  background-color: rgba(0, 0, 0, 0.5);

  h3 {
    margin: 0;
    font-size: 8px;
  }

  span {
    margin: 0;
    font-size: 8px;
  }
`;

export const OverviewStyled = styled.div`
  display: none;
`;
