
//header and footer
import Header from "pages/Header";
import Footer from "pages/Footer";

//images
import LogoBlog from '../../svg/blog.svg';

const About = () => {
    return (
        <>
            <Header />

            <section className="container">
                <div className="row">
                    <div className="grid-6">
                        <h1>Blog<span>.</span></h1>
                        <p className="mt-1">
                            O Blog é um projeto desenvolvido em react js do curso FrontPush.
                            Clique abaixo para saber mais informações.
                        </p>
                        <a href="#" className="btn mt-4">Saber mais...</a>
                    </div>
                    <div className="grid-6">
                        <img src={LogoBlog} className="ilustration" alt="" />
                    </div>
                </div>

            </section>
            <Footer />
        </>
    )

}

export default About;