import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 120px);
  grid-area: sidebar;
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px
`;