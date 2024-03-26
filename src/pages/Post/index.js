


//header and footer
import Header from "pages/Header";
import Footer from "pages/Footer";


//images
import IconStar from '../../svg/icon-star.svg'
import imgProfile from '../../profile/jodison.jpg'
import img5 from '../../img/05.png'


// useParams
import { useParams } from "react-router-dom";


//Hooks
import { useState, useEffect } from "react";


//Api
import api from "services/api";

const Post = () => {


    //variavel de estado
    const [post, setPost] = useState([]);
    const [user, setUser] = useState([]);

    const { idPost } = useParams();

    useEffect(() => {

        if (idPost) {
            api.get("/posts/" + idPost)
                .then((response) => {
                    setPost(response.data);

                    api.get("/user/" + response.data.id_user)
                    .then((response) => {
                        setUser(response.data);
                    })

                })

        }

    }, []);


    return (
        <>


            <Header />
            <section className="container">
                <h6 className="uppercase text-center color-primary">{post.category}</h6>
                <h3 className="text-center mt-1">{post.title}</h3>

                <div className="row mb-3">
                    <div className="grid-3 disappear"></div>
                    <div className="grid-6  mt-6 flex-center">
                        <div className="profile">
                            <img src={user.ImageProfile} className="profile-img" alt="" />
                        

                        </div>
                        <div className="ml-3">
                            <h6>{user.name} {user.surname}</h6>
                        </div>
                        <div className="color-gray ml-4">
                            <p>{post.date} - {post.duration}min</p>
                        </div>
                    </div>
                    <div className="grid-3 disappear "></div>
                </div>

                <div className="img-banner hidden">
                    <img src={post.imageUrl} alt="" />
                </div>


                <h4 className=" mt-3">{post.title}</h4>
                <p className="mt-1 mb-2">
                    {post.content}
                </p>

                <div className="row">

                    <div className="grid-2 disappear"></div>
                    <div className="grid-8 card flex mt-4">
                        <div className="profile-big grid-4 ">
                            <img src={user.ImageProfile} className="profile-img" alt="" />
                        </div>

                        <div className="ml-3 grid-8">
                            <h6 className="color-primary">{user.name} {user.surname}</h6>
                            <h7 className="color-white mb-1">@{user.user}</h7>
                            <p className="my-2">{user.description}</p>
                            <h7 className="color-primary">Ver perfil</h7>
                        </div>

                    </div>
                    <div className="grid-2 disappear"></div>

                </div>

            </section>
            <Footer />
        </>
    )

}

export default Post;