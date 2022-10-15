import CardHome from '../UI/CardHome';
import image from '../../Assets/img/99889l.jpg'
import ImageDisplay from '../UI/ImageDisplay';
import Description from '../UI/Description';

const Home = () => {

    return (
        <CardHome>
            <ImageDisplay className='w-2/4 tablet:w-2/5 laptop:w-1/4 h-3/4' src={image} alt='Kimetsu no Yaiba' />
            <div className='text-white font-semibold text-center tablet:w-2/4 flex flex-col 
            justify-center space-x-2 tablet:space-y-5'>
                <h1 className='text-4xl tablet:text-6xl'>Empieza a indagar</h1>
                <p className="text-2xl tablet:text-4xl">Busca tu anime favorito, totalmente 
                <span className="text-cyan-400"> GRATIS </span>
                y de forma rapida</p>
            </div>
        </CardHome>
    )
}

export default Home;