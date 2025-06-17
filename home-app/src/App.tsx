import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import GlobalStyle from "./styles/GlobalStyle.ts";
import Section1 from "./component/Section1.tsx";
import Section2 from "./component/Section2.tsx";
import Section3 from "./component/Section3.tsx";

const App = () => {

  return (
      <>
        <GlobalStyle />
        <Section1 />
        <Section2 />
        <Section3 />
      </>

  );
};

export default App;
