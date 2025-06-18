import React from "react";
import styled from "styled-components";
import mainImg from "../assets/web_feature2_device1_img_ko.png";
import thumb1 from "../assets/web_feature2_device2_img_ko.jpg";
import thumb2 from "../assets/web_feature2_device3_img_section4.jpg";

const Wrapper = styled.div`
    display:flex;
    padding:6rem 6rem;
    justify-content: center;
    align-items:center;
    background-color: #131722;
    gap:1rem;
    `;

const LeftSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  padding-left: 10rem;  
`;

const MainImage = styled.img`
  width: 400px;
  height: auto;
  object-fit: contain;
`;
const RightSection = styled.div`
display: flex;
align-items: flex-start;
    margin-top: 13rem;
    `;

const ContentGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
  
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: whitesmoke;
  line-height: 1.4;
  margin-bottom: 1.5rem;
    letter-spacing: -0.05em;
    text-align: right;
    
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: darkgray;
    text-align: right;
`;


const ThumbnailRow = styled.div`
    display: flex;
    justify-content: flex-start; 
    gap: 1rem;
    margin-top: 5rem;
`;

const SmallImage = styled.img`
  width: 300px;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
    margin-bottom: 0;
`;

const Section4 = () => {
 return (
     <Wrapper>
         <LeftSection>
             <MainImage src={mainImg} alt="메인 이미지" />
         </LeftSection>

         <RightSection>
             <ContentGroup>
                 <Title>인증된 주주들과 실시간 모임</Title>
                 <Description>같은 종목에 투자하는 주주들과 함께 한다면</Description>
                 <Description>투자가 더욱 든든해요. 인증된 주주들과</Description>
                 <Description>토론을 나누며 인사이트를 얻어보세요!</Description>

                 <ThumbnailRow>
                     <SmallImage src={thumb1} alt="썸네일1" />
                     <SmallImage src={thumb2} alt="썸네일2" />
                 </ThumbnailRow>
             </ContentGroup>
         </RightSection>
     </Wrapper>
 )
}
export default Section4