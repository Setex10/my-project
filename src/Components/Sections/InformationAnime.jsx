import {FiMonitor} from "react-icons/fi"
import {BsCollectionPlayFill} from "react-icons/bs"
import {BiMovie} from "react-icons/bi"
import Synopsis from "./Synopsis"
import Streaming from "./Streaming"

const InformationAnime = ({data, title, synopsis, streaming}) => {
    const icons = [<BsCollectionPlayFill />, <BiMovie />, <FiMonitor />]

    return (
        <div className="text-white p-3 flex flex-col space-y-2 h-2/4 item-left tablet:w-2/4">
            <h1 className="text-3xl font-semibold">{title}</h1>
            <div className="InformationAnime">
                {data.map((element, index) => {
                    return <p key={Math.random()}>{element ?? "Unknow"} {icons[index]}</p>
                })}
            </div>
            <Synopsis synopsis={synopsis}/>
            <Streaming services={streaming} />
        </div>
    )
}

export default InformationAnime