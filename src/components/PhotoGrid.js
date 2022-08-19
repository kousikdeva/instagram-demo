import { Box, Divider, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'



const PhotoGrid = ({ posts }) => {
    return (
        <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'center', }}>
            <Box sx={{ borderTop: '1px solid #ABB2B9', width: '1000px', display: "flex", justifyContent: 'center', }}>
                <Tabs value={'1'} >
                    <Tab label="Post" value="1" />
                    <Tab label="Reels" />
                    <Tab label="Videos" />
                    <Tab label="Tagged" />
                </Tabs>

            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>


                {posts.map(post => {
                    return (
                        <Box key={post.id} sx={{ p: '10px' }}>
                            <img src={post.thumbnailUrl} width='300px' height='300px' alt='Posts' />
                        </Box>
                    )
                })}

            </Box>
        </Box>
    )
}

export default PhotoGrid