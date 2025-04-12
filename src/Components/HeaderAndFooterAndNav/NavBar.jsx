import React from "react";
import useNavStore from "../../Store/Nav.Store.js";
import { Menu, Search } from "lucide-react";


const NavBar = () => {
    const toggleAside = useNavStore((state) => state.toggleAside);

    return (
        <nav className="h-full w-full  flex items-center px-4">
            {/* Button on the left */}
            <button onClick={toggleAside} className=" p-2">
                <Menu size={30} />
            </button>
            <h1 className="text-left hidden md:block">StreamSphere </h1>
            {/* Centered input */}
            <div className="flex-1 flex justify-center  items-center h-full relative ">
                
                <div className=" min-w-3xs w-[60%] h-[60%] flex justify-center  align-center border-2 rounded-xl">
                <input
                    type="text"
                    className=" w-[95%] outline-0"
                />
                <button className="border-l-2"><Search size={26}/></button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar