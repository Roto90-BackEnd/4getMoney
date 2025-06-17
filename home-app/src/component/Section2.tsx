import React from "react";
import styled from "styled-components";
import partner1 from "../assets/kb.jpg";
import partner2 from "../assets/kyobo.jpg";
import partner3 from "../assets/esg.jpg";
import partner4 from "../assets/hana_bank.jpg";
import partner5 from "../assets/koscom.jpg";


const Wrapper = styled.section`
  background-color: #0f1117;
  padding-left:8rem;
    display: flex;
    align-items: center;
    gap: 80px;

`;

const Title = styled.h2`
    color: #757575;
    margin-right: 50px;
    font-weight: 550;
    font-size: 23.5px;
    line-height: 140%;
`;

const LogoContainer = styled.div`
    display: flex;
    gap: 90px;
`;

const Logo = styled.img`
    width: 100px;   
    height: 100px;

    object-fit: contain;
  &:hover {
    transform: scale(1.05);
  }
`;

const Section2 = () => {
    return(
        <Wrapper>
            <Title> 4getMoney’s Partners</Title>
            <LogoContainer>
                <Logo src={partner1} alt = "Partner 1" />
                <Logo src={partner2} alt = "Partner 2" />
                <Logo src={partner3} alt = "Partner 3" />
                <Logo src={partner4} alt = "Partner 4" />
                <Logo src={partner5} alt = "Partner 5" />
            </LogoContainer>
        </Wrapper>
    );
};
export default Section2;