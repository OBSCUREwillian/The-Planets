
const Hamburguer = () => {
    return(<>
        <div id="hamburguer">
            <span className="hamburguer-line"></span>
        </div>
        
        
        <style jsx>{`
            #hamburguer{
                width: 24px;
                height: 23px;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            /* Linhas Hamburguer */
            .hamburguer-line{
                position: relative;
                display: block;
                background-color: #fff;
                height: 2px;
            }


            .hamburguer-line::after, 
            .hamburguer-line::before{
                background: #fff;
                display: block;
                content: '';
                width: 100%;
                height: 100%;
                position: absolute;
            }

            .hamburguer-line::after{
                bottom: -7.1px;
            }

            .hamburguer-line::before{
                top: -7.1px;
            }
        
        `}</style>
    
    </>)
}

export default Hamburguer;