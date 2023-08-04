export default function Video({videolink}:any) {
    return (
        <div className="bg-blancod dark:bg-negrodd dark:bg-opacity-0">
            <div className="relative pb-[60%] tablet:pb-[57.25%] transicioncorta ">
                <iframe className="absolute top-0 left-0 w-full h-full" src={`https://www.youtube.com/embed/${videolink}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"></iframe>
            </div>
        </div>
    )
}