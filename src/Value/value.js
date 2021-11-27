import React from "react"
import "./value.css"

class Value extends React.Component {
    render() {
        return (
            <div className={"dark-mode"}>
                <div className={"container "}>
                    <h2 style={{textAlign: "center"}}>You're in good hands</h2>
                    <div className={"row mt-5"}>
                        <div className={"col-lg-3 css"}>
                            <img
                                src="https://opayweb.com/static/entrepreneurship-d58f1f92c1e1610bf94c0c4f52df42ac.png"
                                alt="" width="48" height="49"/>
                            <div className="gap-v-16">
                                <div className="item-title"><h3>Entrepreneurship</h3></div>
                                <div className="body-small"><p style={{color:"black", fontSize:"16px"}}>Funds are safeguarded by our business partner Crédit
                                    Mutuel Arkéa and protected by the French Fonds de Garantie des Dépôts et de
                                    Résolution</p></div>
                            </div>
                        </div>
                        <div className={"col-lg-3 css"}>
                            <img
                                src="https://opayweb.com/static/diversity-adf7cb76247cac698f4b9728d9093558.png"
                                alt="" width="48" height="49"/>
                            <div className="gap-v-16">
                                <div className="item-title"><h3>Diversity</h3></div>
                                <div className="body-small"><p style={{color:"black", fontSize:"16px"}}>Qonto is a payment institution regulated by the ACPR
                                    attached to the Banque de France</p></div>
                            </div>
                        </div>
                        <div className={"col-lg-3 css"}>
                            <img
                                src="https://opayweb.com/static/innovation-2d24351f8b17ca734e10ce320b8dca6d.png"
                                alt="" width="48" height="49"/>
                            <div className="gap-v-16">
                                <div className="item-title"><h3>Innovation</h3></div>
                                <div className="body-small"><p style={{color:"black", fontSize:"16px"}}>The only French business account to own its banking
                                    platform and carry out current transactions for its clients</p></div>
                            </div>
                        </div>
                        <div className={"col-lg-3 css"}>
                            <img
                                src="https://opayweb.com/static/community-04b9cf599f180bb56b2fef2dc4e6ce20.png"
                                alt="" width="48" height="49"/>
                            <div className="gap-v-16">
                                <div className="item-title"><h3>Community</h3></div>
                                <div className="body-small"><p style={{color:"black", fontSize:"16px"}}>The only French business account to own its banking
                                    platform and carry out current transactions for its clients</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Value