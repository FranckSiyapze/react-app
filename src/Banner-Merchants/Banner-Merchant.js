import React from "react"
import './Banner-Merchant.css'

class BannerMerchant extends React.Component{
    render(){
        return(
            <div className={"dJuPn"}>
                <div className={"bspSbn"}>
                    <div className={"subHeader"}>
                        <div className={"bUidPM"}>
                            <div className={"hqITAt"}>
                                <div className={"react-reveal"}>
                                    <h1 className={"kxO8sA"}>
                                        Become an OPay Merchant&nbsp;
                                    </h1>
                                </div>
                                <div className={"react-reveal"}>
                                    <h3 className={"blxVgX"}>Get a POS terminal and enjoy low fees on all your transactions.</h3>
                                </div>
                                <button className="btn  my-2 my-sm-0  rounded-button" type="submit" style={{width:"65%"}}>Create an Online Merchant Account</button>
                                <br/>
                                <button className="btn  my-2 my-sm-0  rounded-button" type="submit" style={{width:"65%"}}>Create a POS Merchant Account</button>
                            </div>
                            <div className={"iyYGpV"}>
                                <div className={"eJfp"}>
                                    <div className={"kzaW"}>
                                        <div className={"eaiPWx"} style={{position:"relative", overflow:"hidden"}}>
                                            <div style={{width:"100%", paddingBottom:"132.79999999999998%"}}></div>
                                            <img src="data:image/png;base64,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"
                                                 alt=""
                                                 style={{position:"absolute",top:"0px",left:"0px",width:"100%",
                                                     height:"100%",objectFit:"cover",objectPosition:"center center",
                                                     opacity:"0", transitionDelay:"500ms"
                                                 }}
                                            />
                                            <img src={"https://opayweb.com/static/b1b226f1afa699fcc0476034ebb0b09b/73c85/merchant-home-new.png"}
                                                style={{
                                                    position:"absolute",
                                                    top:"0px",
                                                    left:"0px",
                                                    width:"100%",
                                                     height:"100%",
                                                    objectFit:"cover",
                                                    objectPosition:"center center",
                                                     //opacity:"0",
                                                    //transitionDelay:"500ms"
                                                 }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default BannerMerchant