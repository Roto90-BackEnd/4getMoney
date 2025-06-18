import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  background-color: #131722;
  color: white;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
    padding: 3rem 2rem;
  box-sizing: border-box;
  gap: 2.5rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 150px;
  padding-left: 3rem;
`;

const Title = styled.h4`
  margin-bottom: 1rem;
  font-size: 13px;
  font-weight: bold;
`;

const Description = styled.p`
  margin: 0.5rem 0;
  font-size: 11px;
  color: #ccc;
`;


const Footer = () => {
    return (
        <Wrapper>
            <FooterSection>
                <Title>플레이데이터</Title>
                <Description>대표 : 임운철 박태준 김정범 이주영</Description>
                <Description>서울시 서초구 효령로 335, 1층</Description>

            </FooterSection>

            <FooterSection>
                <Title>Company</Title>
                <Description>서비스 이용약관</Description>
                <Description>개인정보 처리방침</Description>
            </FooterSection>

            <FooterSection>
                <Title>인재영입</Title>
                <Description>리크루팅 바로가기</Description>
            </FooterSection>

            <FooterSection>
                <Title>고객센터</Title>
                <Description>고객문의: PlayData</Description>
                <Description>광고문의: 4getMoney</Description>
                <Description>사업제휴: 4getMoney</Description>
                <Description>IR: 4getMoney</Description>
            </FooterSection>
        </Wrapper>
    );
};

export default Footer;