

//Link
import { Link } from 'react-router-dom'

const Card = ({ content }) => {


    return (
        <>
            <div className="grid-4 card p-0">
                <div className="thumb hidden">
                    <Link to={"/post/" + content.id}>
                        <img src={content.imageUrl} alt="post mais visto 1" />
                    </Link>
                </div>
                <div className="mt-2 px-2">
                    <h6 className="color-gray">{content.date}</h6>
                    <h6 className="uppercase color-primary">{content.category}</h6>

                    <Link to={"/post/" + content.id}>
                        <h4>{content.title}</h4>
                    </Link>
                    <p className="mt-1">{content.resume}

                    </p>
                    <div className="my-3">
                        <Link to={"/post/" + content.id} className="link color-primary ">Ler mais...</Link>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Card;