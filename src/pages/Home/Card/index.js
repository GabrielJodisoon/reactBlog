



const Card = ( ) => {

    return(
        <>
          <div className="grid-4 card p-0">
                    <div className="thumb hidden">
                        <a href="">
                            {/* <img src="img/01.png" alt="post mais visto 1"/> */}
                        </a>
                    </div>
                    <div className="mt-2 px-2">
                        <h6 className="color-gray">27 FEV 2024</h6>
                        <h6 className="uppercase color-primary">Tecnologia</h6>

                        <h4>O que esperar do cinema em 2024?</h4>
                        <p className="mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Sed natus animi sit sequi reiciendis id quo libero, rem
                         
                        </p>
                        <div className="my-3">
                            <a href="" className="link color-primary ">Ler mais...</a>

                        </div>

                    </div>
                </div>
        </>
    )
}

export default Card;