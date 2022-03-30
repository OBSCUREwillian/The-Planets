const VenusCore = () => {
    return (<>
        <div className="inside radius-right">
            <div className="dark-blue radius-right">
                <div className="first-layer radius-right">
                    <div className="core radius-right">
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
                background-color: #B57C18;
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
            .core{
                background-color: #FFF1AA;
                height: 65%;
                width: 65%;
                animation: core 0.9s ease-in-out infinite;
            }
            

            @keyframes core{
                50%{
                    height: 64%;
                    width: 64%;
                    border-bottom-right-radius: 195px;
                    border-top-right-radius: 200px;
                }
                70%{
                    border-top-right-radius: 195px;
                    border-bottom-right-radius: 200px;
                }
            }
            
        `}</style>
    </>);
}

export default VenusCore;
