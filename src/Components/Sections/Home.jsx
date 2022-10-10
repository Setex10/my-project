import CardHome from '../UI/CardHome';
import image from '../../Assets/img/99889l.jpg'
import ImageDisplay from '../UI/ImageDisplay';
import Description from '../UI/Description';

const Home = () => {

    return (
        <CardHome className='h-screen pt-24'>
            <ImageDisplay className='w-2/4 tablet:w-1/4 h-3/4' src={image} alt='Kimetsu no Yaiba' />
            <Description>
                <h1 className='text-4xl tablet:text-6xl'>Kimetsu No  Yaiba</h1>
                <p className="text-2xl tablet:text-4xl">Busca tu anime favorito, totalemnte 
                <span className="text-cyan-400"> GRATIS </span>
                y de forma rapida</p>
            </Description>
        </CardHome>
    )
}

export default Home;