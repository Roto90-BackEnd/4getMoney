interface Env {
    mode: string | undefined;
    api: {
        KAKAO_AUTHENTICATION_URL: string | undefined;
        GOOGLE_AUTHENTICATION_URL: string | undefined;
    };
}
declare const env: Env;
export default env;
