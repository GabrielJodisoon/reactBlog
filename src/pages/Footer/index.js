import iconFace from 'svg/icon-facebook.svg';
import iconYoutube from 'svg/icon-youtube.svg';
import iconTwitter from 'svg/icon-twitter.svg';
import iconInstagram from 'svg/icon-instagram.svg';
import blogLogo2 from 'svg/blog-logo2.svg';


const Footer = () => {
    return (
        <>
            <footer className="bg-section ">
                <div className="container ">
                    <div className="row flex-center ">
                        <img src={blogLogo2} className="mb-3 icon" alt="logo blog footer"/>
                    </div>
                    <div className="row">
                        <div className="grid-3 ">
                            <h4>Posts</h4>
                            <div className="flex-start-column mt-2 ">
                                <a href="#" className="color-gray link-footer">Mais vistos</a>
                                <a href="#" className="color-gray link-footer">Mais comentados</a>
                                <a href="#" className="color-gray link-footer">Mais populares</a>
                                <a href="#" className="color-gray link-footer">Mais recentes</a>

                            </div>
                        </div>
                        <div className="grid-3 ">
                            <h4>Categorias</h4>
                            <div className="flex-start-column mt-2 ">
                                <a href="#" className="color-gray link-footer">Tecnologia</a>
                                <a href="#" className="color-gray link-footer">Games</a>
                                <a href="#" className="color-gray link-footer">Fotografia</a>
                                <a href="#" className="color-gray link-footer">Cinema</a>

                            </div>

                        </div>
                        <div className="grid-6 ">
                            <h4 className="">Quer ser avisado dos novos posts do blog?</h4>
                            <p className="color-gray mt-2">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Voluptatibus dolorum unde cumque sint explicabo obcaecati
                            </p>
                            <div className="flex mt-3">
                                <input type="email" placeholder="Digite seu e-mail aqui" className="" />
                                <button className="btn ml-4">Cadastrar</button>
                            </div>

                        </div>
                    </div>

                    <div className="row bt-black mt-4">
                        <div className="grid-6 mt-4">
                            <p className="color-gray uppercase">2024 | Todos os direitos reservados</p>

                        </div>
                        <div className="grid-6 mt-3 flex-center">
                            <a href="#"><img src={iconFace} className="icon-s mx-2" alt="facebook"/></a>
                            <a href="#"><img src={iconInstagram} className="icon-s mx-2" alt="instagram"/></a>
                            <a href="#"><img src={iconYoutube} className="icon-s mx-2" alt="youtube"/></a>
                            <a href="#"><img src={iconTwitter} className="icon-s mx-2" alt="x"/></a>


                        </div>
                    </div>
                </div>





            </footer>
        </>
    );
}

export default Footer;