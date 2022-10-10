const ImageDisplay = (props) => {

    return <img src={props.src} alt={props.alt}
    className={`${props.className} shadow-md shadow-black object-cover rounded`}/>
}

export default ImageDisplay