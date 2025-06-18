import React, {useState} from "react";
import styled from "styled-components";
import phoneImage from "../assets/mockup_ko.png";
import { Modal, Box } from "@mui/material";

const Wrapper = styled.div`
  width: 100vw; 
  background-color: #131722;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding : 6rem 6rem;
  box-sizing: border-box;
  padding-bottom: 0;  
  overflow: hidden;
`;

const LeftSection = styled.div`
  flex: 1;
  color: white;
    
  display: flex;
  flex-direction: column;
  justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: bold;
  line-height: 1.4;

  span {
    color: #fbbf24;
  }
`;

const InputWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  max-width: 440px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #1a1b23;
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
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

    background: linear-gradient(to right, #131722 0%, #1a1d2e 100%);  

  img {
    max-width: 100%;
    max-height: 700px; 
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: 12px;
  }
`;

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'rgba(19, 23, 34, 0.85)',
    color: 'white',
    borderRadius: '12px',
    boxShadow: 24,
    p: 4,
    maxWidth: 400,
    width: '90%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',

};

const Section1 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <Wrapper>
            <LeftSection>
                <Title>
                    고수들의 인증된 투자 <br />
                    <span>4getMoney</span> 에서 바로 확인
                </Title>
                <InputWrapper>
                    <Input placeholder="휴대폰 번호를 입력하세요." />
                    <Button onClick={openModal}> 앱 설치하기</Button>
                </InputWrapper>
            </LeftSection>
            <RightSection>
                <img src={phoneImage} alt="앱 미리보기" />
            </RightSection>

            <Modal open={isModalOpen} onClose={closeModal}>
                <Box sx={modalStyle} onClick={e => e.stopPropagation()}>
                    <p>곧 앱 설치 페이지가 준비됩니다!✨</p>
                    <Button onClick={closeModal}>닫기</Button>
                </Box>
            </Modal>
        </Wrapper>

    );
};

export default Section1;