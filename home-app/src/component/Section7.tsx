import React from "react";
import styled from "styled-components";
import Sec7_img1 from "../assets/Section_7_img1.jpg";
import Sec7_img2 from "../assets/Section_7_img2.jpg"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;     
  align-items: center;       
  justify-content: center;    
  text-align: center;         
  min-height: 100vh;          
  padding: 2rem;
  //gap: 2rem;                  
  background-color: #0f1117;
`;
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: white;
  margin: 0;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: whitesmoke;
  margin-bottom: 2rem; 
`;

const ImageRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;

  img {
    width: 200px;
    height: auto;
    border-radius: 8px;
  }

`;

const Section7 = () => {
    return(
        <Wrapper>
        <Title>
            모든 투자 이야기 4getMoney와 함께
        </Title>
       <br/>
            <br/>
    <Description>개인 투자자들이 신뢰할 수 있는 금융데이터를 기반으로</Description>
    <Description>매 달 받게될 예상 배당금과 내 자산 분석까지 한 번에!</Description>

            <ImageRow>
              <img src={Sec7_img1} alt="section7 이미지1" />
              <img src={Sec7_img2} alt="section7 이미지2" />
                </ImageRow>
            </Wrapper>

    );

};
export default Section7