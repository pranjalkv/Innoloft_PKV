import { useNavigate } from "react-router-dom";
function Homepage({dataLogo})
{
    const navi=useNavigate();

    function openProd()
    {
        navi("/product");
    }

    return(
        <section className="w-full h-[80vh] flex items-center justify-center max-screen-xl">
            <div className="text-center">
                <img src={dataLogo?.logo} className="mx-auto w-[40%] mb-2" alt="" />
              <p className="lg:text-5xl text-4xl font-bold text-innoBlue text-center">We make coding as easy as PowerPoint</p>
              <button className="my-6 bg-amber-300 hover:bg-amber-400 
              tracking-wider text-innoblue font-semibold py-2 px-3 rounded cursor-pointer"
               onClick={openProd}>View Products</button>
            </div> 
            <div className="absolute bottom-[5px] text-center w-full text-slate-500">
                <p>Sample Project build by Pranjal Kumar for INNOLOFT</p>
                <div>
                <a href="https://github.com/" target="_blank">Github | </a>
                <a href="https://pranjalkv.com" target="_blank">pranjalkv.com</a>
                </div>
            </div>
        </section>
    )
}
export default Homepage;