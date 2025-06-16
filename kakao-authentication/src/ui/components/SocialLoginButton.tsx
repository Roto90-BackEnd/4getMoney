import React from "react";
import KakaoLoginImage from "../../assets/kakao_login.png";

type Provider = "google" | "kakao" | "github";

//속성들을 props형태로 props라고 표현한다고 했는데
//실제로 socialLoginButton컴포넌트가 사용하는 파라미터를 props형태로 표현하기 위해 작성
interface Props {
    provider: Provider;
    //입력이 없고 리턴도 없는 함수가 onClick입니다 라는 뜻
    //void (*)(void);
    onClick: () => void;
}
//위의 Provider에서 지정한 kakao,google,gothub 등이 오면 아래의 정해진 lavel, color, icon값을 가지게 만든다라는 뜻
const providerInfo: Record<Provider, {
    label: string;
    color: string;
    icon: React.ReactNode;
}> = {
    kakao: { label: "Kakao 로그인", color: "", icon: null },   // 사용하지 않음
};
//파라미터 2개 (provider 와 onClick함수)를 받아옴
const SocialLoginButton: React.FC<Props> = ({ provider, onClick }) => {
    // 위쪽의 lavel,color,icon정보를 획득함 -> 현재 provider는 kakao입니다
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