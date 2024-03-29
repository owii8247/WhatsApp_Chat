import React, { useContext } from 'react'
import { Dialog, Box, Typography, List, styled, ListItem } from "@mui/material"

import QRCodeImage from "../assets/WhatsAppQRCode.png"
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode"
import { AuthContext } from '../../Context/AuthContext';

const Component = styled(Box)`
    display: flex; 
`;

const Container = styled(Box)`
    padding: 56px 0 56px 56px;
`;

const Title = styled(Typography)`
    font-size: 26px;
    margin-bottom: 25px;
    color: #525252;
    font-weight: 300;
    font-family: Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif;
`;

const StyledList = styled(List)`
    &  > li {
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        color: #4a4a4a;
    }
`;

const QRCOde = styled('img')({
    margin: '50px 0 0 90px',
    height: 264,
    width: 264
});

const dialogStyle = {
    marginTop: '12%',
    height: '90%',
    width: '90%',
    maxWidth: '200',
    maxHeight: '100%',

}

const Login = () => {
    const {setAccount} = useContext(AuthContext)


    const loginSuccess = (res) => {
        //console.log(res)
        const decoded = jwt_decode(res.credential)
        console.log(decoded)
        setAccount(decoded)
    }

    const loginFailure = (res) => {
        console.log("Login failed", res)
    }
    return (
        <>
            <Dialog
                open={true}
                maxWidth={'md'}
                PaperProps={{ sx: dialogStyle }}
                BackdropProps={{ style: { backgroundColor: 'unset' } }}
            >
                <Component>
                    <Container>
                        <Title>Use WhatsApp on your computer:</Title>
                        <StyledList>
                            <ListItem>1. Open WhatsApp on your phone</ListItem>
                            <ListItem>2. Tap Menu or Settings and select WhatsApp Web</ListItem>
                            <ListItem>3. Tap on Link Device</ListItem>
                            <ListItem>4. Point your phone to this screen to capture the code</ListItem>
                        </StyledList>
                    </Container>
                    <Box style={{ position: 'relative' }}>
                        <QRCOde src={QRCodeImage} alt='QR Code' />
                        <Box style={{ position: 'absolute', top: '50%', transform: 'translateX(42%) translateY(-50%)' }}>

                            <GoogleLogin
                                buttonText=""
                                onSuccess={loginSuccess}
                                onError={loginFailure}
                            />
                        </Box>
                    </Box>
                </Component>
            </Dialog>
        </>
    )
}

export default Login