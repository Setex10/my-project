import { useState } from "react"

const Synopsis = ({synopsis}) => {
    const [show, setShow] = useState(false)

    const showMore = () => {
        setShow(!show)
    }

    return (
        <div>
            <h3 className="text-3xl font-semibold">Synopsis</h3>
            <div className="mb-5">
                <article className={`${show && "overflow-y-auto"} h-96 tablet:text-2xl tablet:w-3/4 mt-1`}>
                    {show ? synopsis : synopsis.split(".", 2)[0] + "."}
                </article>
            </div>
            <button onClick={showMore} className="bg-white text-slate-900 p-1 rounded-sm 
                font-semibold">Show more</button>
        </div>
    )
}

export default Synopsis