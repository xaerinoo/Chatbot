import styled from "styled-components";

export const InputContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const InputWrapper = styled.div`
    position: fixed;
    bottom: 140px;
    display: flex;
    justify-content: center;
`;

export const InputField = styled.input`
    padding: 9px;
    font-size: 15px;
    border: 2.5px solid #000;
    border-radius: 12px;
    outline: none;
    text-align: center;

    &::placeholder {
        color: #999;
    }
`;