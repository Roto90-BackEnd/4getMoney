import React, { useState } from "react";
import styled from "styled-components";

const profileImages = [
    "/src/assets/profile1.png",
    "/src/assets/profile2.png",
    "/src/assets/profile3.png",
    "/src/assets/profile4.png",
    "/src/assets/profile5.png",
];

function getRandomProfileImage() {
    return profileImages[Math.floor(Math.random() * profileImages.length)];
}

const timelinePosts = [
    { username: "ahnnnnnn", time: "1일 전", category: "한국 주식", content: "국내주식 자산 수익률 100% 달성!..." },
    { username: "투자매니아", time: "2일 전", category: "한국 주식", content: "삼성전자 비중을 30% 줄였습니다." },
    { username: "배당족", time: "2일 전", category: "더리치 픽", content: "월배당 600만원 1차 목표 달성했습니다!..." },
    { username: "ETF헌터", time: "4일 전", category: "더리치 픽", content: "VYM과 SCHD를 더리치 추천으로 담았습니다." },
    { username: "분산부자", time: "2시간 전", category: "포트폴리오 공유", content: "전세계 ETF 10개로 구성한 포트폴리오입니다..." },
    { username: "계획형 투자자", time: "1일 전", category: "포트폴리오 공유", content: "분기별 리밸런싱을 실행 중입니다." },
    { username: "연금러버", time: "3일 전", category: "연금저축", content: "연금저축 펀드 수익률 15%! 연말정산 대비 중." },
    { username: "연말정산왕", time: "5일 전", category: "연금저축", content: "연금저축 400만원 채워서 소득공제 노립니다." },
    { username: "cryptoKing", time: "5시간 전", category: "가상 자산", content: "비트코인 $70K 돌파!..." },
    { username: "블록체인러", time: "1일 전", category: "가상 자산", content: "ETH 2.0 업그레이드 성공적으로 완료!" },
    { username: "2031 FIRE", time: "3일 전", category: "재테크", content: "월배당 300 달성!..." },
    { username: "가계부장", time: "6일 전", category: "재테크", content: "소비 다이어트 3개월차, 월 지출 40% 감축." },
    { username: "테이블야차", time: "6일 전", category: "해외파생", content: "20억 목표! 해외 파생상품 비중을 늘린 결과입니다." },
    { username: "글로벌선물", time: "4일 전", category: "해외파생", content: "해외선물 나스닥 롱포지션 진입중." },
    { username: "미국ETF", time: "3일 전", category: "미국·해외주식", content: "QQQ 추가 매수! 미국 성장주 믿습니다." },
    { username: "배당미국", time: "2일 전", category: "미국·해외주식", content: "HD, PEP 배당률 확인하고 매수했습니다." },
    { username: "주택헌터", time: "1일 전", category: "부동산", content: "서울 외곽 아파트 매입 완료!..." },
    { username: "부동산고수", time: "3일 전", category: "부동산", content: "역세권 오피스텔이 요즘 대세입니다." },
    { username: "인플루언서왕", time: "4시간 전", category: "인플루언서", content: "내 투자 노하우 공개합니다!..." },
    { username: "콘텐츠장인", time: "2일 전", category: "인플루언서", content: "SNS + 투자 콘텐츠 제작 비결." }
];

const popularPosts = [
    { title: "25.06.14 월배당 300 달성", author: "2031 FIRE", time: "3일 전" },
    { title: "20억 목표", author: "테이블야차", time: "6일 전" },
    { title: "주식 평가금액 55억 원", author: "오일전문가", time: "4일 전" },
    { title: "ETF로 월 수익 200 실현", author: "ETF헌터", time: "1일 전" },
    { title: "배당률 TOP3 ETF 공개", author: "배당미국", time: "2일 전" },
    { title: "비트코인 $70K 돌파 전략", author: "cryptoKing", time: "5시간 전" },
    { title: "소득공제 실전 전략", author: "연말정산왕", time: "5일 전" },
    { title: "FIRE족의 소비 루틴", author: "가계부장", time: "6일 전" },
    { title: "미국주식 장기보유 후기", author: "미국ETF", time: "3일 전" },
    { title: "부동산 레버리지 전략", author: "주택헌터", time: "1일 전" },
    { title: "월급 외 소득 만들기", author: "인플루언서왕", time: "4시간 전" },
    { title: "연금저축으로 세테크", author: "연금러버", time: "3일 전" },
    { title: "ETF 자동매수 설정법", author: "계획형 투자자", time: "1일 전" },
    { title: "글로벌 ETF 추천 리스트", author: "글로벌선물", time: "4일 전" },
    { title: "배당생활자의 일상", author: "배당족", time: "2일 전" }
];

