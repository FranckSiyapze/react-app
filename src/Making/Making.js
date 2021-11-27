import React from "react";
import "./Making.css";
import imageL from "./about-us-header-img.png"

class Making extends React.Component {
    render() {
        return (
            <div className={"cc1"} style={{
                backgroundPosition:"50% 100%",
                backgroundRepeat:"repeat-y",
                backgroundSize:"cover",
                position:"relative",
                opacity:"0.99"
            }
            }>
                <div className="style__HeaderWrapper-sc-jflv50-1 dxAjQS cc">
                    <div className="global__Container-sc-ied47i-0 isrpqV container">
                        <div className="row">
                            <div className="col-6 mt-5">
                                <div className="react-reveal"
                                     style={{
                                         animationFillMode: "both",
                                         animationDuration: "1000ms",
                                         animationIterationCount: "1",
                                         opacity: "1",

                                     }}>
                                    <h1
                                        color="header"
                                         className="sc-bdfBQB kcOBsA">
                                        Making opportunities <br/> accessible to everyone</h1>
                                </div>
                                <div className="react-reveal"
                                     style={{
                                         animationFillMode: "both",
                                         animationDuration: "1000ms",
                                         animationIterationCount: "1",
                                         opacity: "1",
                                         animationName: "react-reveal-45888862481182-1"

                                     }}>
                                    <p  color="header" className="sc-bdfBQB hdwlDS">Delivering on
                                        the promise of financial
                                        inclusion in Africa today to safely connect
                                        people with the places, opportunities, and experiences that they truly care
                                        about.</p>
                                </div>

                            </div>
                            <div className="col-6">
                                <img
                                    src={"https://opayweb.com/static/1985d1ae55a0eb394173b056a9fdfce9/46604/about-us-header-img.png"}

                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Making;