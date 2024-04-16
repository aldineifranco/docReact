import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Heading = styled.div`
  font-size: 16px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.gray_300};
`;

export const InputFilter = styled.form`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;

  input {
    color: ${({ theme }) =>
      theme.colors.text};
    flex: 1;
    padding: 12px;
    border: 0;
    border-radius: 4px;

    &::placeholder {
      font-style: italic;
      font-weight: 400;
      color: ${({ theme }) =>
        theme.colors.background_300};
    }
  }

  button {
    width: 40px;
    background-color: ${({ theme }) =>
      theme.white};
    border: 0;
    border-radius: 4px;
    color: ${({ theme }) =>
      theme.colors.cyan_400};
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;