import {AiFillPlaySquare} from "react-icons/ai"
import {BsFillCollectionPlayFill} from "react-icons/bs";
import {FiMonitor} from "react-icons/fi";
import {BiMovie} from "react-icons/bi"

const InformationAnime = ({information}) => {

    const {title, episodes, type, studios, trailer} = information;

    return (
        <div className="absolute top-40 w-full flex flex-col space-y-5">
                    <h1 className="ml-5 font-semibold text-left text-3xl">{title}</h1>
                    <div className='text-left ml-5 flex flex-wrap InformationAnime'>
                        <p>{episodes} Episodios <BsFillCollectionPlayFill/></p>
                        <p>{type} <FiMonitor/></p>
                        <p>{studios.name || 'Desconocido'} <BiMovie /></p>
                    </div>
                    <a href={trailer.url} className="text-left flex items-center ml-5 
                    bg-sky-50 hover:bg-sky-200 text-neutral-900 font-semibold w-fit p-2 rounded-sm text-2xl"> Ver trailer 
                    <AiFillPlaySquare className="ml-3"/>    </a> 
                </div>
    )
}

export default InformationAnime