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
    padding : 6rem 6rem;
    background-color:  #131722;
`;
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: whitesmoke;
  margin: 0;
`;

const Description = styled.p`
  font-size: 1rem;
  color: darkgray;
  margin-bottom: 0; 
`;


const Button = styled.button`
  border: none;
  background: none;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 8px; 
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  img {
    display: block;
    width: 250px;
    height: 200px;
    object-fit: contain;
  }
`;

const Section7 = () => {
    return(
        <Wrapper>
        <Title>
            모든 투자 이야기 4getMoney와 함께
        </Title>

            <br/>
    <Description>개인 투자자들이 신뢰할 수 있는 금융데이터를 기반으로</Description>
    <Description>서로 소통하며 투자를 지속하는 서비스를 만듭니다.</Description>

            <Button onClick={() => console.log("버튼 클릭됨!")}>
                <img src={Sec7_img1} alt="section7 이미지1" />
                <img src={Sec7_img2} alt="section7 이미지2" />
            </Button>

            </Wrapper>

    );

};
export default Section7