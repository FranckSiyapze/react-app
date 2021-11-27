import React from "react"
import "./smallBussiness.css"

class smallBussiness extends React.Component {
    render() {
        return (
            <div className={"dark-mode"}>
                <div className={"container "}>
                    <h2 style={{textAlign: "center"}}>You're in good hands</h2>
                    <div className={"row mt-5"}>
                        <div className={"col-lg-4 css"}>
                            <img
                                src="https://qonto.cdn.prismic.io/qonto/726d7af5-773a-49a5-a6ce-f424c3f30041_item-dark-shield.svg"
                                alt="" width="48" height="49"/>
                            <div className="gap-v-16">
                                <div className="item-title"><h3>Your funds are secure</h3></div>
                                <div className="body-small"><p style={{color:"#e9eaf0", fontSize:"16px"}}>Funds are safeguarded by our business partner Crédit
                                    Mutuel Arkéa and protected by the French Fonds de Garantie des Dépôts et de
                                    Résolution</p></div>
                            </div>
                        </div>
                        <div className={"col-lg-4 css"}>
                            <img
                                src="https://qonto.cdn.prismic.io/qonto/facd333f-dd72-4aaf-9049-c1e09b127ef2_item-dark-bank.svg"
                                alt="" width="48" height="49"/>
                            <div className="gap-v-16">
                                <div className="item-title"><h3>Regulated by the ACPR</h3></div>
                                <div className="body-small"><p style={{color:"#e9eaf0", fontSize:"16px"}}>Qonto is a payment institution regulated by the ACPR
                                    attached to the Banque de France</p></div>
                            </div>
                        </div>
                        <div className={"col-lg-4 css"}>
                            <img
                                src="https://qonto.cdn.prismic.io/qonto/121a9fe4-b4c5-487b-8395-a479536638c8_item-dark-qonto.svg"
                                alt="" width="48" height="49"/>
                            <div className="gap-v-16">
                                <div className="item-title"><h3>A 100% Qonto online platform</h3></div>
                                <div className="body-small"><p style={{color:"#e9eaf0", fontSize:"16px"}}>The only French business account to own its banking
                                    platform and carry out current transactions for its clients</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default smallBussiness