import React from "react";
import styled from "styled-components";
import Image1 from "../assets/web_feature1_device1_img_ko.jpg";
import Image2 from "../assets/web_feature1_device2_img_ko.jpg";

const Wrapper = styled.section`
  background-color: #f5f7fa; 
  display: flex;
  justify-content: center;
  align-items: center;
    padding : 6rem 6rem;
    gap: 7rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LeftSection = styled.div`
  max-width: 500px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: #000000;
  line-height: 1.4;
  margin-bottom: 1.5rem;
    letter-spacing: -0.05em;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #4a4a4a;
`;

const RightSection = styled.div`
  display: flex;
  gap: 6rem;

  img {
    height: 500px;
    object-fit: contain;
  }
    
  img:nth-child(2) {
    margin-top: 100px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    img {
      height: auto;
      width: 100%;
      margin-top: 0; 
    }
  }
`;


const Section3 = () => {
    return(
        <Wrapper>
            <LeftSection>
                <Title>
                    투자 고수의 <br />
                    실제 투자를 살펴보세요 <br />
                </Title>
                <Description>다른 사람의 실제 투자가 궁금하신가요?</Description>
                <Description>4getMoney에서는 실투자 인증 기반의 포트폴리오로 토론합니다.</Description>
                <Description>더이상 근거 없는 소문, 불확실한 정보에 의존하지 마세요!</Description>
            </LeftSection>
            <RightSection>
                <img src={Image1} alt = "화면이미지1" />
                <img src={Image2} alt = "화면이미지2" />
            </RightSection>
        </Wrapper>


    );
};
export default Section3