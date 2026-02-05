import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard';
        src: url('../assets/fonts/Pretendard-Medium.woff2') format('woff2');
        font-style: normal;
        font-weight: 500;
        font-display: swap;
    }

    html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        font-family: 'Pretendard', sans-serif;
    }

    #root {
        width: 100%;
        max-width: 1000px;
        min-width: 320px;
        padding: 20px;
    }

    /* 모바일 */
    @media (max-width: 768px) {
        #root {
            width: 100%;
        }
    }

    /* 데스크탑 */
    @media (min-width: 769px) {
        #root {
            width: 1000px;
        }
    }

    button {
        cursor: pointer;
        background: none;
        border: none;
        padding: 0;
    }
`;