import React from "react";
import styled from "styled-components";
import Sec6_1 from "../assets/Section_6_1_image.jpg";
import Sec6_2 from "../assets/Section_6_2_image.jpg";

const Wrapper = styled.section`
    background-color: #131722;
  display: flex;
  justify-content: space-between;
  align-items: center;
    padding : 6rem 6rem;
    gap: 2rem;

`;
const LeftSection = styled.div`
  display: flex;
  gap: 5rem;
  margin-top : 2rem;
  padding-left: 5rem;  

    img {
        width: auto;     
        height: 600px;   
        object-fit: contain;
    }  
`;

const RightSection = styled.div`
  max-width: 500px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: whitesmoke;
  line-height: 1.4;
  margin-bottom: 1.5rem;
    letter-spacing: -0.05em;
    text-align: right;
    padding-right: 5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: darkgray;
    text-align: right;
    padding-right: 5rem;
`;


const Section6 = () => {
    return(
        <Wrapper>
            <LeftSection>
                <img src={Sec6_1} alt="section6 이미지1"/>
                <img src={Sec6_2} alt="section6 이미지2"/>
            </LeftSection>
            <RightSection>
                <Title>
                    모든 투자 관리를 <br/>
                    4getMoney 한 곳에서
                </Title>

                <Description>주식 부터 코인까지 모든 내 투자 자산을 한 눈에</Description>
                <Description>매 달 받게될 예상 배당금과 내 자산 분석까지 한 번에!</Description>

            </RightSection>
        </Wrapper>


    );
};
export default Section6