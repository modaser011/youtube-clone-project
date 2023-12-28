import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {

    const { id } = useParams();

    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([]);

    console.log(channelDetail);
    console.log(videos);

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {setChannelDetail(data?.items[0])});
        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => {setVideos(data?.items)});
    }, [id])

    return (
        <Box minHeight="95vh">
            <Box>
                <div  
                    style={{
                        background: "linear-gradient(90deg, rgba(5,0,65,1) 5% , rgba(10,10,186,1) 38% , rgba(203,79,255,1) 93%)",
                        zIndex: "10",
                        height: "300px"
                    }}
                />
                <ChannelCard channel={channelDetail} isShift />
            </Box>
            <Box display="flex" p="2" sx={{alignItems: "center" , justifyContent: "center", alignContent: "center"}}>
                <Videos videos={videos} center />
            </Box>
        </Box>
    )
}

export default ChannelDetail