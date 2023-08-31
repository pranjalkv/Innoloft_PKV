import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import {CiLocationOn} from "react-icons/ci"
import {FaMedal} from "react-icons/fa"
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updata } from './Slices/Reddata';
import { useNavigate } from 'react-router-dom';


function Front({innoData,isEdit})
{
    if (Object.keys(innoData).length === 0) {
    return;
  }

    const disp=useDispatch()
    const selcHas=useSelector((state)=>state.nameRed.themeAr)
     const[editDesc,seteditDesc] =useState(innoData?.description)
     const[editVid,seteditVid]=useState(innoData?.video)
     const[editTrl,seteditTrl]=useState(innoData?.trl?.name)

     const naviPro=useNavigate()

     function handleDesc(value)
     {
        seteditDesc(value);
     }

     function handleVid(e)
     {
        seteditVid(e.target.value)
     }

     function handleTrl(e)
     {
        seteditTrl(e.target.value)
     }

     function redDesc(e)
     {
        e.preventDefault();
        disp(updata({editDesc,editVid,editTrl}))
        naviPro("/product")
     }
    return(
        <>
        <section className="w-[98%] mx-auto mb-4 rounded-lg block lg:flex items-center lg:text-[100%] text-[90%] bg-white">
            <div className="lg:w-[70%] w-full lg:border-r border-b relative">
                                <div className="flex items-center text-white text-3xl w-4/12 absolute top-0 left-0">
                                    <p className="text-white bg-innoBlue p-2 rounded-tl-lg rounded-br-lg"><FaMedal size="0.8em"/></p> 
                                <p className="bg-white text-innoBlue mx-1">Patent</p></div>
                <img src={innoData?.picture} className="w-full lg:h-[350px] h-[250px] object-contain" alt="" />
                <p className="px-2 text-2xl pb-2 font-semibold">{innoData?.name}</p>
                 {!isEdit ? <div className="px-2 pb-2" dangerouslySetInnerHTML={{__html:`${innoData?.description}`}}>
                </div>:
                <div>
<ReactQuill value={editDesc} onChange={handleDesc}/>
<div className="my-2 text-end">
<button className="mx-1 bg-innoBlue hover:bg-blue-800 tracking-wider text-white 
                    font-semibold py-1 px-3 rounded" onClick={redDesc}>Save All</button>
                    <button className="mx-1 bg-gray-500 hover:bg-gray-600 tracking-wider text-white 
                    font-semibold py-1 px-3 rounded" onClick={()=>naviPro("/product")}>Cancel</button>
    </div>
</div>} 
            </div>
            {selcHas?.hasUserSection && <div className="lg:w-[30%] w-[100%]">
                <p className="mt-2 mx-1 mb-4 text-xl font-semibold">Offered By</p>
                <img src={innoData?.company?.logo} className="w-[65%] mx-2 max-w-[300px]" alt="" />
                <div className="flex my-3 ml-5">
            <img src={innoData?.user?.profilePicture} className="w-[70px] h-[70px] rounded-full" alt="" />
            <div className="mx-3 my-1">
                  <p className="text-xl 
                   text-zinc-700 font-semibold">{innoData?.user?.firstName} {innoData?.user?.lastName}</p>
            <p className="text-lg font-normal text-zinc-500">{innoData?.user?.position}</p>
            </div>
        </div>
                 <div className="flex mx-1 my-3 text-gray-500">   
                    <div>
                        <CiLocationOn className="my-2 text-[20px]"/>
                    </div>
                    <div>
                          <p className="text-sm font-normal py-2">
                    <span></span>
                  {innoData?.company?.address?.street} {innoData?.company?.address?.house},
                </p>
                <p className="text-sm font-normal">
                  {innoData?.company?.address?.zipCode} {innoData?.company?.address?.city?.name},{" "}
                  {innoData?.company?.address?.country?.name}
                </p>
                    </div>
            </div>
            {!isEdit && <div className="w-[98%] my-1 mx-auto pb-2">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2522.7809344896227!2d6.097925576917091!3d50.77963437165691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0995d36ff22ff%3A0x3a4248b50ce934de!2sJ%C3%BClicher%20Str.%2072a%2C%2052070%20Aachen%2C%20Germany!5e0!3m2!1sen!2sin!4v1693321112476!5m2!1sen!2sin" 
                allowFullScreen="" 
                className="w-full max-w-md mx-auto aspect-video"
                loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>}
            </div>}
        </section>

        {isEdit &&<section className="w-[98%] mx-auto mb-4 rounded-lg block lg:flex items-center lg:text-[100%] text-[90%] bg-white">
            <form className='w-[100%]'>
                <p className="text-2xl lg:my-2 mx-1 font-semibold">Video</p>
            <input type="text" name="video" value={editVid} onChange={handleVid} 
            className="w-[98%] mx-2 my-2 border-2 rounded-lg text-gray-700 p-1"/>
            </form>
        </section>}

        {isEdit && <section className="w-[98%] mx-auto mb-4 rounded-lg block lg:flex items-center 
        lg:text-[100%] text-[90%] bg-white">
               <form className="w-full">
                <p className="text-2xl lg:my-2 mx-1 font-semibold">Offer</p>
            <input type="text" className="w-[98%] mx-2 my-2 border-2 
            rounded-lg text-gray-700 p-1" value={editTrl} onChange={handleTrl}/>
            </form>
        </section>}
        </>
    )
}
export default Front;