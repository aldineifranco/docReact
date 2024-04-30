import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  grid-template-rows: 120px auto;
  grid-template-areas:
    "header header"
    "sidebar main-content";
  height: 100vh;
`;

export const Header = styled.div`
  grid-area: header;
  background-color: #333;
  color: white;
  padding: 20px;
`;

export const Main = styled.div`
  padding: 48px
`;

