import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import logo from "./assets/logo.png";
import searchIcon from "./assets/search.svg";
import Swal from "sweetalert2";

const App: React.FC = () => {
  const token = localStorage.getItem("userToken");
  const navigate = useNavigate();
  const [selectedLang, setSelectedLang] = useState<"KOR" | "ENG">("KOR");

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    localStorage.clear();
    setIsOpen(false);
    navigate("/home");
  };

  const notImplemented = () => {
    Swal.fire({
      icon: 'info',
      title: '아직 개발이 완료 되지 않은 페이지 입니다.',
      text: '홈화면으로 돌아가시 겠습니까?',
      showCancelButton: true,
      confirmButtonText: '예',
      cancelButtonText: '아니오',
      confirmButtonColor: '#429f50',
      cancelButtonColor: '#d33',
    })
        .then((result) => {
          if (result.isConfirmed) {
            navigate("/home");
          }
        })
  }

  const handleLanguageChange = (lang: "KOR" | "ENG") => {
    setSelectedLang(lang);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Wrap>
        <MenuWrap>
          <LeftMenuWrap>
            <TitleWrap onClick={() => navigate("/home")}>
              <TitleLogo src={logo} alt="logo" />
              <TitleText>4getMoney</TitleText>
            </TitleWrap>

            <Button
              onClick={() => {
                navigate("/theclass");
              }}
            >
              더 클래스
            </Button>
            <Button onClick={() => navigate("/watch-list")}>관심종목</Button>
            <Button onClick={notImplemented}>포트폴리오</Button>
            <Button onClick={notImplemented}>실험실</Button>
            <Button onClick={notImplemented}>채팅</Button>
            <Button onClick={() => navigate("/community")}>커뮤니티</Button>
            <Search>
              <Input type="text" placeholder="주식, 가상자산 검색" />
            </Search>
          </LeftMenuWrap>

          <RightMenuWrap>
            <SelectWrap>
              <LangButton
                  active={selectedLang === "KOR"}
                  onClick={() => handleLanguageChange("KOR")}
              >
                KOR
              </LangButton>
              <SelectBar> | </SelectBar>
              <LangButton
                  active={selectedLang === "ENG"}
                  onClick={() => handleLanguageChange("ENG")}
              >
                ENG
              </LangButton>
            </SelectWrap>
            {token ? (
              <Container ref={dropdownRef}>
                <ProfileWrapper>
                <ProfileButton imgUrl={logo} onClick={() => setIsOpen((prev) => !prev)} />
                </ProfileWrapper>
                {isOpen && (
                  <MenuBox>
                    <UserBlock>
                      <UserImage imgUrl={logo}/>
                      <UserDetails>
                        <UserName>흰둥오리</UserName>
                        <UserEmail>unchul87@gmail.com</UserEmail>
                      </UserDetails>
                    </UserBlock>
                    <Separator />
                    <MenuItem redDot>알림</MenuItem>
                    <MenuItem>내 강의실</MenuItem>
                    <MenuItem>강의 구매 내역</MenuItem>
                    <Separator />
                    <MenuItem>뉴스 알리미</MenuItem>
                    <MenuItem>배당 캘린더</MenuItem>
                    <Separator />
                    <MenuItem>투자 MBTI</MenuItem>
                    <MenuItem>백테스팅</MenuItem>
                    <Separator />
                    <MenuItem>증권사 수수료 비교</MenuItem>
                    <MenuItem>배당 포트폴리오 생성기</MenuItem>
                    <MenuItem>대출 이자 계산기</MenuItem>
                    <MenuItem>전문 투자자 신청</MenuItem>
                    <Separator />
                    <MenuItem onClick={handleLogout}>로그아웃</MenuItem>
                    <MenuItem>About us</MenuItem>
                  </MenuBox>
                )}
              </Container>
            ) : (
              <LoginButton onClick={() => navigate("/login-page")}>
                로그인
              </LoginButton>
            )}
            <AppButton gradient>앱 설치하기</AppButton>
          </RightMenuWrap>
        </MenuWrap>
      </Wrap>
    </>
  );
};

export default App;

const Wrap = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 57px;
  background-color: #131722;
  z-index: 100;
  user-select: none;
`;
const MenuWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  padding: 0 16px;
`;
const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 29px;
  gap: 4px;
  cursor: pointer;

  @media (max-width: 1000px) {
    display: none;
  }
