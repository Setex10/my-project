const Streaming = ({services}) => {

    return (
        <div>
            <h3 className='text-3xl font-semibold'>Where can i see it?</h3>
            { services === undefined || services.length === 0
            ? <p>We cann't to find infortmation about it</p>
            : <div className="InformationAnime text-2xl">
                {services.map((service) => {
                    return <a key={Math.random()} className="bg-sky-900 p-1 rounded-sm" href={service.url}>{service.name}</a>
                })}
                </div>}
        </div>
    )
}

export default Streaming