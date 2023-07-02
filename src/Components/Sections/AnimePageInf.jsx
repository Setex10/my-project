import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ImageDisplay from "../UI/ImageDisplay"
import InformationAnime from "./InformationAnime"

const AnimePageInf = ({urlAPI}) => {
    const {id} = useParams()

    const [data, setData] = useState('')

    const infortmation = async(id) => {
        try {
            const dataFetchAnime = await fetch(`${urlAPI}anime/${id}/full`),
                dataFetchAnimePictures = await fetch(`${urlAPI}anime/${id}/pictures`);

            const dataResolveJson = await dataFetchAnime.json(),
                dataResolveJsonPictures = await dataFetchAnimePictures.json();

            let {title, synopsis, images, episodes, type, studios, streaming} = dataResolveJson.data,
                pictures = dataResolveJsonPictures.data;

            if(studios.length === 0) {
                studios[0] = {name: 'desconocido'}
            }

            if(synopsis === null){
                synopsis = 'There is not'
            }

            setData({title, synopsis, 
                images, episodes, type, studios,
                streaming, pictures})
        } catch (error) {
            setData({title: "there is not anime", synopsis : '', error})
            console.log(data.error)
        }
    }

    useEffect(() => {
        infortmation(id)
    }, [])
    

    return (
        <section className="min-h-screen overflow-">
            {typeof data === 'string' ? <h1 className="text-4xl text-center mb-20 text-white">Cargando...</h1>
            : <>
            <div>
                <div className="bg-gradient-to-t from-blue-900 to-sky-900">
                    <div className="w-3/4 m-auto tablet:w-96 tablet:h-96">
                    <ImageDisplay className='w-full h-full m-auto tablet:object-contain' src={data.images.webp.large_image_url}
                    alt={data.title} />
                    </div>
                </div>
                <div className="flex flex-col tablet:flex-row w-full h-fit">
                    {<InformationAnime title={data.title} streaming={data.streaming} synopsis={data.synopsis} data={[ 
                    data.episodes, data.studios[0].name , data.type
                    ]}/>}
                    <div id="galerry" className="text-white p-3 flex flex-col justify-start space-y-2 h-1/4 tablet:w-2/4">
                        <h3 className="text-3xl font-semibold">Galerry</h3>
                            <div className="grid grid-cols-2 h-96 overflow-y-scroll">
                                {data.pictures.map((picture) => {
                                    return <ImageDisplay key={Math.random()} className='w-2/3 h-52 m-2 object-cover' src={picture.jpg.large_image_url} alt={data.title} />
                                })}
                                {data.pictures.length === 0 && <h3 className="text-3xl font-semibold">No hay galeria</h3>}
                            </div>
                    </div>
                </div>
                
            </div>
            </>
            }
        </section>
    )
}

export default AnimePageInf