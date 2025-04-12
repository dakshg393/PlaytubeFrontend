import React, { useState } from "react";
import {  NavBar, SideNavBtn } from "../Components/index.js";
import { Outlet } from "react-router-dom";
import { navItems } from "../Utils/MainUtils.jsx";

import useNavStore from "../Store/Nav.Store.js";
import { UserCircle } from "lucide-react";

const MainLayout = () => {

    const aside =useNavStore((state)=>state.aside)

    const [isOpen, setIsOpen] = useState(true)

    return (
        <>
            <div key={"main"} className=" fixed top-0 left-0 w-full h-full min-h-screen flex-1 ">
                {/* Header */}
                <header className="h-14  border-b-1">
                    <NavBar />
                </header>

                <div className="flex flex-1 ">
                    {/* Sidebar */}
                    <aside className={`h-[100vh]  fixed  sm:relative overflow-y-auto pt-3 flex-col  gap-2 border-r-1 rounded-r-2xl bg-white 
                  ${aside ? "w-64 flex" : "hidden md:flex  md:w-14"}`}>
                       
                       {
                        navItems.map((navItem)=> <SideNavBtn path={navItem.path} icon={navItem.icon} name={navItem.name} isSmall={!aside} />)
                       }
                       <SideNavBtn path={"/acount"} icon={<UserCircle/>} name={"Account"} isSmall={!aside} custom={""}/>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 items-center justify-center bg-gray-200 text-left transform transition-transform duration-500 pb-20 min-h-screen ">

                        
                        <Outlet/>



                    </main>

                </div>

                {/* Footer */}

            </div>
        </>
    )
}

export default MainLayout