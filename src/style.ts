import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  grid-template-rows: 70px auto;
  grid-template-areas:
    "sidebar header"
    "sidebar main-content";
  height: 100vh;
`;

export const Main = styled.div`
  padding: 48px
`;

