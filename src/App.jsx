import Navbar from "./Components/Navbar"
import Allcomps from "./Components/Allcomps"
import {Routes ,Route} from "react-router-dom"
import Homepage from "./Components/Home/Homepage"
import {prodData} from "./Components/Slices/Reddata";
import { useDispatch ,useSelector} from "react-redux";
import { useEffect} from "react";

export default function App() {

   const dispatch=useDispatch();
    const selc=useSelector((state)=>state.nameRed.innoApi)
    useEffect(()=>
    {
         function getData()
        {
            try{
            dispatch(prodData("https://api-test.innoloft.com/product/6781/"))
            }
            catch(err)
            {
                console.log(err)
            }
        }
        getData()
    },[prodData])

  return (
    <div className="pb-5">
<Navbar navImg={selc?.user}></Navbar>
<Routes>
  <Route path="/" element={<Homepage dataLogo={selc?.company}/>}></Route>
  <Route path="/product" element={<Allcomps selc={selc}/>}></Route>
  <Route path="/product/edit" element={<Allcomps selc={selc} isEdit/>}></Route>
</Routes>
    </div>
  )
}