const InformationAnime = ({information}) => {

    return <div className="text-left ml-5 flex space-x-5 wrapper ">
        {information.map((inf) => {
            return <p className="flex items-center">{inf}</p>
        })}
    </div>
}

export default InformationAnime