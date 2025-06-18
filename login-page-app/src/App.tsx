import React from 'react';
import styled from "styled-components";
import env from "./env.ts";
import {useNavigate} from "react-router-dom";

import Swal from 'sweetalert2'

import appleLogo from './assets/appleLogo.png';
import facebookLogo from './assets/facebookLogo.png';
import googleLogo from './assets/googleLogo.png';
import kakaoLogo from './assets/kakaoLogo.png';
import logo from './assets/logo.png';
;

const App = () => {

    const navigate = useNavigate();

    const handleKakaoLogin = () => {
        const kakaoAuthUrl =  process.env.REACT_APP_KAKAO_AUTHENTICATION_URL;
        const popup1 = window.open(kakaoAuthUrl, '_blank', 'width=500,height=600');


        if (!popup1) {
            alert("팝업 차단되어 있습니다.");
        }
        const receiveMessage = (event: MessageEvent) => {
            console.log('📨 받은 메시지:', event.origin, event.data);

            // origin 검사 완화
            if (!event.origin.startsWith('http://localhost')) {
                console.warn('❌ 허용되지 않은 origin:', event.origin);
                return;
            }

            const {accessToken, user} = event.data;
            if (!accessToken) {
                console.warn('❌ accessToken 없음');
                return;
            }

            localStorage.setItem('userToken', accessToken);
            window.dispatchEvent(new Event("user-token-changed"));

            window.removeEventListener('message', receiveMessage);

            // 팝업 닫기
            try {
                popup1.close();
            } catch (e) {
                console.warn('팝업 닫기 실패:', e);
            }

            // navigate 딜레이
            setTimeout(() => {
                navigate('/home');
            }, 100);
        };
        window.addEventListener('message', receiveMessage);

    };
    const handleGoogleLogin = () => {
        const googleAuthenticationUrl =  process.env.REACT_APP_GOOGLE_AUTHENTICATION_URL;
        const popup2 = window.open(googleAuthenticationUrl, '_blank', 'width=500,height=600');

        if (!popup2) {
            alert("팝업 차단되어 있습니다.");
        }
        const receiveMessage = (event: MessageEvent) => {
            console.log('📨 받은 메시지:', event.origin, event.data);

            if (!event.origin.startsWith('http://localhost')) {
                console.warn('❌ 허용되지 않은 origin:', event.origin);
                return;
            }

            const { accessToken, user } = event.data;
            if (!accessToken) {
                console.warn('❌ accessToken 없음');
                return;
            }

            localStorage.setItem('userToken', accessToken);
            window.dispatchEvent(new Event("user-token-changed"));

            window.removeEventListener('message', receiveMessage);

            try {
                popup2.close();
            } catch (e) {
                console.warn('팝업 닫기 실패:', e);
            }

            setTimeout(() => {
                navigate('/home');
            }, 100);
        };

        window.addEventListener('message', receiveMessage);
    }
    const handleOtherLogin = () => {
        Swal.fire({
            icon: 'info',
            title: '준비 중입니다',
            text: '해당 로그인 방식은 현재 지원하지 않습니다.',
            confirmButtonText: '확인',
            confirmButtonColor: '#3085d6',
            background: '#fefefe'
        });
    }

    return (
        <>
            <Wrap>
                <TitleWrap>
                    <TitleLogo src={logo} alt="logo"/>
                    <TitleText>4getMoney</TitleText>
                </TitleWrap>
                <ButtonWrap>
                    <KakaoLogin onClick={handleKakaoLogin}>
                        <LogoImg src={kakaoLogo} alt="kakao" />
                        <ButtonText>카카오 로그인</ButtonText>
                    </KakaoLogin>

                    <GoogleLogin onClick={handleGoogleLogin}>
                        <LogoImg src={googleLogo} alt="google" />
                        <ButtonText>구글 로그인</ButtonText>
                    </GoogleLogin>

                    <FaceBookLogin onClick={handleOtherLogin}>
                        <LogoImg src={facebookLogo} alt="facebook" />
                        <ButtonText>페이스북 로그인</ButtonText>
                    </FaceBookLogin>

                    <AppleLogin onClick={handleOtherLogin}>
                        <LogoImg src={appleLogo} alt="apple" />
                        <ButtonText>Apple 로그인</ButtonText>
                    </AppleLogin>
                </ButtonWrap>


            </Wrap>
        </>

    );
};

export default App;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
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
    width: 40px;
    height: 40px;
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
    font-size: 29px;
    color: #FFFFFF;
`
const ButtonWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 274px;
`
const CommonButton = styled.button`
    position: relative;
    width: 100%;
    height: 60px;
    border-radius: 40px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    margin-top: 15px;
    cursor: pointer;
    background-color: white;

    display: flex;
    align-items: center;
    padding-left: 20px;
`;

const LogoImg = styled.img`
    position: absolute;
    left: 20px;
    width: 20px;
    height: 20px;
`;

const ButtonText = styled.span`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`;

const KakaoLogin = styled(CommonButton)`
    background-color: #fee500;
    color: black;
`;

const GoogleLogin = styled(CommonButton)`
    background-color: white;
    color: black;
`;

const FaceBookLogin = styled(CommonButton)`
    background-color: #1877f2;
    color: white;
`;

const AppleLogin = styled(CommonButton)`
    background-color: white;
    color: black;
`;