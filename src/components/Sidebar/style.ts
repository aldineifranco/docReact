import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 120px);
  grid-area: sidebar;
  background-color: #fff;
  border-radius: 8px;
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
  padding: 12px;
`;

export const LinkSidebar = styled(Link)`
background-color: ${({ theme }) =>
    theme.colors.primary};
  color: ${({ theme }) =>
    theme.colors.white};
  padding: 16px;
  border-radius: 8px;
  border: 0;
  width: 100%;
  text-align: center;
`