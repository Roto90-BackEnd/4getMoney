import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import {RecoilRoot,useRecoilState} from "recoil";

import { CircularProgress } from "@mui/material";
import {GlobalStyle} from "./styles/GlobalStyle.ts";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import {screenModState} from "../../shared-state/atoms.ts"

const NavigationBarApp = lazy(() => import("navigationBarApp/App"));
const HomeApp = lazy(() => import("homeApp/App"));
const TheclassApp = lazy(() => import("theclassApp/App"));
const WatchListApp = lazy(() => import("watchListApp/App"));
const CommunityApp = lazy(() => import("communityApp/App"));
const GoogleAuthenticationApp = lazy(
  () => import("googleAuthenticationApp/App")
);
const KakaoAuthenticationApp = lazy(() => import("kakaoAuthenticationApp/App"));
const LoginPageApp = lazy(() => import("loginPageApp/App"));

const InnerApp = () => {
  const [isNavigationBarLoaded, setIsNavigationBarLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useRecoilState(screenModState);
  const theme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    import("navigationBarApp/App")
      .then(() => setIsNavigationBarLoaded(true))
      .catch((err) => console.error("Failed to load navigation bar:", err));
  }, []);

  return (
      <ThemeProvider theme={theme}>
    <BrowserRouter>
      <GlobalStyle/>
      <Suspense fallback={<CircularProgress />}>
      <NavigationBarApp />
        <ToggleButton onClick={() => setIsDarkMode((prev) => !prev)}>
          {isDarkMode ? "🌙 다크 모드 해제" : "🌞 다크 모드 설정"}
        </ToggleButton>
        <Wrap>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/home" element={<HomeApp />} />
          <Route path="/theclass/*" element={<TheclassApp />} />
          <Route path="/watch-list/*" element={<WatchListApp />} />
          <Route path="/community" element={<CommunityApp />} />
          <Route
            path="/google-authentication/*"
            element={<GoogleAuthenticationApp />}
          />
          <Route
            path="/kakao-authentication/*"
            element={<KakaoAuthenticationApp />}
          />
          <Route path="/login-page" element={<LoginPageApp />} />
        </Routes>
        </Wrap>

      </Suspense>
    </BrowserRouter>
      </ThemeProvider>
  );
};
const App = () => (
    <RecoilRoot>
      <InnerApp />
    </RecoilRoot>
);

export default App;

const container = document.getElementById("app") as HTMLElement;
if (!container) {
  throw new Error("Root container #app not found");
}

const root = ReactDOM.createRoot(container);
root.render(<App />);

const Wrap = styled.div`
  padding-top: 57px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const lightTheme = {
  background: "#F0F0F0",
  text: "#000000",
  toggleBackground: "#ffffff",
  toggleText: "#000000",
  toggleHoverBackground: "#e0e0e0",
  toggleHoverText: "#000000",
};

const darkTheme = {
  background: "#131722",
  text: "gold",
  toggleBackground: "#2d3748", // 약간 밝은 회색
  toggleText: "#ffffff",
  toggleHoverBackground: "#4a5568", // hover 시 더 밝게
  toggleHoverText: "#ffffff",
};
const ToggleButton = styled.button`
  position: fixed;
  top: 70px;
  right: 20px;
  padding: 8px 16px;
  border: none;
  background: ${({ theme }) => theme.toggleBackground};
  color: ${({ theme }) => theme.toggleText};
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  z-index: 1000;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.toggleHoverBackground};
    color: ${({ theme }) => theme.toggleHoverText};
  }
`;

