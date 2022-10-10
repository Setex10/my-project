import { useRef, useState } from "react";
import Carrusel from "./Carrusel";

const Search = ({urlAPI}) => {
    const [valueUrl, setValueUrl] = useState('')
    const [isValid, setIsValid] = useState(false)
    const input = useRef()

    const submitHanlder = (event) => {
        event.preventDefault();
        const inputValue = input.current.value
        if(!inputValue.trim().length > 0){
            setIsValid(true)
            return
        }
        setIsValid(false)
        setValueUrl(`${urlAPI}anime?q=${input.current.value}}`)
    }



    return (
        <div className='bg-gradient-to-t from-blue-900 to-sky-900 h-screen p-20'>
            <form onSubmit={submitHanlder} className='flex 
            flex-col justify-center items-center text-left'>
                <label className="text-3xl text-white font-semibold">Buscar</label>
                <input className={`${isValid && 'bg-red-700'} w-4/4 tablet:w-2/4 p-2 outline-none`} 
                type="text" placeholder={`${isValid ? 
                'Ingresa un nombre valido'
                : 'Ingresa un nombre'
                }`} name="name" ref={input}/>
            </form>
            {valueUrl && <Carrusel gategory="Esto es lo que encontramos" api={valueUrl}/>}
        </div>
    )
}

export default Search;