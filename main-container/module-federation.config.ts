export const mfConfig = {
  name: "main_container",
  remotes: {
    homeApp: "homeApp@http://localhost:3000/remoteEntry.js",
    theclassApp: "theclassApp@http://localhost:3001/remoteEntry.js",
    watchListApp: "watchListApp@http://localhost:3002/remoteEntry.js",
    communityApp: "communityApp@http://localhost:3003/remoteEntry.js",
    navigationBarApp: "navigationBarApp@http://localhost:3004/remoteEntry.js",
    googleAuthenticationApp: "googleAuthenticationApp@http://localhost:3100/remoteEntry.js",
    kakaoAuthenticationApp: "kakaoAuthenticationApp@http://localhost:3101/remoteEntry.js",
    loginPageApp: "loginPageApp@http://localhost:3102/remoteEntry.js",

  },
  shared: {
    react: { singleton: true, requiredVersion: "^18.2.0" },
    "react-dom": { singleton: true, requiredVersion: "^18.2.0" },
    "@mui/material": { singleton: true, requiredVersion: "^7.0.1" },
    "react-router-dom": { singleton: true, requiredVersion: "^6.30.0" },
  },
};