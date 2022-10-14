import { Swiper } from "swiper/react";


const SwiperContent = (props) => {

    return (
        <Swiper 
        spaceBetween={20}
        breakpoints={
            {
                320 : {
                    slidesPerView: 1
                },
                720 : {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 4,
                }
            }
        }
        className='w-3/4 flex flex-col justify-content text-center'
        >
            {props.children}
        </Swiper >
    )
} 

export default SwiperContent;