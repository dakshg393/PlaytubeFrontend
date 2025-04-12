import React from "react";
import VideoCard from "../Components/Card/VerticalCard";
import VerticalCard from "../Components/Card/VerticalCard";
import { HorizontalCard, ProfileImg } from "../Components";

const Subscriptions = () => {
    return (
        <section className="flex-1 h-screen w-full bg-white flex flex-col gap-6 p-2   justify-center items-center  flex-nowrap">
            <div className="p-2 w-full">
                <h1 className="text-3xl font-bold ">Subscription</h1>
                <div className="min-h-[100px] w-full flex items-center justify-start flex-row overflow-x-auto pl-12 gap-4 overflow-y-hidden flex-nowrap">
                    <ProfileImg size={"h-[72px] "} />
                    <ProfileImg size={"h-[72px]"} />
                    <ProfileImg size={"h-[72px]"} />
                    <ProfileImg size={"h-[72px]"} />

                    <ProfileImg size={"h-[72px]"} />
                </div>
            </div>
            <div className="flex-1 w-full overflow-y-auto  flex flex-col items-center  gap-2 px-4 overflow-scroll">
                <HorizontalCard />
                <HorizontalCard />
                <HorizontalCard />
                <HorizontalCard />
                <HorizontalCard />
                <HorizontalCard />
                <HorizontalCard />
            </div>


        </section>
    )

}

export default Subscriptions