import React from "react";
import { NavLink } from "react-router-dom";


const SideNavBtn = ({path,name,icon,isSmall,custom})=>{
    return(
        <NavLink className={({isActive})=>`h-10 w-full flex items-center justify-start gap-2 p-4 backdrop-grayscale rounded-xl ${custom}  ${(isActive)?"bg-purple-400":"hover:bg-purple-200"}`} to={path} >{icon}<span className={`${isSmall?"hidden":""}`}>{name}</span></NavLink>
    )
}

export default SideNavBtn