import React, {Component} from "react";
import "./Navbar.css"
import logo from "./logo.png"
import fr from "./fr.png";
import usa from "./usa.png"
import {NavLink} from "react-router-dom"
import {withTranslation} from "react-i18next";
import {Us} from 'react-flags-select';

class Navbar extends Component {
    testPP = () => {
        alert('testtttt');
    }

    render() {
        const {t,i18n} = this.props;
        return (
            <div className={"navbar-top py-2"}>
                <div className={"container subHeader jrGvPX"}>
                    <nav className="navbar navbar-expand-lg navbar-light py-0 navbar-top">
                        <NavLink to={"/"} className="navbar-brand"><img src={logo} style={{width: "100px"}}/></NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className={"jELMTB"}>
                                <ul className="navbar-nav ">
                                    <li className="nav-item juZnzw">
                                        <NavLink className="nav-link" to={"/loan/how-it-work"}>{t('menu.menu_loan')}
                                            <span className="sr-only">(current)</span></NavLink>

                                    </li>
                                    <li className="nav-item juZnzw">
                                        <NavLink className="nav-link" to={"/merchants"}>{t('menu.menu_merchants')}</NavLink>
                                    </li>
                                    <li className="nav-item juZnzw">
                                        <NavLink className="nav-link" to={"/partnership"}>{t('menu.menu_partnersip')}</NavLink>
                                    </li>
                                    <li className="nav-item juZnzw">
                                        <NavLink className="nav-link" to={"/documentation"}>{t('menu.menu_documentation')}</NavLink>
                                    </li>
                                    <li className="nav-item dropdown juZnzw">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                           role="button"
                                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {t('menu.menu_company')}
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <NavLink className="dropdown-item" to={"/about-us"}>{t('menu.menu_about')}</NavLink>
                                            <NavLink className="dropdown-item" to={"/careers"}>{t('menu_careers')}</NavLink>
                                            <NavLink className="dropdown-item" to={"/faq"}>Faq</NavLink>
                                            <NavLink className="dropdown-item" to={"/news"}>{t('menu.menu_blog')}</NavLink>
                                            <NavLink className="dropdown-item" to={"/contact-us"}>Contact-us</NavLink>
                                            <div className="dropdown-divider"></div>
                                            <NavLink className="dropdown-item" to={"/press-media"}>Press &
                                                Media</NavLink>

                                        </div>
                                    </li>
                                    <li className="nav-item dropdown juZnzw">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                           role="button"
                                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Join Us
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <NavLink className="dropdown-item" to={"/graduates"}>Graduates</NavLink>
                                            <NavLink className="dropdown-item" to={"/experiences"}>Experiences</NavLink>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <form className="form-inline ml-auto  my-2 my-lg-0 jganqX ">
                                <NavLink to={"/register"} ><button className="btn  my-2 my-sm-0  rounded-button p-2" type="submit">{t('menu.create_account')}
                                </button></NavLink>
                            </form>
                        </div>

                    </nav>
                </div>
            </div>

        );
    }
}

export default withTranslation('common')(Navbar)