import styled from "styled-components"

export const Container = styled.button`
  background-color: ${({ theme }) =>
    theme.colors.primary};
  color: ${({ theme }) =>
    theme.colors.white};
  padding: 16px;
  border-radius: 8px;
  border: 0;
  width: 100%;
`;