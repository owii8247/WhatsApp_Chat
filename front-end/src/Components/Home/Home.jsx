import React from 'react'
import Login from '../Login/Login'
import { AppBar, Toolbar, Typography, styled, Box } from '@mui/material';

const Home = () => {

    const Component = styled(Box)`
    height: 100vh;
    background: #111b21;
`;

    const LoginHeader = styled(AppBar)`
    background: #00a884;
    height: 220px;
    box-shadow: none;
`;

    const Title = styled(Typography)`
    font-size: 15px;
    margin: 50px 0 0 100px;
    color: white;
    font-weight: bold;
`;


    return (
        <>
            <Component>
                <LoginHeader>
                    <Toolbar >

                        <Title>WHATSAPP WEB</Title>

                    </Toolbar>
                </LoginHeader>
                <Login />
            </Component>
        </>
    )
}

export default Home