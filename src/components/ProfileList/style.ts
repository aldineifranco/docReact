import styled from "styled-components";

export const Heading = styled.div`
  font-size: 24px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.gray_300};
  margin-bottom: 24px;
`;

export const InputFilter = styled.input`
  padding: 16px;
`;

export const Content = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;