import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardHome from "../UI/CardHome";
import Description from "../UI/Description";
import ImageDisplay from "../UI/ImageDisplay";
import imageError from "../../Assets/img/error.webp"

const Synospsis = ({urlAPI}) => {
    const {id} = useParams()

    const [data, setData] = useState({
        title: 'Cargando', synopsis: 'Espere mientras encontramos la información',
        images: {
            webp: {
                large_image_url: ''
            }
        }
    })

    const lengthDescriptionMax = 200;

    useEffect(() => {
        const FetchID = async () => {
            try{
                const data = await fetch(`${urlAPI}anime/${id}`)
            const resolveData = await data.json()
            const {title, synopsis, images} = resolveData.data
            setData({title, synopsis, images: images.webp.large_image_url})
            } catch {
                setData({title: "Error", synopsis: "No se ha encontrado la información",
                images: imageError
            })
            } 
        }
        FetchID()
    }, [])

    return (
        <CardHome className='h-full pt-20 space-x-5'>
            <ImageDisplay className='w-screen movilL:w-2/4 tablet:w-1/4 h-3/4' src={data.images} alt={data.title} />
            <Description>
                <h1 className="text-4xl">{data.title}</h1>
                <p className="text-2xl">{data.synopsis > lengthDescriptionMax ?
                data.synopsis : data.synopsis.split(".", 3)}</p>
            </Description>
        </CardHome>
    )
}

export default Synospsis;