import { Link } from "react-router-dom"

const LinkButton = (props) => {

    return <Link to={props.link} className='bg-cyan-500 p-1 rounded'>{props.children}</Link>
}

export default LinkButton