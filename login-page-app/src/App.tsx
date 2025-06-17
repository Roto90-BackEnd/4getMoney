import React from 'react';
import styled from "styled-components";

const App = () => {
    return (
        <>
            <Wrap>
                로그인페이지
            </Wrap>
        </>

    );
};

export default App;

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px;
    width: 100vw;
    height: 100vh;
    background-color: RGB(19, 23, 34);
`