import { Fragment } from "react";
import Carrusel from "./Sections/Carrusel";
import Home from "./Sections/Home";

const Content = ({url}) => {

    const listFetch = [
        { category: 'Animes proximos a salir', url: `${url}seasons/upcoming`},
        { category: 'Mejor calificados', url: `${url}anime?min_score=9`},
        { category: 'Ovas', url: `${url}anime?type=ova`}
    ]

    return (
        <Fragment>
            <Home />
            {
                listFetch.map((li) => {
                    return <Carrusel category={li.category} api={li.url} />;
                })
            }
        </Fragment>
    )
}

export default Content;