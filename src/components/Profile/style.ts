import { styled } from "styled-components";

export const Container = styled.div`
  flex: 1;
  max-width: 15rem;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;

  padding: 16px;
  border-radius: 8px;
  box-shadow: 3px 10px 20px -7px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 3px 10px 20px -7px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 3px 10px 20px -7px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) =>
  theme.colors.white};
`;

export const Img = styled.img`
  border-radius: 4px;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 16px;
`;

export const Button = styled.button`
  border: 0;
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.cyan_700};
`;