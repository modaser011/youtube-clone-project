import React from 'react';
import { Stack, Box } from '@mui/material';
import {VideoCard, ChannelCard} from './';

const Videos = ({videos, center, column}) => {

    if(!videos?.length){
        return 'loading';
    }

    return (
        <Stack direction={column ? "column" : "row"} flexWrap="wrap" justifyContent={center ? "center" : "start"} gap={2}>
            {videos.map((item, index) => (
                <Box key={index}>
                    {item.id.channelId && <ChannelCard channel={item} />}
                    {item.id.videoId && <VideoCard video={item} />}
                </Box>
            ))}
        </Stack>
    )

}

export default Videos