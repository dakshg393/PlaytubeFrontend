import React from "react";
import vite from "../../../public/vite.svg"
import ProfileImg from "../Ui/ProfileImg";
const VerticalCard = ({type="video"}) => {
    return (
        <div className=" w-full p-2.5  min-w-[300px] max-w-[350px] h-100 flex flex-col  rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300 border border-black bg-gray-100/50">

            {/* Thumbnail Section */}
            <div id="thumbnai" className="w-full h-1/2 border-1">
                <img src={vite} alt="Video Thumbnail" className="w-full h-full object-contain" />
            </div>

            {/* Video Details Section */}
            <div id="" className="p-2 h-1/2 flex flex-col gap-1 ">
                <h1 className="text-lg  font-semibold h-1/2 line-clamp-2 ">Titlkndskn  nkendkjnssnk neekd okmk nks kdnkndkndknkdnkndksTitlkndskn  nkendkjnssnk neekd okmk nks kdnkndkndknkdnkndks</h1>
                <h2 className="text-sm text-gray-700 h-[35%] flex items-center gap-x-2"><span><ProfileImg size={"h-8 w-8"}/></span> Owner</h2>
                {
                    type == "video" ? 
                    (
                        <h2 className={`text-xs text-gray-500 h-[15%]`}>
                            32 views <span className="ml-2">2 hours ago</span>
                        </h2>
                    ):(
                        <h2>Playlist</h2>
                    )
                }
               
            </div>

        </div>


    )
}

export default VerticalCard