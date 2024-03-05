
import iconStar from 'svg/icon-star.svg';


//components
import Hero from './Hero'
import Banner from './Banner'
import Card from './Card'
import Main from './Main'
import Recent from './Recent'


//API
import api from 'services/api';


//HOOKS
import { useState, useEffect} from 'react';


const Home = () => {

    //variaveis de estado
    const[main, setMain] = useState([]);
    const[mostseen, setMostseen] = useState([]);
    const[banner, setBanner] = useState([]);


    //faca isso quando o componente montar
    useEffect(() => {

        // requisicao para posts com star = 5
        api.get('/posts?star=5&_sort=date&_limit=2')
        .then((response) => {
            setMain(response.data)
        })

        // requisicao para banner
        api.get('/posts?_sort=date&_order=desc&_limit=1')
        .then((response) =>{
            setBanner(response.data)
        })

        // requisicao para post mais vistos
        api.get('posts?_limit=3')
        .then((response) =>{
            setMostseen(response.data)
        })

    }, [])

    


    return (
        <>
            <Hero />

            <section className="container">
                <div className="row">
                    <div className="grid-5 pt-5 pb-3">

                        <img src={iconStar} className="icon-l" alt="estrela blog" />
                        <h3 className="mt-2">Os melhores e mais bem votados posts do mês</h3>

                        <p className="mt-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Recusandae magnam mollitia quibusdam odio veritatis architecto

                        </p>
                    </div>
                    <div className="grid-7">

                       {
                        main.map((item) => {
                            return <Main key={item.id} content={item}/>

                        })
                       }

                    </div>
                </div>
            </section>


            <div className='bg-section'></div>
            <section className="container">

                <h3 className='ml-2 mb-3'>Mais Vistos</h3>
                <div className='row'>
                    <Card />
                    <Card />
                    <Card />
                </div>



            </section>


            <Banner />


            <section className="container ">
                <h3 className='ml-2 mb-3'>Posts recentes</h3>
                <div>
                    <Recent />
                    <Recent />
                    <Recent />

                </div>



            </section>
        </>
    );
}

export default Home;