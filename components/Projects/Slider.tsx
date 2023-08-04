import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Zoom, Autoplay,EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom"
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";


function Slider({ images, data, imagesm}:{images:string[] | undefined, data:string[] | undefined, imagesm:string[] | undefined}) {
    
    return (
        <>
            <Swiper
                pagination={{
                    clickable: true,
                }}
                
                spaceBetween={20}
                zoom={true}
                modules={[Autoplay,Pagination, Zoom]}
                className="dark:bg-richblack !hidden tablet:!block"
            >
                {
                    data != undefined && images != undefined ? (images.map((s) => <SwiperSlide data-hash={(s)} key={s} zoom={true}><Image src={`/images${s}`} width="1280" height="720" alt='swipeimage' className="transitionshort"/></SwiperSlide>)) : null
                }
            </Swiper>
            <Swiper
                pagination={{
                    clickable: true,
                }}
                zoom={true}
                modules={[Pagination, Autoplay, Zoom]}
                className="dark:bg-richblack tablet:!hidden"
            >
                {
                    data != undefined && imagesm != undefined ? (imagesm.map((s) => <SwiperSlide data-hash={(s)} key={s} zoom={true}><Image src={`/images${s}`} width="1024" height="1280" alt='swipeimage' className="transitionshort" /></SwiperSlide>)) : null
                }
            </Swiper>
        </>
    )
}

export default Slider