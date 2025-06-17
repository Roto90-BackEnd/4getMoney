import React from "react";
import styled from "styled-components";
import phoneImage from "../assets/mockup_ko.png";


const Wrapper = styled.div`
  width: 100vw; 
  background-color: #0f1117;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 3rem 5%;
  box-sizing: border-box;
    padding-bottom: 0;  
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
    gap: 2rem;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  color: white;
    
  display: flex;
  flex-direction: column;
  justify-content: center;
    align-items: center;  

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: bold;
  line-height: 1.4;

  span {
    color: #fbbf24;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const InputWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  max-width: 440px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #1a1b23;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 1rem;
  border: none;
  background: transparent;
  color: white;
  font-size: 1rem;

  &::placeholder {
    color: #888;
  }
`;

const Button = styled.button`
  background: linear-gradient(to right, #fbbf24, #f97316);
  padding: 1rem 1.5rem;
  font-weight: bold;
  color: black;
  border: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: linear-gradient(to right, #facc15, #fb923c);
  }

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0 0 12px 12px;
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center; 
  background-color: #0f1117;

  img {
    max-width: 100%;
    max-height: 700px; 
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: 12px;
  }

  @media (max-width: 768px) {
    max-width: 90vw;
  }
`;


const Section1 = () => {
    return (
        <Wrapper>
            <LeftSection>
                <Title>
                    고수들의 인증된 투자 <br />
                    <span>4getMoney</span> 에서 바로 확인
                </Title>
                <InputWrapper>
                    <Input placeholder="휴대폰 번호를 입력하세요." />
                    <Button>앱 설치하기</Button>
                </InputWrapper>
            </LeftSection>
            <RightSection>
                <img src={phoneImage} alt="앱 미리보기" />
            </RightSection>
        </Wrapper>

    );
};

export default Section1;