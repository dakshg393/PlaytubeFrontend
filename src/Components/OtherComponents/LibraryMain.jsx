import React from "react";
import HorizontalCard from "../Card/HorizontalCard";
import VerticalCard from "../Card/VerticalCard";

const LibraryMain = () => {
    return (
        <div className="w-full flex-1 overflow-y-auto flex flex-col items-center">
            <h1 className="text-xl font-semibold w-full text-start p-6">Playlist</h1>
            <div className="w-full gap-4 flex flex-wrap justify-center items-center">
                <VerticalCard />
                <VerticalCard />
                <VerticalCard />
            </div>

            <h1 className="text-xl font-semibold w-full text-start p-6">Liked Videos <span></span></h1>
            <div className="w-full gap-4 flex flex-wrap justify-center items-center">
                <VerticalCard />
                <VerticalCard />
                <VerticalCard />
            </div>

            <h1 className="text-xl font-semibold w-full text-start p-6">Watch History</h1>
            <div className="w-full gap-4 flex flex-wrap justify-center items-center">
                <VerticalCard />
                <VerticalCard />
                <VerticalCard />
            </div>
        </div>
    )
}

export default LibraryMain