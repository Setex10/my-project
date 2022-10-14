const Description = (props) => {

    return <div className={`${props.className} rounded-sm bg-gradient-to-t from-blue-900 to-sky-900 z-10 w-full tablet:w-2/4 p-2 text-center break-words font-semibold 
    flex flex-col justify-center space-y-4 text-cyan-50`}>
        {props.children}
    </div>
}

export default Description;