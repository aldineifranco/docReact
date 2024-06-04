import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 120px);
  grid-area: sidebar;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
  padding: 24px;
`;

export const Logo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 28px;
  width: 100%;

  h1 {
    font-size: 28px;
    text-align: center;

    span {
      color: ${({ theme }) =>
    theme.colors.primary};
    }
  }
`;

export const LinkSidebar = styled(Link)`
background-color: ${({ theme, isActive }) =>
  isActive
    ? theme.colors.primary
    : theme.primary.secondary };
  color: ${({ theme }) =>
    theme.colors.white};
  padding: 16px;
  border-radius: 8px;
  border: 0;
  width: 100%;
  text-align: center;

  &:active {
    background-color: red;
  }
`