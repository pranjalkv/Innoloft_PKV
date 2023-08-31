import { useDispatch, useSelector} from "react-redux";
import { FaRegEnvelope ,FaSearch ,FaAngleDown , FaRegBell ,FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { configThunk } from "./Slices/Reddata";


function Navbar({navImg})
{

   const dispatch=useDispatch()
  const selcTheme=useSelector((state)=>state.nameRed.themeAr)
useEffect(()=>
{
function getTheme()
{
    dispatch(configThunk())
}
getTheme()
},[])
  console.log("fs",selcTheme)

    return(
     <nav style={{backgroundColor:`${selcTheme?.mainColor}`}} className="text-slate-50">
    <div className="max-w-screen-2xl flex lg:justify-around justify-between px-3 items-center w-full py-3 mx-auto">
<div className="mt-1">
    <NavLink to="/"><img src="/inno/innoLogo.png" alt="" className="w-[140px] h-[28px]"/></NavLink>
    {/* logo form configuration (selcTheme?.logo) was blue and yellow which gets hidden in background color (selcTheme?.mainColor) */}
</div>
<div className="w-1/3 relative lg:flex hidden">
    <input type="text" placeholder="Enter interest, company name, keyword, etc." 
    className="w-full p-1 rounded text-slate-800"/>
     <FaSearch size="1.3em" className="absolute text-zinc-600 right-[5px] top-[6px]"/>
</div>
  <ul className="items-center text-lg lg:flex hidden">
      <li className="mx-2 text-amber-400">
        <a className="pointer-events-none"><FaRegEnvelope size="1.5em" /></a>
      </li>
      <li className="inline-flex">
        <a className="text-xl pointer-events-none my-1">EN</a><FaAngleDown size="1.2em" className="my-2"/>
      </li> 
      <li className="mx-2 text-amber-400">
        <a className="pointer-events-none"><FaRegBell size="1.3em"/></a>
      </li>
      <li className="flex mx-1">
        <img src={navImg?.profilePicture} alt="" className="w-[35px] h-[35px] rounded-full my-1"/>
        <FaAngleDown size="1.2em" className="my-3 mx-1"/>
      </li>
  </ul>
  <div className="lg:hidden flex">
    <FaSearch size="1.3em" className="text-amber-400 mx-2 pointer-events-none"/>
        <FaBars size="1.3em" className="pointer-events-none" />
    </div> 
    </div>
    
</nav>
    )
}
export default Navbar;