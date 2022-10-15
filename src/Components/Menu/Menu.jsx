
import { Fragment } from "react";
import LinkButton from "../UI/LinkButton";


const Menu = (props) => {

    return(
        <Fragment>
        <div className="bg-black h-10 relative"></div>
        <header className='bg-slate-900 w-full fixed top-0 p-1 z-50'>
            <nav>
                <ul className='text-cyan-100 text-2xl text-right flex justify-around items-center'>
                    <li><LinkButton link='my-project'>Home</LinkButton></li>
                    <li><LinkButton link='/search'>Search</LinkButton></li>
                </ul>
            </nav>
        </header>
        </Fragment>
    )
}


export default Menu;