`;
const TitleLogo = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: conic-gradient(
    #44928c 0deg 90deg,
    #d28f41 90deg 180deg,
    #a02c41 180deg 270deg,
    #183b5d 270deg 360deg
  );
`;
const TitleText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  font-size: 11.5px;
  color: #ffffff;
  font-weight: 300;
  cursor: pointer;
  white-space: nowrap;
`;
const Search = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Input = styled.input`
  width: 300px;
  height: 34px;
  border-radius: 10px;
  padding-left: 35px;
  margin-left: 10px;
  background-color: #202637;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-size: 11.9px 11.9px;
  background-position: 12px center;
  color: #7d7f80;
  outline: none;
  border: none;

  &::placeholder {
    color: #7d7f80;
    font-size: 10px;
  }

  @media (max-width: 900px) {
    width: 250px;
  }

  @media (max-width: 800px) {
    width: 200px;
  }

  @media (max-width: 700px) {
    width: 150px;
  }
`;
const LeftMenuWrap = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 30px;
  

  @media (max-width: 1080px) {
    gap: 20px;
  }

  @media (max-width: 980px) {
    gap: 15px;
  }

  @media (max-width: 870px) {
    gap: 10px;
  }

  @media (max-width: 760px) {
    gap: 8px;
  }
`;
const RightMenuWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;


  @media (max-width: 650px) {
    gap: 8px;
  }

  @media (max-width: 550px) {
    gap: 6px;
  }

  @media (max-width: 500px) {
    justify-content: flex-end;
  }
`;
const LangButton = styled.div<{ active: boolean }>`
  display: flex;
  font-size: 10.5px;
  font-weight: 500;
  color: ${(props) => (props.active ? "#FFFFFF" : "#7d7f80")};
  user-select: none;
  outline: none;

  @media (max-width: 680px) {
    display: none;
  }
`;

const SelectBar = styled.div`
  display: flex;
  font-size: 7.9px;
  color: #ffffff;
  font-weight: 500;

  @media (max-width: 680px) {
    display: none;
  }
`;
const SelectWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  @media (max-width: 680px) {
    display: none;
  }
`;
const LoginButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  font-size: 11px;
  color: #ffffff;
  font-weight: 300;
  white-space: nowrap;
  
`;
const AppButton = styled.div<{ gradient?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 30px;
  border-radius: 6px;
  background-color: #202637;
  font-size: 11.5px;
  color: #ffffff;
  font-weight: 350;
  background: ${({ gradient }) =>
      gradient
          ? "linear-gradient(90deg, #FCC853 0%, #FB992A 100%)"
          : "transparent"};
  line-height: 31px;

  @media (max-width: 500px) {
    display: none;
  }
`;

const Container = styled.div`
  position: relative;
`;

const ProfileWrapper = styled.div`
  width: 52px;
  height: 52px;
  padding: 2px; /* 외곽선 두께 */
  border-radius: 50%;
  background: linear-gradient(to left, #CB4B39, #E1B155);
  display: flex;
  align-items: center;
  justify-content: center;

  /* 테두리 안쪽이 정확히 원이 되도록 설정 */
  box-sizing: border-box;
`;

const ProfileButton = styled.div<{ imgUrl: string }>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: white;
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
`;

const MenuBox = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
  width: 260px;
  background-color: #181c2e;
  color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
  padding: 12px 0;
  font-family: "Noto Sans KR", sans-serif;
  z-index: 1000;
`;

const UserBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 18px;
`;

const UserImage = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #ffffff;
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

const UserDetails = styled.div`
  margin-left: 12px;
`;

const UserName = styled.div`
  font-size: 14px;
  font-weight: 700;
`;

const UserEmail = styled.div`
  font-size: 12px;
  color: #aaa;
`;

const Separator = styled.div`
  border-top: 1px solid #2c2f3f;
  margin: 10px 0;
`;

const MenuItem = styled.div<{ redDot?: boolean }>`
  padding: 10px 18px;
  font-size: 14px;
  color: #ddd;
  cursor: ${(props) => (props.onClick ? "pointer" : "default")};
  position: relative;

  &:hover {
    background-color: #2a2d3e;
  }

  ${(props) =>
    props.redDot &&
    `
    &::after {
      content: '';
      position: absolute;
      right: 18px;
      top: 50%;
      transform: translateY(-50%);
      width: 8px;
      height: 8px;
      background-color: red;
      border-radius: 50%;
    }
  `}
`;

