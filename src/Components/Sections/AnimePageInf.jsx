import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ImageDisplay from "../UI/ImageDisplay"
import InformationAnime from "./InformationAnime"

const AnimePageInf = ({urlAPI}) => {
    const {id} = useParams()

    const [data, setData] = useState('')


    const infortmation = async(id) => {
        try {
            const dataFetch = await fetch(`${urlAPI}anime/${id}/full`)
            const dataResolveJson = await dataFetch.json()
            let {title, synopsis, images, episodes, type, studios, streaming} = dataResolveJson.data

            if(studios.length === 0) {
                studios[0] = {name: 'desconocido'}
            }

            if(synopsis === null){
                synopsis = 'There is not'
            }

            setData({title, synopsis, 
                images, episodes, type, studios,
                streaming})
        } catch (error) {
            setData({title: "there is not anime", synopsis : '', error})
            console.log(data.error)
        }
    }

    useEffect(() => {
        infortmation(id)
    }, [])
    

    return (
        
        <section>
            {typeof data === 'string' ? <h1 className="text-4xl text-center mb-20 text-white">Cargando...</h1>
            : <div>
                <div className="bg-gradient-to-t from-blue-900 to-sky-900">
                    <div className="w-3/4 h-96 m-auto tablet:w-96 tablet:h-80">
                    <ImageDisplay className='w-full h-full m-auto tablet:object-contain' src={data.images.webp.large_image_url}
                    alt={data.title} />
                    </div>
                    
                </div>
                {<InformationAnime title={data.title} streaming={data.streaming} synopsis={data.synopsis} data={[ 
                    data.episodes, data.studios[0].name , data.type
                ]}/>}
            </div>
            }
        </section>
    )
}

export default AnimePageInf