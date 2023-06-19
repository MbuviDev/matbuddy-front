import React from "react";
import { useNavigate } from "react-router-dom";


function NavItem ({image , text, path}) {
    const nav = useNavigate();

    return (
        <div
        onClick={()=>(path)}
        className="flex items-center cursor-pointer py-3">

    <img src={image} className="mr-2 px-2 md:px-3  w-9 md:w-12" alt={text}/> 
    <span className="align-middle hover:text-white transition-colors ">{text}</span>          


        </div>
    )
}

export default NavItem