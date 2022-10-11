import { Link } from "react-router-dom"

const LinkButton = (props) => {

    return <Link to={props.link} className=''>{props.children}</Link>
}

export default LinkButton