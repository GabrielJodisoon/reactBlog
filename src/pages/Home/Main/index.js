

//hooks
import { useState, useEffect } from 'react';

//api
import api from 'services/api';

//Link
import {Link} from 'react-router-dom';

const Main = ({ content }) => {

    const [user, setUser] = useState([]);

    useEffect(() => {

        if (content) {
            api.get('/user/' + content.id_user)
                .then((response) => {
                    setUser(response.data);
                })
        }
    }, [])


    return (
        <>
            <section className="py-3">
                <div className="row">
                    <div className="">
                        <div className="bb-black pb-5">
                            <h6 className="color-gray">{content.date}</h6>
                            <h6 className="uppercase color-primary">{content.category}</h6>

                            <Link to={"/post/" + content.id}><h4>{content.title}</h4> </Link>
                            <p className="mt-1">{content.resume}
                            </p>
                            <div className="flex-start-row mt-1">
                                <div className="profile">
                                    <img src={user.ImageProfile} className="profile-img" alt="foto perfil" />
                                </div>
                                <div className="ml-1">
                                    <h6 className="color-primary">{user.name} {user.surname}</h6>
                                    <h6 className="color-gray">@{user.user}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Main;