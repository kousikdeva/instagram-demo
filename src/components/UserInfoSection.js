import { Avatar, Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';

const container = {

}

const buttonStyle = {
    height: '25px',
    bgcolor: '#fff',
    textTransform: 'none',
    color: '#17202A',
    border: '1px solid #ABB2B9',
    ml: '30px'
}

const nameContainer = {
    display: 'flex',
    alignItems: 'center',
    width: '100%'
}

const postCountContainer = {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    my: '20px'
}

const boldNumber = {
    fontWeight: 600
}

const bioContainer = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
}

const UserInfoSection = ({ userInfo }) => {

    return (
        <Box sx={container}>
            <Grid container >
                <Grid item xs={5} sx={{ display: 'flex', py: '30px', justifyContent: 'center' }}>
                    <Avatar sx={{ width: '150px', height: '150px' }} alt='Profile picture' />
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>

                    <Box sx={nameContainer}>
                        <Typography variant='h6' >{userInfo.username}</Typography>
                        <VerifiedIcon sx={{ color: '#6495ED', fontSize: '18px' }} />
                        <Button sx={buttonStyle}>Follow</Button>
                    </Box>

                    <Box sx={postCountContainer}>
                        <Typography><span style={boldNumber}>1020</span>Posts</Typography>
                        <Typography><span style={boldNumber}>250</span>Follows</Typography>
                        <Typography><span style={boldNumber}>220</span>Followings</Typography>
                    </Box>

                    <Box sx={bioContainer}>
                        <Typography sx={{ fontWeight: 600 }}>{userInfo.name}</Typography>
                        <Typography>{userInfo.email}</Typography>
                        <Typography sx={{ color: '#215C97 ' }}>{userInfo.website}</Typography>

                    </Box>

                </Grid>
            </Grid>

        </Box>
    )
}

export default UserInfoSection