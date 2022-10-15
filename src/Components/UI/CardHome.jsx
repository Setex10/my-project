const CardHome = (props) => {

    return <div className={`${props.className} bg-gradient-to-t from-blue-900 to-sky-900 flex flex-col 
    justify-center items-center w-full pb-10 tablet:pt-8 tablet:flex-row min-h-screen h-screen pt-10
    space-y-4`}
    >{props.children}</div>
}

export default CardHome;