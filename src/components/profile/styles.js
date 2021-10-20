import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
`

export const WrapperImage = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 30%;
    padding: 16px;
`

export const WrapperContentInfo = styled.div`
    h3 {
        color: white;
        font-size: 12px;
        margin-right: 10px;
    };
    h1 {
        color: #f27137;
        font-size: 22px;
        font-weight: bold;
        margin-bottom: 14px;
    }
    color: white;
    margin-top: 10px;
    font-size: 14px;
    margin-left: 10px;
    div {
        display: flex;
        flex-direction: row;
        margin-bottom: 4px;
    };
    a {
        color: #04d361;
        font-weight: bold
    }
`

export const WrapperStatus = styled.div`
    display: flex;
    text-align: center;
    font-size: 10px;
    div {
        margin-left: 3px;
        flex-direction: column;
    }
    h3 {
        margin-bottom: 10px;
        font-size: 10px;
    };
    margin-top: 10px;
`




