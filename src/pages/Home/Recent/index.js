
//Hooks
import { useEffect, useState } from "react";


//API
import api from 'services/api';


//Link
import {Link} from 'react-router-dom';


const Recent = ({content}) => {


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
            <div className="grid-4 card">
                <div className="grid-3">
                    <h6 className="color-gray text-center bb-black pb-2">{content.date}</h6>
                    <h4 className="text-center color-primary pt-2">{content.date}</h4>
                </div>
                <div className="grid-9">
                 <h6 className="color-primary uppercase">{content.category}</h6>
                 <Link to={"/post/" + content.id}> <h5>{content.title}</h5></Link>
                    <p className="my-1">{content.resume}</p>
                    <div className="flex-start-row">
                        <div className="profile">
                            <img src={user.ImageProfile} className="profile-img" alt="foto perfil img" />
                        </div>
                        <div className="ml-1 pt-1">
                            <h6 className="color-primary">{user.name} {user.surname}</h6>
                            <h6 className="color-gray">@{user.user}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


{/* <Link to={"/post" + content.id}></Link> */}


export default Recent;