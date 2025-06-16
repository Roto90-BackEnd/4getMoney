import React from "react";
import {Box, Typography} from "@mui/material";
import SocialLoginButton from "../ui/components/SocialLoginButton.tsx";

import {useNavigate} from "react-router-dom";
import env from "../env.ts";

const KakaoAuthenticationPage: React.FC = () => {
    //우리가 Routes로 감싸놓은 ROuter설정을 활용할 수 있게 지원함
    const navigate = useNavigate();

    const handleKakaoLogin = () => {
        const kakaoAuthenticationUrl = env.api.KAKAO_AUTHENTICATION_URL;
        const popup = window.open(kakaoAuthenticationUrl, '_blank', 'width=500,height=600');

        if (!popup) {
            alert('팝업 차단되어 있습니다. 팝업 허용 후 다시 시도하세요.');
            return;
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
                popup.close();
            } catch (e) {
                console.warn('팝업 닫기 실패:', e);
            }

            // navigate 딜레이
            setTimeout(() => {
                navigate('/');
            }, 100);
        };
        //팝업으로 메세지가 전달되면 receiveMessage()가 받으렴
        window.addEventListener('message', receiveMessage);
    };

    //항상 컴포넌트의 return에 표현되는 것이 UI에 해당함
    //Box는 React MUI에 해당하는 UI템플릿입니다
    //<div>태그에 해당하며 스타일을 조금더 편리하게 지정 할 수 있도록 도와줌
    //p: 내부여백 (padding) 1당 8px
    //maxWidth: 최대 넓이
    //margin: 0 auto = 가운데 정렬
    return (
        <Box sx={{p: 4, maxWidth: 400, margin: "0 auto"}}>
            {/*
            Typography는 텍스트 표현하는 필드
            variant : html의 <h5>처럼 스타일 해달라는 뜻
            gutterBottom 아래쪽 적당 여백
            */}
            <Typography variant="h5" gutterBottom>
                로그인
            </Typography>
            {/*
            SocialLoginButton = 사실상 또다른 컴포넌트
            컴포넌트 내부에서 또 다른 컴포넌트 사용 가능
            provider 실제 socialLoginButton이 사용하는 파라미터값
            provider를 사용한 이유는 kakao 로그인임을 명시하기 위함
            onClick socialLoginButton이 사용하는 파라미터
            onClick의 경우 클릭 했을 때 무엇을 할 것인지 외부에서 중입하기 위함
            */}
            <SocialLoginButton provider="kakao" onClick={handleKakaoLogin}/>
        </Box>
    );
};

export default KakaoAuthenticationPage;