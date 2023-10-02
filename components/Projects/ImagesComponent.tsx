import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function ImagesComponent({ images }: { images: string[] | undefined }) {
    const [indexImage, setIndexImage] = useState<number>(0)
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleChangeImage = (idx:number) => {
        setTimeout(() => {
            setIndexImage(idx)
        },30)
    }
    
    useEffect(() => {
        if (images) {
            const interval = setInterval(() => {
                (images.length - 1) > indexImage ? setIndexImage((prevState) => prevState + 1) : setIndexImage(0)
            }, 2500)
            return () => {
                clearInterval(interval)
            }
        }
    }, [images, indexImage])

    return (
        <div className="relative pb-[92%] tablet:pb-[39.25%]">
            <div className='flex flex-col tablet:flex-row absolute top-0 left-0 h-full w-[100%] mx-auto'>
                <div className='w-full my-3 laptop:my-0 tablet:mr-3 rounded-lg'>
                    <div className="rounded-lg">
                        {images && images[indexImage].includes("mobile") ? (
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
                        )}
                        <div className=" rounded-b-lg">
                            {images && <Image alt={images[indexImage]} src={`/images${images[indexImage]}`} width={1920} height={1280} className={`rounded-b-lg object-contain`} />}
                        </div>
                    </div>
                </div>
                <div className='mx-auto laptop:mx-0 w-[90%] tablet:w-[80%] laptop:w-[50%] tablet:my-auto'>
                    <div className='grid grid-cols-4 tablet:grid-cols-2 tablet:aspect-square'>
                        {
                            images?.map((image,idx) => (
                                <button onMouseEnter={() => handleChangeImage(idx)} key={image} className='mr-2 mb-1 aspect-square rounded-md bg-violet/25 overflow-hidden hover:brightness-125 block'>
                                    <Image alt='imgs' src={`/images${image}`} width={1280} height={720} className='object-cover min-h-full shadow-lg' />
                                </button>
                            ))
                        }
                        {
                            (images && images.length == 2) && (
                                <>
                                    <span className='mr-2 mb-1 aspect-square rounded-md bg-violet/25 overflow-hidden block'></span>
                                    <span className='mr-2 mb-1 aspect-square rounded-md bg-violet/25 overflow-hidden block'></span>
                                </>
                            )
                        }
                        {
                            (images && images.length == 3) && <span className='mr-2 mb-1 aspect-square rounded-md bg-violet/25 overflow-hidden block'></span>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImagesComponent