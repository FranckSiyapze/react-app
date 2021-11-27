import React from "react"
import "./404.css"
import {NavLink, withRouter} from "react-router-dom"
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

class Error extends React.Component {

    handleBack = () => {
        console.log(this.props.history)
        this.props.history.goBack()
    }

    render() {
        return (
            <div>
                <Header/>
                <section className={"error-hero"}>
                    <div className={"container__wrapper"}>
                        <div className={"container-text"}>
                            <h1>Ooops</h1>
                            <p>Cette page est introuvable</p>
                            <p>Vous êtes à la recherche d'une page ?</p>
                            <ul>
                                <li>
                                    <NavLink className="link" to={"/"}>Accueil</NavLink>
                                </li>
                                <li>
                                    <span style={{cursor: "pointer"}} className="link" onClick={this.handleBack}>Revenir à la
                                        page precendente</span>
                                </li>
                                <li className={"border"}></li>
                                <li>
                                    <NavLink className="link" to={"#"}>Notre solution pour entreprises</NavLink>
                                </li>
                                <li>
                                    <NavLink className="link" to={"#"}>Moyens de paiement</NavLink>
                                </li>
                                <li>
                                    <NavLink className="link" to={"#"}>Nos tarifs</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className={"container-img"}>
                            <img className={"err"} src={"https://qonto.com/homepage/error/404-ter.png"}/>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        )
    }
}

export default withRouter(Error)