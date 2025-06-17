import React from "react";
import KakaoLoginImage from "../../assets/kakao_login.png";

type Provider = "google" | "kakao" | "github";

interface Props {
    provider: Provider;
    onClick: () => void;
}
const providerInfo: Record<Provider, {
    label: string;
    color: string;
    icon: React.ReactNode;
}> = {
    kakao: { label: "Kakao 로그인", color: "", icon: null },   // 사용하지 않음
};
const SocialLoginButton: React.FC<Props> = ({ provider, onClick }) => {
    const info = providerInfo[provider];

    if (!info.label) return null; // 유효하지 않은 provider 방어 처리

    return (
        <img
            src={KakaoLoginImage}
            alt="Kakao Login"
            onClick={onClick}
            style={{
                cursor: "pointer",
                maxWidth: "100%",     // 부모 컨테이너 크기까지만 줄어듦
                height: "auto",       // 원본 비율 유지
                display: "block",
                margin: "16px auto",  // 가운데 정렬
            }}
        />
    );
};

export default SocialLoginButton;