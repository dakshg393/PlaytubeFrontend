import React from "react";
import vite from "../../../public/vite.svg"
import ProfileImg from "../Ui/ProfileImg";
const HorizontalCard = ({isSmall=0}) => {
    

    return (

        <div className={`bg-white  p-2.5  w-[90%] ${isSmall?"h-28":"h-50"} flex flex-row   rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200`}>

            {/* Thumbnail Section */}
            <div id="thumbnai" className="w-1/2  md:w-1/3  bg-fuchsia-300">
                <img src={vite} alt="Video Thumbnail" className="w-full h-full object-contain" />
            </div>

            {/* Video Details Section */}
            <div id="" className="p-2  w-1/2  md:w-2/3  flex flex-col gap-1 flex-grow basis-1/2">
                <h1 className="text-lg  font-semibold h-1/2 line-clamp-2 overflow-hidden">Titlkndskn  nkendkjnssnk neekd okmk nks kd jjjwl newklmek Titlkndskn nkendkjnssnk neekd okmk nks kdnkndkndknkdnkndks edmlewmlkmed  ekmewlkmnkndkndknkdnkndks</h1>
                <h2 className="text-sm text-gray-700 h-[34%] flex items-center justify-left gap-x-2 "><ProfileImg size={"h-8 w-8"}/> Owner</h2>
                <h2 className="text-xs text-gray-500 h-[14%]">
                    32 views <span className="ml-2">2 hours ago</span>
                </h2>
            </div>

        </div>


    )
}

export default HorizontalCard