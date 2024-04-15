import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 3px 10px 20px -7px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 3px 10px 20px -7px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 3px 10px 20px -7px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) =>
    theme.colors.white};
`;

export const Title = styled.h1`
  font-size: 16px;
`;

export const Img = styled.img`
  border-radius: 50%;
`;
