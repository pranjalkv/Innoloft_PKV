import {FaKeycdn ,FaRegClock,FaChessKnight ,FaDollarSign} from "react-icons/fa"

function Offer({offData ,isEdit})
{

    return(
                <>
        {!isEdit && <section className="bg-white rounded-lg my-2 w-[98%] mt-4 p-2 text-gray-600 lg:text-[100%] text-[90%] mx-auto">
             <p className="text-2xl my-2 font-semibold">Offer details</p>
             <div className="lg:grid grid-cols-2 gap-4 w-full justify-between block">
                <div>
                    <div className="flex m-2"><FaKeycdn className="my-2"/><p className="text-2xl mx-2">Technology</p></div>
                    <div className="flex">
                        <p className="bg-gray-200 rounded-2xl px-3">Label 1</p>
                        <p className="bg-gray-200 rounded-2xl px-3 mx-3">Label 2</p>
                        <p className="bg-gray-200 rounded-2xl px-3">Label 3</p>
                    </div>
                </div>
                <div>
                    <div className="flex m-2"><FaRegClock className="my-2"/><p className="text-2xl mx-2">Business Model</p></div>
                       <div className="flex">
                        <p className="bg-gray-200 rounded-2xl px-3">Label 1</p>
                        <p className="bg-gray-200 rounded-2xl px-3 mx-3">Label 2</p>
                        <p className="bg-gray-200 rounded-2xl px-3">Label 3</p>
                    </div>
                </div>
                <div>
                    <div className="flex m-2"><FaChessKnight className="my-2"/><p className="text-2xl mx-2">TRL</p></div>
                       <div className="flex">
                        <p className="bg-gray-200 rounded-2xl px-3">{offData?.name}</p>
                    </div>
                </div>
                <div>
                    <div className="flex m-2"><FaDollarSign className="my-2"/><p className="text-2xl mx-2">Costs</p></div>
                    <div className="flex">
                        <p className="bg-gray-200 rounded-2xl px-3">&lt; 1000 €</p>
                    </div>
                </div>
             </div>
        </section>}
        </>
    )
}
export default Offer;