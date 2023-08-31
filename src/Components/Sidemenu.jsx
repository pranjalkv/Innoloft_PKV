import {FaUserFriends,FaHubspot ,FaHome ,FaAngleDown} from "react-icons/fa"
import { useState } from "react";
function Sidemenu({sideData})
{
      const [rot,setRot]=useState(false)
    return(
        <>
        <div className="lg:block hidden text-zinc-900 mx-3 my-4">
<div className="flex">
            <img src={sideData?.profilePicture} className="w-[70px] h-[70px] rounded-full" alt="" />
            <div className="mx-3 my-1">
                  <p className="text-2xl font-semibold">{sideData?.firstName} {sideData?.lastName}</p>
            <p className="text-lg font-normal text-zinc-500">{sideData?.position}</p>
            </div>
        </div>
        <ul className="my-5 text-2xl text-zinc-700">
            <li className="flex"><FaHome className="my-1 mx-3"/> Home</li>
            <li className="flex my-4"><FaUserFriends className="my-1 mx-3"/> Members</li>
            <li className="flex" onClick={()=>setRot(!rot)}><FaHubspot className="my-1 mx-3"/> Organizations <FaAngleDown className={`my-2 mx-1 transition-transform duration-300 ${rot?"rotate-180":""}`} /></li>
        </ul>
        </div>
        
        </>
    )
}

export default Sidemenu;