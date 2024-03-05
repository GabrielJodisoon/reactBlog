


const Recent = () => {
    return (
        <>
            <div className="grid-4 card">
                <div className="grid-3">
                    <h6 className="color-gray text-center bb-black pb-2">FEV</h6>
                    <h4 className="text-center color-primary pt-2">27</h4>
                </div>
                <div className="grid-9">
                    <h6 className="color-primary uppercase">TECNOLOGIA</h6>
                    <h5>O que tem de novo no ps5?</h5>
                    <p className="my-1">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad vero natus excepturi possimus!
                    </p>
                    <div className="flex-start-row">
                        <div className="profile">
                            <img src="profile/jodison.jpg" className="profile-img" alt="foto perfil img" />
                        </div>
                        <div className="ml-1 pt-1">
                            <h6 className="color-primary">Gabriel Jodison</h6>
                            <h6 className="color-gray">@jodison</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Recent;