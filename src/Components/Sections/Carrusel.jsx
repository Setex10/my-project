import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import 'swiper/css';
import Led from '../UI/Led';
import { Link } from 'react-router-dom';
import imageError from "../../Assets/img/error.webp"

const Carrusel =  (props) => {
    const [data, setData] = useState([
        {
            title: 'Cargando',
            images: {
                webp : {
                    large_image_url: ""
                }
            }
        }
    ])


    useEffect(() => {
        const FetchAPI = async () => {
            try{
            const data = await fetch(`${props.api}`)
            const resolveData = await data.json()
            setData(resolveData.data)
            } catch(errors){
                setData([
                    { title: errors.message, images: {
                        webp : {
                            large_image_url : imageError
                        }
                    }}
                ])
            }
        }
        FetchAPI()
    }, [props.api])


    return (
        <div className='text-white flex flex-col justify-center items-center'>
            <h1 className='text-3xl text-left ml-10 p-4 font-semibold'>{props.category}</h1>
            <Led color='bg-sky-500'/>
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
        {
            data.map((d) => {
                return <SwiperSlide key={Math.random()} className='
                h-20 p-4 flex flex-col justify-center items-center relative'>
                    <Link to={`/animes/${d.mal_id}`} >
                        <img className='w-96 h-60 object-cover' src={d.images.webp.large_image_url} 
                        alt={d.title} />
                    </Link>
                        <h2 className='opacity-0 hover:opacity-100 transition-all text-slate-900 font-semibold
                        p-3 absolute bottom-0 bg-white w-52'>{d.title}</h2>
                </SwiperSlide>
            })
        }
        </Swiper>
        </div>
    );
  };

export default Carrusel;