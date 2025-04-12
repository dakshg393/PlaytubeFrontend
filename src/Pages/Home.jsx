import React from "react";

import {ProfileImg,HorizontalCard,VerticalCard} from "../Components/index.js";
import { categoryItems } from "../Utils/MainUtils.jsx";
const Home =()=>{
    return(
        <section className=" h-screen  bg-white flex     justify-center items-center flex-col ">

        {/* <section className="w-full bg-yellow-500 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap- items-center justify-center flex-wrap overflow-y-auto h-[100vh]">
                     */}
                 <div className="h-16  w-full  gap-x-4 pl-10  font-bold  flex justify-start items-center  overflow-x-auto flex-wrap ">
                
                    {categoryItems.map((item)=>(
                        <button key={item.name} className="whitespace-nowrap">{item.name}</button>
                    ))}
                 </div>
                 <div className="w-full h-full gap-4   flex flex-wrap  flex-1  justify-center items-center overflow-scroll" >
                    
                    <VerticalCard/>
                    <VerticalCard/>
                    <VerticalCard/>
                    <VerticalCard/>
                    <VerticalCard/>
                    <VerticalCard/>
                    <VerticalCard/>
                    <VerticalCard/>
                    <VerticalCard/>
                    <VerticalCard/>
                    <VerticalCard/>
                    <VerticalCard/>
                    <VerticalCard/>
                    <VerticalCard/>
                    <VerticalCard/>
                    <VerticalCard/>
                    <VerticalCard/>
                    <VerticalCard/>
                    <VerticalCard/>
                    <VerticalCard/>
                    <VerticalCard/>
                    <VerticalCard/>
                    <VerticalCard/>
                    <VerticalCard/>
                    </div>
        </section>
    )
}

export default Home