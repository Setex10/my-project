const Description = (props) => {

    return <div className={`${props.className} w-3/4 tablet:w-2/4 p-2 text-center break-words font-semibold 
    flex flex-col justify-center space-y-4 text-cyan-50`}>
        {props.children}
    </div>
}

export default Description;