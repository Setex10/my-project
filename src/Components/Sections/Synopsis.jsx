import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageDisplay from "../UI/ImageDisplay";
import imageError from "../../Assets/img/error.webp"
import InformationAnime from "./InformationAnime";

const Synospsis = ({urlAPI}) => {
    const {id} = useParams()

    const [data, setData] = useState('')


    useEffect(() => {
        const FetchID = async () => {
            try{
                const data = await fetch(`${urlAPI}anime/${id}`)
                const resolveData = await data.json()
                const {title, synopsis, images, trailer, url, episodes, type, studios} = resolveData.data
                setData({title, synopsis, images: images.webp.large_image_url, trailer, url, episodes, type, studios})
            } catch {
                setData({title: "Error", synopsis: "No se ha encontrado la información",
                images: imageError, trailer: '', url: '', studios: '',
            })
            } 
        }
        FetchID()
    }, [])

    return (
        <section className='h-screen w-full flex justify-center relative'>
            <ImageDisplay src={data.images} className="w-full"/>
            <div className='bg-gradient-to-t from-blue-800 via-blue-600 h-screen w-full 
            absolute top-20 text-center text-white'>
                {typeof data === 'object' ? <InformationAnime information={data}/> 
                : <h1 className="text-4xl">Cargando...</h1>}
            </div>
            
        </section>
    )
}

export default Synospsis;