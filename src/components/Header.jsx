import React from "react";
import NoteAddIcon from '@mui/icons-material/NoteAdd';


function Header() {
    return (
    <header>
        <h1>
            <NoteAddIcon fontSize="large" sx={{verticalAlign: "sub"}} />Keeper
        </h1>
    </header>
    );
}

export default Header;