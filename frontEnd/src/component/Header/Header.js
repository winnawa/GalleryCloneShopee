import React from "react";
import SymbolIcon from "./SymbolIcon";
import SearchBar from "./SearchBar";
import UserOption from "./UserOption";

const Header = ()=>{

    return (
        <div style={{display:"flex", marginBottom:"10px"}}>
            <SymbolIcon/>
            <SearchBar/>
            <UserOption/> 
        </div>
    )
}

export default Header;