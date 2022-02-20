const MercuryCore = () => {
    return (<>
        <div className="inside radius-right">
            <div className="dark-blue radius-right">
                <div className="first-layer radius-right">
                    <div className="core radius-right"></div>
                </div>
            </div>
        </div>

        <style jsx>{`
            .radius-right{
                border-top-right-radius: 200px;
                border-bottom-right-radius: 200px;
                height: 95%;
                width: 95%;
                display: flex;
                align-items: center;          
            }

            .inside{
                width: 50%;
                height: 100%;
                top: 0;
                right: 0;
                position: absolute;
                z-index: 2;
            }
            .dark-blue{
                background-color: #4F1D0F;
            }

            .first-layer{
                background-color: #952524;
            }

            .core{
                background-color: #FFF1AA;
                height: 85%;
                width: 85%;
                animation: core 1.5s ease-in infinite;
            }
            

            @keyframes core{
                50%{
                    width: 84%;
                    height: 84%;
                    border-top-right-radius: 195px;
                    border-bottom-right-radius: 200px;
                }
                70%{
                    
                    border-bottom-right-radius: 195px;
                    border-top-right-radius: 200px;
                }
            }
        `}</style>
    </>);
}

export default MercuryCore;
