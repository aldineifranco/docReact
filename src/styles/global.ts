import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
    background-color: ${({ theme }) =>
      theme.colors.background_100};
    color: ${({ theme }) =>
      theme.colors.background_900};

    -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
      font-family: "Roboto", sans-serif;
      font-weight: 700;
      font-style: normal;
      outline: none;
    }

    a {
      text-decoration: none;
    }

    button, a {
      cursor: pointer;
      transition: filter 0.2s
    }

    button:hover, a:hover {
      filter: brightness(0.9);
    }
`;
