import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function ImagesComponent({ images }: { images: string[] | undefined }) {
    const [indexImage, setIndexImage] = useState<number>(0)
    const [indexNextImage, setIndexNextImage] = useState<number>(0)
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isCooldown, setCooldown] = useState(false);

    const handleChangeImage = (idx: number) => {
        if (!isCooldown) {
            // Execute your logic here
            setIndexImage(indexNextImage == 0 ? 0 : indexNextImage)
            setIndexNextImage(idx)
            setImageLoaded(true)
            setTimeout(() => {
                setImageLoaded(false)
                setIndexImage(idx)
            }, 150)
            // Set cooldown to true
            setCooldown(true);

            // Set a timeout to reset the cooldown after a certain time (e.g., 2 seconds)
            setTimeout(() => {
                setCooldown(false);
            }, 200); // Adjust the time as needed
        }
    }


    useEffect(() => {
        if (images) {
            const interval = setInterval(() => {
                if ((images.length - 1) == indexImage){
                    setIndexNextImage(0)
                } else {
                    setIndexNextImage(indexImage + 1)
                }
                setImageLoaded(true)
                setTimeout(() => {
                    setImageLoaded(false);
                    if((images.length - 1) > indexImage){
                        setIndexImage((prevState) => prevState + 1) 
                    } else {
                        setIndexImage(0);
                    } 
                },150)
                
            }, 3500)
            return () => {
                clearInterval(interval)
            }
        }
    }, [images, indexImage])

    return (
        <div className="relative pb-[81%] laptop:pb-[50.25%]">
            <div className='flex flex-col laptop:flex-row tablet:my-auto absolute top-0 left-0 h-full w-[100%] mx-auto'>
                <div className='w-full laptop:my-auto laptop:mr-3 rounded-lg'>
                    <div className="rounded-lg">
                        {/* {images && images[indexImage].includes("mobile") ? (
                            <div className="w-full h-7 tablet:h-2 rounded-t-lg bg-richblack/0 flex justify-start items-center space-x-1.5 px-3">
                                <span className="w-3 h-3 rounded-full "></span>
                                <span className="w-3 h-3 rounded-full "></span>
                                <span className="w-3 h-3 rounded-full "></span>
                            </div>
                        ) : (
                            <div className="w-full h-7 rounded-t-lg bg-richblack  flex justify-start items-center space-x-1.5 px-3">
                                <span className="w-3 h-3 rounded-full bg-cerise"></span>
                                <span className="w-3 h-3 rounded-full bg-violet"></span>
                                <span className="w-3 h-3 rounded-full bg-ocre"></span>
                            </div>
                        )} */}
                        <div className="relative h-full aspect-video rounded-lg">
                            {images && <Image alt={images[indexImage]} src={`/images${images[indexImage]}`} width={1920} height={1280} className={`absolute top-0 left-0 w-full  rounded-lg object-cover aspect-video  transition-opacity opacity-100 ease-in-out ${imageLoaded ? 'opacity-0' : 'opacity-100'} `} />}
                            {images && <Image alt={images[indexNextImage]} src={`/images${images[indexNextImage]}`} width={1920} height={1280} className={`absolute top-0 left-0  w-full  rounded-lg object-cover aspect-video transition-opacity ease-in-out ${imageLoaded ? 'opacity-100' : 'opacity-0'}`} />}
                        </div>
                    </div>
                </div>
                <div className='laptop:h-[100%] laptop:mx-0 w-[100%] laptop:w-[12.7%] '>
                    <div className='grid grid-cols-4 laptop:grid-cols-1 place-content-around laptop:place-content-center h-full'>
                        {
                            images && images?.map((image,idx) => (
                                <button onClick={() => handleChangeImage(idx)} onMouseEnter={() => handleChangeImage(idx)} key={image} className='mx-[0.2em] laptop:mx-0 my-1 aspect-square rounded-md bg-violet/5 overflow-hidden hover:brightness-125 block'>
                                    <Image alt='imgs' src={`/images${image}`} width={1280} height={720} className='object-cover min-h-full shadow-lg' />
                                </button>
                            ))
                        }
                        {
                            (images && images.length == 2) && (
                                <>
                                    <span className='mx-[0.2em] laptop:mx-0 my-1 aspect-square rounded-md bg-violet/5 overflow-hidden block'></span>
                                    <span className='mx-[0.2em] laptop:mx-0 my-1 aspect-square rounded-md bg-violet/5 overflow-hidden block'></span>
                                </>
                            )
                        }
                        {
                            (images && images.length == 3) && <span className='mx-[0.2em] laptop:mx-0 my-1 aspect-square rounded-md bg-violet/5 overflow-hidden block'></span>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImagesComponent