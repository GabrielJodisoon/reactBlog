
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
import { useState, useEffect } from 'react';


//header and footer
import Header from "pages/Header";
import Footer from "pages/Footer";

const Home = () => {

    //variaveis de estado
    const [main, setMain] = useState([]);
    const [mostseen, setMostseen] = useState([]);
    const [banner, setBanner] = useState([]);
    const [mostViewed, setMostViewed] = useState([]);


    //faca isso quando o componente montar
    useEffect(() => {

        // requisicao para posts com star = 5
        api.get('/posts?star=5&_sort=date&_limit=2')
            .then((response) => {
                setMain(response.data)
            })

        // requisicao para banner
        api.get('/posts?_sort=-date&_limit=1')
            .then((response) => {
                setBanner(response.data)
            })

        // requisicao para post mais vistos
        api.get('posts?_sort=views&_limit=3')
            .then((response) => {
                setMostseen(response.data)
            })


        // requisicao para recentes
        api.get('posts?_sort=-date&_limit=3')
            .then((response) => {
                setMostViewed(response.data);
            })

    }, [])




    return (
        <>

            <Header></Header>

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
                                return <Main key={item.id} content={item} />

                            })
                        }

                    </div>
                </div>
            </section>


            <div className='bg-section'></div>
            <section className="container">

                <h3 className='ml-2 mb-3'>Mais Vistos</h3>
                <div className='row'>
                    {
                        mostseen.map((item) => {
                            return < Card key={item.id} content={item} />
                        })
                    }
                </div>



            </section>


            <section>

                {
                    banner.map((item) => {

                        return <Banner key={item.id} content={item}></Banner>
                    })
                }




            </section>



            <section className="container ">
                <h3 className='ml-2 mb-3'>Posts recentes</h3>
                <div className='row'>
                    {
                        mostViewed.map((item) => {
                            return<Recent key={item.id} content={item}/>

                        } )
                    }
                 

                </div>



            </section>

            <Footer></Footer>
        </>
    );
}

export default Home;