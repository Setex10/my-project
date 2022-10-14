import { Fragment } from "react";
import Carrusel from "./Sections/Carrusel";
import Home from "./Sections/Home";

const Content = ({url}) => {

    const listFetch = [
        { category: 'Animes proximos a salir', url: `${url}seasons/upcoming`, id: Math.random()},
        { category: 'Mejor calificados', url: `${url}anime?min_score=9`, id: Math.random()},
        { category: 'Ovas', url: `${url}anime?type=ova`, id: Math.random()}
    ]

    return (
        <Fragment>
            <Home />
            {
                listFetch.map((li) => {
                    return <Carrusel category={li.category} api={li.url} key={li.id}/>;
                })
            }
        </Fragment>
    )
}

export default Content;