const ImageDisplay = (props) => {

    return <img src={props.src} alt={props.alt}
    className={`${props.className} object-cover rounded-sm`}/>
}

export default ImageDisplay