const categories = [
    "전체",
    "더리치 픽",
    "포트폴리오 공유",
    "더리치 AI",
    "연금저축",
    "한국 주식",
    "미국·해외주식",
    "가상 자산",
    "재테크",
    "해외파생",
    "부동산",
    "인플루언서",
    "아무거나",
];

export default function Timeline() {
    const [activeCategory, setActiveCategory] = useState("한국 주식");

    const handleCategoryClick = (cat) => {
        setActiveCategory(cat);
    };

    const filteredPosts = timelinePosts.filter(
        (post) => activeCategory === "전체" || post.category === activeCategory
    );

    return (
        <Container>
            <LeftPanel>
                <Title>
                    타임라인 <span>팔로잉</span>
                </Title>
                <IconContainerLeft>
                    <SearchIconLeft>🔍</SearchIconLeft>
                    <PlusIconLeft>+</PlusIconLeft>
                </IconContainerLeft>
                <CategoryBar>
                    {categories.map((cat, i) => (
                        <Category
                            key={i}
                            active={cat === activeCategory}
                            onClick={() => handleCategoryClick(cat)}
                        >
                            {cat}
                        </Category>
                    ))}
                </CategoryBar>
                <PostList>
                    {filteredPosts.map((post, i) => (
                        <Post key={i}>
                            <ProfileCircle />
                            <PostContent>
                                <Username>{post.username}</Username>
                                <PostTime>{post.time}</PostTime>
                                <PostText>{post.content}</PostText>
                            </PostContent>
                        </Post>
                    ))}
                </PostList>
            </LeftPanel>

            <RightPanel>
                <PopularTitle>실시간 인기글</PopularTitle>
                <PopularList>
                    {popularPosts.map((item, i) => (
                        <PopularItem key={i}>
                            <PopularText>
                                <p>{item.title}</p>
                                <span>
                  {item.author} · {item.time}
                </span>
                            </PopularText>
                            <Thumbnail>
                                <img
                                    src={`https://placehold.co/40x40?text=${i + 1}`}
                                    alt="thumbnail"
                                />
                            </Thumbnail>
                        </PopularItem>
                    ))}
                </PopularList>
            </RightPanel>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    padding: 30px;
    background-color: #111522;
    color: white;
`;

const LeftPanel = styled.div`
    flex-grow: 1;
    width: 800px;
    max-width: calc(100% - 300px - 30px);
    background-color: #1c1f2c;
    border-radius: 12px;
    padding: 20px;
    margin-right: 30px;
    border: 1px solid #333;
    position: relative;
`;

const RightPanel = styled.div`
    position: sticky;
    top: 30px;
    align-self: flex-start;
    width: 300px;
    background-color: #1c1f2c;
    border-radius: 12px;
    padding: 20px;
    height: calc(100vh - 60px);
    overflow-y: auto;
    z-index: 10;
    border: 1px solid #333;
`;

const Title = styled.h1`
    font-size: 24px;
    span {
        font-weight: 400;
        margin-left: 10px;
        color: #999;
    }
`;

const CategoryBar = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 20px 0;
`;

const Category = styled.button`
    background-color: ${({ active }) => (active ? "#FFD400" : "#2c2f3f")};
    color: ${({ active }) => (active ? "#000" : "#ccc")};
    padding: 8px 12px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    transition: 0.2s;
    &:hover {
        opacity: 0.8;
    }
`;

const PostList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Post = styled.div`
    display: flex;
    background-color: #1a1f2d;
    padding: 15px;
    border-radius: 10px;
`;

const ProfileCircle = styled.div`
    width: 40px;
    height: 40px;
    background-color: #1e90ff;
    border-radius: 50%;
    margin-right: 15px;
`;

const PostContent = styled.div`
    flex: 1;
`;

const Username = styled.div`
    font-weight: bold;
`;

const PostTime = styled.div`
    font-size: 12px;
    color: #999;
`;

const PostText = styled.div`
    margin-top: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
`;

const PopularTitle = styled.h2`
    font-size: 18px;
    margin-bottom: 15px;
`;

const PopularList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const PopularItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #2a2d3d;
    border-radius: 10px;
    padding: 10px;
`;

const PopularText = styled.div`
    p {
        font-size: 14px;
        font-weight: bold;
        margin: 0;
    }
    span {
        font-size: 12px;
        color: #aaa;
    }
`;

const Thumbnail = styled.div`
    width: 40px;
    height: 40px;
    img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        object-fit: cover;
    }
`;

const IconContainerLeft = styled.div`
    position: absolute;
    top: 20px; 
    right: 20px; 
    display: flex;
    gap: 10px;
`;

const SearchIconLeft = styled.div`
    width: 32px;
    height: 32px;
    background-color: #ccc; 
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #000;
    &:hover {
        opacity: 0.8;
    }
`;

const PlusIconLeft = styled(SearchIconLeft)`
    background-color: #ffd400; 
    color: #000;
`;