import styled from "styled-components";

export const WrapperHeader = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 16px;

    input {
        border: 1px solid #04d361;
        border-radius: 8px;
        width: 100%;
        height: 44px;
        background-color: #121213;
        padding: 8px;
        color: white;
    }

    button {
        background-color: #04d361;
        padding: 8px 28px;
        margin: 0 16px;
        border-radius: 12px;
        font-weight: bold;
        font-size: 14px;

        &:hover {
            background-color: #17af5c;
        }
    }


`;