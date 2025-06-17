import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import GlobalStyle from "./styles/GlobalStyle.ts";
import Section1 from "./component/Section1.tsx";
import Section2 from "./component/Section2.tsx";
import Section3 from "./component/Section3.tsx";
import Section4 from "./component/Section4.tsx";
import Section5 from "./component/Section5.tsx";
import Section6 from "./component/Section6.tsx";
import Section7 from "./component/Section7.tsx";

const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
        </div>
    );
};

export default App;
