import React, { Suspense } from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import KakaoAuthenticationPage from "../pages/KakaoAuthenticationPage.tsx";
import KakaoAuthenticationCallback from "../redirection/KakaoAuthenticationCallback.tsx";

const KakaoAuthenticationRouter = () => {
    return (
        //Suspense의 경우 로딩이 느리게 될 경우 멈춰 있는 것 보다는 특정 상황을 표현해 주거나 메시지를 출력해서 사이트가 멈추지 않았음을 알려주는 용도
        //fallback에 <div>블록을 배치해서 로딩중 메세지가 출력되게 만들었음
        <Suspense fallback={<div>로딩중 ........</div>}>
            {/*Routes를 통해 내부에 배치할 URI경로 설정들을 준비*/}
            <Routes>
                {/*Route를 통해 실제 어떤 uri로 이동할 때 어떤 컴포넌트 사용할지 결정*/}
                <Route path="/" element={<Navigate to="login" replace/>}/>
                <Route path="/login" element={<KakaoAuthenticationPage/>}/>
                <Route path="/callback" element={<KakaoAuthenticationCallback />} />
            </Routes>
        </Suspense>
    );
};

export default KakaoAuthenticationRouter;