import React, {useState} from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import {Link} from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import JavascriptIcon from "@mui/icons-material/Javascript";
import ForumIcon from "@mui/icons-material/Forum";
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleAuthClick = () => {
        setIsLoggedIn(isLoggedIn => !isLoggedIn);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    EDDI
                </Typography>
                <Button
                    color="inherit"
                    component={Link}
                    to="/home"
                    startIcon={<HomeIcon />}
                >
                    Home
                </Button>
                <Button
                    color="inherit"
                    component={Link}
                    to="/theclass"
                    startIcon={<CodeIcon />}
                >
                    더 클래스
                </Button>
                <Button
                    color="inherit"
                    component={Link}
                    to="/watch-list"
                    startIcon={<JavascriptIcon />}
                >
                    주시항목
                </Button>
                <Button
                    color="inherit"
                    component={Link}
                    to="/community"
                    startIcon={<ForumIcon />}
                >
                    게시판
                </Button>
                <Button
                    color="inherit"
                    component={Link}
                    to="/google-authentication/login"
                    startIcon={<SportsGymnasticsIcon />}
                >
                    구글로그인
                </Button>
                <Button
                    color="inherit"
                    component={Link}
                    to="/kakao-authentication/login"
                    startIcon={<SportsGymnasticsIcon />}
                >
                    카카오로그인
                </Button>
                {/* 로그인 / 로그아웃 버튼 */}
                <Button
                    color="inherit"
                    onClick={handleAuthClick}
                    startIcon={isLoggedIn ? <LogoutIcon /> : <LoginIcon />}
                >
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default App