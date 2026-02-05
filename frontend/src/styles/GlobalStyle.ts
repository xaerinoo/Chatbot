import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard';
        src: url('../assets/fonts/Pretendard-Medium.woff2') format('woff2');
        font-style: normal;
        font-weight: 500;
        font-display: swap;
    }

    button {
        cursor: pointer;
        background: none;
        border: none;
        padding: 0;
    }
`;