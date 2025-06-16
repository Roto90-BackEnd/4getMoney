import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import { CircularProgress } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const NavigationBarApp = lazy(() => import("navigationBarApp/App"));
const HomeApp = lazy(() => import("homeApp/App"));
const TheclassApp = lazy(() => import("theclassApp/App"));
const WatchListApp = lazy(() => import("watchListApp/App"));
const CommunityApp = lazy(() => import("communityApp/App"));
const GoogleAuthenticationApp = lazy(
  () => import("googleAuthenticationApp/App")
);
const KakaoAuthenticationApp = lazy(() => import("kakaoAuthenticationApp/App"));

const App = () => {
  const [isNavigationBarLoaded, setIsNavigationBarLoaded] = useState(false);

  useEffect(() => {
    import("navigationBarApp/App")
      .then(() => setIsNavigationBarLoaded(true))
      .catch((err) => console.error("Failed to load navigation bar:", err));
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<CircularProgress />}>
      <NavigationBarApp />
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/home" element={<HomeApp />} />
          <Route path="/theclass" element={<TheclassApp />} />
          <Route path="/watch-list" element={<WatchListApp />} />
          <Route path="/community" element={<CommunityApp />} />
          <Route
            path="/google-authentication/*"
            element={<GoogleAuthenticationApp />}
          />
          <Route
            path="/kakao-authentication/*"
            element={<KakaoAuthenticationApp />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;

const container = document.getElementById("app") as HTMLElement;
if (!container) {
  throw new Error("Root container #app not found");
}

const root = ReactDOM.createRoot(container);
root.render(<App />);
