import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();

        if(searchTerm){
            navigate(`/search/${searchTerm}`);
            setSearchTerm("");
        }
    }

    return (
        <Paper
            component="form" 
            onSubmit={handleClick} 
            sx={{
                borderRadius: 20,
                border: "1px solid #e3e3e3",
                pl: 2,
                boxShadow: "none", 
                mr: {sm: 5},
                display: "flex",
                alignItems:"center"
            }}
        >
            <input 
                className='search-bar' 
                style={{height: "35px", borderRadius: "20px", fontSize: "20px"}} 
                placeholder="Search..." 
                value={searchTerm} 
                onChange={(e) => {setSearchTerm(e.target.value)}}
            />
            <IconButton type="submit" sx={{p: "10px", color: "red"}}>
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar