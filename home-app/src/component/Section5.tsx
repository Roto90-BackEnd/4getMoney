import React from "react";
import styled from "styled-components";
import Sec5_image from "../assets/Section_5_image.jpg";

const Wrapper = styled.section`
  background-color: #f5f7fa;
  display: flex;
  justify-content: center;
  align-items: center;
    padding : 6rem 6rem;
    gap: 10rem;

`;

const LeftSection = styled.div`
  max-width: 500px;
`;

const Title = styled.h2`
  font-size: 2.1rem;
  font-weight: 600;
  color: #000000;
  line-height: 1.5;
  margin-bottom: 1.5rem;
    
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
    height: 600px;
    object-fit: contain;
  }
    

`;




const Section5 = () => {
    return(
        <Wrapper>
            <LeftSection>
                <Title>
                    살까말까 고민될때는 <br />
                    4getMoney 실험실로! <br />
                </Title>
                <Description>“지금 투자하고 싶은데 안전할까?”</Description>
                <Description>“이 주식 10년 전에 샀으면 어땠을까?”</Description>
                <Description>“전문가처럼 과학적으로 투자할 순 없을까?”</Description>
                <br/>
                <Description>4getMoney가 시뮬레이션 결과를 분석해 알려드립니다.</Description>
                <Description>포트폴리오에 숨어있는 위험성을 4getMoney 실험실에서 확인해보세요.</Description>
            </LeftSection>
            <RightSection>
               <img src={Sec5_image} alt="Section5 이미지"/>
            </RightSection>
        </Wrapper>


    );
};
export default Section5