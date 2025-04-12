import React from "react"
import { NavLink } from "react-router-dom"

const LinkBtn=()=>{
    return(
        <div>
        <NavLink to="/hello">
            <button>Hello</button>
        </NavLink>
        </div>
    )
}

export default LinkBtn