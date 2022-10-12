import { Link } from "react-router-dom"

const LinkButton = (props) => {

    return <Link to={props.link} className='bg-sky-700
    rounded transition-colors hover:bg-yellow-500  p-6 pt-0 pb-0'>{props.children}</Link>
}

export default LinkButton