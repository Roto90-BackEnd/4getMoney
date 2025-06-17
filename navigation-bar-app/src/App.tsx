import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import styled from "styled-components";

import logo from './assets/logo.png';

import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import JavascriptIcon from "@mui/icons-material/Javascript";
import ForumIcon from "@mui/icons-material/Forum";
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleAuthClick = () => {
        setIsLoggedIn(isLoggedIn => !isLoggedIn);
    };

    const navigate = useNavigate();

    return (
        <>
            <Wrap>
                <TitleWrap onClick={() => navigate("/")}>
                    <TitleLogo src={logo} alt="logo"/>
                    <TitleText>4getMoney</TitleText>
                </TitleWrap>

                <Button
                    onClick={() => {
                        navigate("/theclass");
                    }}
                >
                    더 클래스
                </Button>
                <Button onClick={() => navigate("/watch-list")}>

                관심종목
                </Button>
                <Button>
                    포트폴리오
                </Button>
                <Button>
                    실험실
                </Button>
                <Button>
                    채팅
                </Button>
                <Button onClick={() => navigate("/community")}>
                    커뮤니티
                </Button>
                <Button>
                    로그인
                </Button>
                <Button>
                    앱 설치하기
                </Button>

            </Wrap>
        </>
    );
};

export default App

const Wrap = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 75px;
    background-color: #131722;
`
const TitleWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 29px;
    gap:10px;
`
const TitleLogo = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: conic-gradient(
            #44928C 0deg 90deg,
            #D28F41 90deg 180deg,
            #A02C41 180deg 270deg,
            #183B5D 270deg 360deg  
    );
`
const TitleText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: #FFFFFF;
`
const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    background-color: #131722;
    cursor: pointer;
`