import React from 'react';
import { Stack, Typography } from '@mui/material';
import { categories } from '../utils/constants';



const Sidebar = ({selectedButton, setSelectedButton}) => {

    return (
        <Stack direction="row" sx={{overflowY: "auto", height: {sx: "auto" , md: "95%"}, flexDirection: {md: "column"}}} >
            {categories.map((item) => (
                <button key={item.name} className="category-btn" onClick={() => {setSelectedButton(item.name)}}
                style={{ backgroundColor: item.name === selectedButton ? "#FC1503" : "", color: "#fff" }}
                >
                    <span 
                        style={{color: item.name === selectedButton ? "white" : "#FC1503" }}
                    >{item.icon}</span>
                    <span style={{marginLeft: "5px", opacity: item.name === selectedButton ? 1 : 0.8 }}>{item.name}</span>
                </button>
            ))}
        </Stack>
    )
}

export default Sidebar