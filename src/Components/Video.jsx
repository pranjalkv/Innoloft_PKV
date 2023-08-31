
function Video({vidData,isEdit})
{
    function getId(vid)
    {
        let s=vid?.length;
        let n=vid?.indexOf("=");
        let videoId=vid?.slice(n+1,s)
        return videoId;
    }


    return (
        <>
    {!isEdit && <section className="bg-white rounded-lg my-2 lg:p-3 p-1 w-[98%] mx-auto">
        <p className="text-2xl lg:my-2 my-1 font-semibold">Video</p>
        <div className="lg:w-3/4 w-full mx-auto">
            <iframe className="w-full aspect-video max-w-2xl mx-auto"
            src={`https://www.youtube.com/embed/${getId(vidData)}`}
            allow="accelerometer;
            clipboard-write; encrypted-media; web-share" allowFullScreen></iframe>
        </div>         
    </section>}
    </>
    )
}
export default Video;