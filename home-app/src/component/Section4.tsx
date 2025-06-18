import React from "react";
import styled from "styled-components";
import Image3 from "../assets/web_feature2_device1_img_ko.png";
import Sec4_1 from "../assets/web_feature2_device2_img_ko.jpg";
import Sec4_2 from "../assets/web_feature2_device3_img_section4.jpg";

const Wrapper = styled.section`
  background-color: #0f1117;
    display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 2rem;

`;
const LeftSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    width: 400px;
    height: auto;
    object-fit: contain;
  }
`;
const RightSection = styled.div`
  max-width: 500px;
`;

const Title = styled.h2`
  font-size: 35px;
  font-weight: 600;
  color: white;
  line-height: 1.4;
  margin-bottom: 1.5rem;
    text-align: right;
  padding-right: 8rem;
    justify-content: center;  

  `;
const Description = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: whitesmoke;
    text-align: right;
    padding-right: 8rem;
    justify-content: center;
`;
const ImageRow = styled.div`
  display: flex;
  justify-content: center; 
  gap: 1rem;
  margin-top: 10rem;
  
  img {
    width: 300px;
    height: auto;
    border-radius: 8px;
  }
`;

const Section4 = () => {
 return (
     <Wrapper>
         <LeftSection>
             <img src={Image3} alt ="Left Section_image" />
         </LeftSection>
         <RightSection>
             <Title>
                 인증된 주주들과 실시간 모임
             </Title>
             <Description>같은 종목에 투자하는 주주들과 함께 한다면</Description>
             <Description>투자가 더욱 든든해요. 인증된 주주들과</Description>
             <Description>토론을 나누며 인사이트를 얻어보세요!</Description>
             <ImageRow>
                 <img src ={Sec4_1} alt="section4 이미지1" />
                 <img src ={Sec4_2} alt="section4 이미지2" />
             </ImageRow>
         </RightSection>
     </Wrapper>
 )
}
export default Section4