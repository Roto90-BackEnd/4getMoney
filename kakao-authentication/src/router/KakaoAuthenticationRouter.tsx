import React, { Suspense } from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import KakaoAuthenticationPage from "../pages/KakaoAuthenticationPage.tsx";
import KakaoAuthenticationCallback from "../redirection/KakaoAuthenticationCallback.tsx";

const KakaoAuthenticationRouter = () => {
    return (
        <Suspense fallback={<div>로딩중 ........</div>}>
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