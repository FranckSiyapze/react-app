import React from "react";
import Header from "./Header/Header";
import BannerMerchant from "./Banner-Merchants/Banner-Merchant"
import Company from "./company-Merchants/companyCreation-Merchants"
import './merchant.css'
import {
    MDBIcon,
    MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText,
} from "mdbreact";
import Pricing from "./Pricing/Pricing";
import Footer from "./Footer/Footer";
import Terminal from "./Terminaux/Terminaux";

class Merchant extends React.Component {

    render() {
        return (
            <div className={"merchant"}>
                <Header/>
                <BannerMerchant/>
                <Company/>
                <div className={"container"}>
                    <h2 className="sc-bdfBQB ihDtix">Here is why you should become a merchant with us</h2>
                    <section className={"eQuaHt"}>
                        <div className={"row"}>
                            <div className={"col-4"}>
                                <div className={"eqjDYq"}>
                                    <div className={"react-reveal"} style={{
                                        animationFillMode: "both",
                                        animationDuration: "1000ms",
                                        animationDelay: "0ms",
                                        animationIterationCount: "1",
                                        opacity: "1",
                                        animationName: "react-reveal-768502056468225-2"
                                    }}>
                                        <div className={"card bFDkks"}>
                                            <div className={"hJmDhz eiYaBs"}>
                                                <img
                                                    src="data:image/png;base64,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"
                                                    alt="Trusted and Reliable Service"
                                                    className="bcpTfb"/>
                                            </div>
                                            <p className="sc-bdfBQB UwXGv">Trusted and Reliable Service</p>
                                            <span className={"guBuCg"}>
                                              Neero is a CBN licensed mobile money platform.
                                              We offer low fees and a hassle-free way to carryout  an array of services for your customers.
                                          </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"col-4"}>
                                <div className={"eqjDYq"}>
                                    <div className={"react-reveal"} style={{
                                        animationFillMode: "both",
                                        animationDuration: "1000ms",
                                        animationDelay: "0ms",
                                        animationIterationCount: "1",
                                        opacity: "1",
                                        animationName: "react-reveal-768502056468225-2"
                                    }}>
                                        <div className={"card bFDkks"}>
                                            <div className={"hJmDhz eiYaBs"}>
                                                <img
                                                    src="data:image/png;base64,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"
                                                    alt="Trusted and Reliable Service"
                                                    className="bcpTfb"/>
                                            </div>
                                            <p className="sc-bdfBQB UwXGv">Instant Transaction Settlement</p>
                                            <span className={"guBuCg"}>
                                              Receive funds into your wallet instantly and offer transfer services to
                                              your customers in real-time. No waiting for end-of-day reconciliation.
                                          </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"col-4"}>
                                <div className={"eqjDYq"}>
                                    <div className={"react-reveal"} style={{
                                        animationFillMode: "both",
                                        animationDuration: "1000ms",
                                        animationDelay: "0ms",
                                        animationIterationCount: "1",
                                        opacity: "1",
                                        animationName: "react-reveal-768502056468225-2"
                                    }}>
                                        <div className={"card bFDkks"}>
                                            <div className={"hJmDhz eiYaBs"}>
                                                <img
                                                    src="data:image/png;base64,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"
                                                    alt="Trusted and Reliable Service"
                                                    className="bcpTfb"/>
                                            </div>
                                            <p className="sc-bdfBQB UwXGv">Business Intelligence and Growth Insights</p>
                                            <span className={"guBuCg"}>
                                              As your partner, your growth is our growth. We offer a powerful dashboard
                                              to view all your business transactions and helps you understand your business better.
                                          </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <section
                    className={"container-section transparent-mode section--spc--standard--top section--spc--container-sibling--bottom prismic"}>
                    <div className={"container gap-v-64"}>
                        <h2 className="sc-bdfBQB ihDtix">We give you all the tools you need to succeed</h2>
                        <a className={"clickable-container"}>
                            <div className={"container mrsw"}>
                                <div className={"md:row-8 md:row-gap lg:row-12 lg:row-gap"}>
                                    <div
                                        className={"text-container gap-v-32 tw-flex tw-flex-col tw-text-center md:tw-text-left md:col md:col-span-4 lg:col lg:col-span-6"}>
                                        <h2 style={{textAlign: "left"}}>Switching your account to Qonto is simple and
                                            seamless</h2>
                                        <div className={"body-regular"}>
                                            <div className={"gap-v-16 bullets"}>
                                                <div className={"bullet tw-flex tw-flex-row"}>
                                                    <MDBIcon icon="check"/>
                                                    <p>The first banking mobility service exclusively for businesses</p>
                                                </div>
                                                <div className={"bullet tw-flex tw-flex-row"}>
                                                    <MDBIcon icon="check"/>
                                                    <p>Save time with free and ongoing guidance</p>
                                                </div>
                                                <div className={"bullet tw-flex tw-flex-row"}>
                                                    <MDBIcon icon="check"/>
                                                    <p>Avoid any glitches thanks to a dedicated help team</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"btns-container sm:gap-v-16"}>
                                          <span className={"btn-tertiary"}>
                                              Find out more on how to switch to Neero &nbsp; <MDBIcon
                                              icon="angle-right"/>
                                          </span>
                                        </div>
                                    </div>
                                    <div className={"img-container tw-flex lg:col lg:col-span-6 md:col md:col-span-4"}>
                                        <img
                                            src={"https://images.prismic.io/qonto/5afa4669-b337-46cb-bc33-52ad97eb77f9_Container-BankSwitch-HP-EN.png?auto=compress%2Cformat&dpr=1&q=55&usm=20&w=588"}/>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </section>
                <br/>
                <section
                    className={"container-section transparent-mode section--spc--standard--top section--spc--container-sibling--bottom prismic"}>
                    <div className={"container gap-v-64"}>
                        <a className={"clickable-container"}>
                            <div className={"container mrsw"}>
                                <div className={"reverse tw-flex-row-reverse md:row-8 md:row-gap lg:row-12 lg:row-gap"}>
                                    <div
                                        className={"text-container gap-v-32 tw-flex tw-flex-col tw-text-center md:tw-text-left md:col md:col-span-4 lg:col lg:col-span-6"}>
                                        <h2 style={{textAlign: "left"}}>Optimize your expenses as a team</h2>
                                        <div className={"body-regular"}>
                                            <p style={{textAlign: "left"}}>Delegate team spending with peace of mind
                                                thanks to budget limits and real-time monitoring.</p>
                                        </div>
                                        <div className={"btns-container sm:gap-v-16"}>
                                          <span className={"btn-tertiary"}>
                                              More on team expense management &nbsp; <MDBIcon icon={"angle-right"}/>
                                          </span>
                                        </div>
                                    </div>
                                    <div className={"img-container tw-flex lg:col lg:col-span-6 md:col md:col-span-4"}>
                                        <img
                                            src={"https://images.prismic.io/qonto/db9caa60-9b40-4343-913a-e24fc4b95cd5_Container2-Teams-EN.png?auto=compress%2Cformat&dpr=1&q=55&usm=20&w=588"}/>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </section>
                <br/>
                <section
                    className={"container-section transparent-mode section--spc--standard--top section--spc--container-sibling--bottom prismic"}>
                    <div className={"container gap-v-64"}>
                        <a className={"clickable-container"}>
                            <div className={"container mrsw"}>
                                <div className={"md:row-8 md:row-gap lg:row-12 lg:row-gap"}>
                                    <div
                                        className={"text-container gap-v-32 tw-flex tw-flex-col tw-text-center md:tw-text-left md:col md:col-span-4 lg:col lg:col-span-6"}>
                                        <h2 style={{textAlign: "left"}}>Real-time accounting</h2>
                                        <div className={"body-regular"}>
                                            <p style={{textAlign: "left"}}>Automate your admin and paperwork; take the
                                                effort out of bookkeeping and put it back into growing your
                                                business.</p>
                                        </div>
                                        <div className={"btns-container sm:gap-v-16"}>
                                          <span className={"btn-tertiary"}>
                                              Discover our accounting features &nbsp; <MDBIcon icon="angle-right"/>
                                          </span>
                                        </div>
                                    </div>
                                    <div className={"img-container tw-flex lg:col lg:col-span-6 md:col md:col-span-4"}>
                                        <img
                                            src={"https://images.prismic.io/qonto/419b6d48-48b1-4250-a79d-b55e6d6f3e64_Container2-HP-En.png?auto=compress%2Cformat&dpr=1&q=55&usm=20&w=588"}/>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </section>
                <br/>
                <div className={"container"}>
                    <h2 style={{textAlign: "center"}}>Flexible pricing for your business</h2>
                </div>
                <Pricing/>
                <div className={"container"}>
                    <h2 style={{textAlign: "center", color: "#6B5AED"}}>+ Tarifs flexibles à partir de <span
                        style={{fontWeight: "bold", fontSize: "50px"}}>0,65%</span></h2>
                    <div style={{textAlign: "center", marginBottom: "1.5rem"}}>
                        <button style={{width: "20%",}} className="btn  my-2 mx-0 my-sm-3  rounded-button"
                                type="submit">Voir nos tarifs
                        </button>
                        <img src={"https://mk0yavincomje5ln1qs0.kinstacdn.com/wp-content/uploads/2020/07/CARTES-BANCAIRES.png"}/>
                    </div>

                </div>
                <Terminal/>
                <section className={"stepper_simplified_v2-section transparent-mode section--spc--background-sibling--top section--spc--standard--bottom prismic"}>
                    <div className={"container gap-v-32"}>
                        <div className={"simple-stepper-header lg:row-12 lg:row-gap lg:row-center md:row-8 md:row-gap md:row-center"}>
                            <div className={"lg:col-span-10 md:col-span-6"}>
                                <h2 className={"text-center"}>Ready to try Neero ?</h2>
                            </div>
                        </div>
                        <div style={{position:"relative"}}>
                            <div className={"lg:dots-container"}>
                                <div className={"dots"}>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                </div>
                                <div className={"dots"}>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                </div>
                                <div className={"dots"}>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                </div>
                            </div>
                            <div className={"lg:row-12 lg:row-gap lg:row-center md:row-8 md:row-gap md:row-center "}>
                                <div className={"step lg:col md:col lg:col-span-3 md:col-span-2"}>
                                    <div className={"item sm:row-4 sm:row-gap"}>
                                        <div className={"sm:col"}>
                                            <div className={"item-container"}>
                                                <div className={"item-number"}>01</div>
                                            </div>
                                        </div>
                                        <div className={"sm:col sm:col-span-3"}>
                                            <div className={"item-container"}>
                                                <div className={"item-description body-regular"}>
                                                    Sign up in a few minutes
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"sm:dots-container sm:row-4 sm:row-gap"}>
                                        <div className={"sm:col"}>
                                            <div className={"dots"}>
                                                <div className="sm:dot dot"></div>
                                                <div className="sm:dot dot"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={"step lg:col md:col lg:col-span-3 md:col-span-2"}>
                                    <div className={"item sm:row-4 sm:row-gap"}>
                                        <div className={"sm:col"}>
                                            <div className={"item-container"}>
                                                <div className={"item-number"}>02</div>
                                            </div>
                                        </div>
                                        <div className={"sm:col sm:col-span-3"}>
                                            <div className={"item-container"}>
                                                <div className={"item-description body-regular"}>
                                                    We just have to verify your identity
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"sm:dots-container sm:row-4 sm:row-gap"}>
                                        <div className={"sm:col"}>
                                            <div className={"dots"}>
                                                <div className="sm:dot dot"></div>
                                                <div className="sm:dot dot"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={"step lg:col md:col lg:col-span-3 md:col-span-2"}>
                                    <div className={"item sm:row-4 sm:row-gap"}>
                                        <div className={"sm:col"}>
                                            <div className={"item-container"}>
                                                <div className={"item-number"}>03</div>
                                            </div>
                                        </div>
                                        <div className={"sm:col sm:col-span-3"}>
                                            <div className={"item-container"}>
                                                <div className={"item-description body-regular"}>
                                                    Your account is open !
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"sm:dots-container sm:row-4 sm:row-gap"}>
                                        <div className={"sm:col"}>
                                            <div className={"dots"}>
                                                <div className="sm:dot dot"></div>
                                                <div className="sm:dot dot"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={"step lg:col md:col lg:col-span-3 md:col-span-2"}>
                                    <div className={"item sm:row-4 sm:row-gap"}>
                                        <div className={"sm:col"}>
                                            <div className={"item-container"}>
                                                <div className={"item-number"}>04</div>
                                            </div>
                                        </div>
                                        <div className={"sm:col sm:col-span-3"}>
                                            <div className={"item-container"}>
                                                <div className={"item-description body-regular"}>
                                                    Send your first payment
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"sm:dots-container sm:row-4 sm:row-gap"}>
                                        <div className={"sm:col"}>
                                            <div className={"dots"}>
                                                <div className="sm:dot dot"></div>
                                                <div className="sm:dot dot"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        );
    }
}

export default Merchant