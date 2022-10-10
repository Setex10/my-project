
import LinkButton from "../UI/LinkButton";


const Menu = (props) => {

    return(
        <header className='bg-slate-900 w-full fixed top-0 p-4 z-50'>
            <nav>
                <ul className='text-cyan-100 text-2xl text-right flex justify-between items-center'>
                    <li><LinkButton link=''>Home</LinkButton></li>
                    <li><LinkButton link='/search'>Search</LinkButton></li>
                </ul>
            </nav>
        </header>
    )
}


export default Menu;