import React from "react";
import { HorizontalCard } from "../Components/index.js";
import { Flame } from "lucide-react";


const Trending = () => {
    return (
        <section className="w-full h-screen  bg-white flex flex-wrap gap-6 p-2  mb-2  items-center overflow-y-auto">
            <h1 className="text-3xl font-bold p-4  flex items-center">Tending<span className="inline-block "><Flame size={60} color="red"/></span></h1>
            <div className="w-full h-screen  bg-white flex flex-wrap gap-6 p-2  mb-2 justify-center items-center "> 
                <HorizontalCard />
                <HorizontalCard />
                <HorizontalCard />
                <HorizontalCard />
                <HorizontalCard />
            </div>

        </section>
    )
}

export default Trending