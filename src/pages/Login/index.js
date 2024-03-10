


//header and footer
import Header from "pages/Header";
import Footer from "pages/Footer";

//images
import Logo from '../../svg/blog-logo2.svg'

const Login = () => {
    return (
        <>

            <Header />

            <section classNameName="container">
                <div className="row py-8">
                    <div className="grid-4 disappear"></div>
                    <div className="grid-4">
                        <div className="flex-center">
                            <img src={Logo} className="icon-l pt-2" alt="" />

                        </div>
                        <h5 className="text-center">Olá, faça o login para continuar.</h5>

                        <form>
                            <input type="text" className="mt-3" name="user" placeholder="Digite seu usuário" />
                            <input type="password" className="mt-2" name="password" placeholder="Digite sua senha" />
                            <button className="btn w-100 mt-4">Entrar</button>
                        </form>
                    </div>
                    <div className="grid-4 disappear"></div>
                </div>
            </section>

        </>
    )

}

export default Login;