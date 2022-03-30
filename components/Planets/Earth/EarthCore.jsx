const EarthCore = () => {
    return (<>
        <div className="inside radius-right">
            <div className="dark-blue radius-right">
                <div className="first-layer radius-right">
                    <div className="second-layer radius-right">
                        <div className="third-layer radius-right">
                            <div className="core radius-right"></div>
                        </div>
                    </div>
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
            }
            .dark-blue{
                background-color: #2F2A7A;
            }
            .first-layer{
                background-color: #952524;
            }
            .second-layer{
                background-color: #E1592F;
                height: 85%;
                width: 85%;
                animation: secondLayer 1.5s ease-in infinite;

            }
            .third-layer{
                background-color: #F69135;
                height: 60%;
                width: 60%;
                animation: thirdLayer 0.9s ease-in-out infinite;
            }
            .core{
                background-color: #FFF1AA;
                height: 45%;
                width: 45%;
                animation: core 1s ease-in infinite;
            }


            @keyframes core{
                50%{
                    height: 44%;
                    width: 44%;
                }
            }

            @keyframes thirdLayer{
                50%{
                    height: 59%;
                    width: 59%;
                    border-bottom-right-radius: 195px;
                    border-top-right-radius: 200px;
                }
                70%{
                    border-top-right-radius: 195px;
                    border-bottom-right-radius: 200px;

                }
            }

            @keyframes secondLayer{

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

export default EarthCore;
