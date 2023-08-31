import Sidemenu from "./Sidemenu"
import Front from "./Front"
import Video from "./Video"
import Offer from "./Offer"
import {FaHome ,FaAngleRight} from "react-icons/fa"
import { useNavigate } from "react-router-dom"

function Allcomps({selc ,isEdit})
{
 const naviEdit=useNavigate();  
 function openEditor()
 {
    naviEdit("/product/edit")
 }
 function backProduct()
 {
    naviEdit("/product")
 }
    return(
        <section className="flex mx-auto max-w-screen-2xl content-around w-[100%]">
            <div className="lg:mr-5 lg:w-[25%]">
                <Sidemenu sideData={selc?.user}></Sidemenu>
            </div>
          <div className="lg:ml-5 lg:w-[75%]">
            <div className="mt-3 mb-2 flex justify-between items-center w-[98%] mx-auto">
                <div className="flex text-xl font-semibold text-slate-500">
                {!isEdit && <div className="flex">
                <FaHome className="my-1"/>
                <FaAngleRight className="lg:mx-3 mx-2 my-1"/>
                <p>Offers</p>
                <FaAngleRight className="lg:mx-3 mx-2 my-1"/>
                </div>}
                <p className="text-slate-700">{selc?.name}</p>
                </div>
                    {!isEdit?<button className="bg-innoBlue hover:bg-blue-800 tracking-wider text-white 
                    font-semibold py-1 px-3 rounded" onClick={openEditor}>
                        Edit
                    </button>:
                    <button className="bg-innoBlue hover:bg-blue-800 tracking-wider text-white 
                    font-semibold py-1 px-3 rounded" onClick={backProduct}>
                        View Offer
                    </button>}
            </div>
                    <Front innoData={selc} isEdit={isEdit}></Front>
                    <Video vidData={selc?.video} isEdit={isEdit}></Video>
                    <Offer offData={selc?.trl} isEdit={isEdit}></Offer>
           </div>
        </section>
    )
}
export default Allcomps;