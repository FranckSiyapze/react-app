import React from "react"
import "./companyCreation-Merchants.css"

class companyCreationMerchants extends React.Component {
    render() {
        return (
            <div
                className={"stepper_advanced_v2-section transparent-mode section--spc--background-sibling--top section--spc--standard--bottom prismic cc"}>
                <div className={"h-container"}>
                    <div className={"lg:row-12 lg:row-gap md:row-8 md:row-gap lg:row-center md:row-center"}>
                        <div className={"lg:col lg:col-span-5 md:col md:col-span-4"}>
                            <div className={"description gap-v-24 lg:gap-v-32"}>
                                <h2>3 quick steps to deposit your share capital online</h2>
                                <br/>
                                <div className={"body-regular"}>
                                    <p>Open a Neero account, proceed with the deposit of your share capital and receive a digital certificate within 72h on average.</p>
                                </div>
                                <button className="btn  my-2 mx-0 my-sm-0  rounded-button" type="submit">Deposit your share capital</button>

                            </div>
                        </div>
                        <div className={"step-section lg:col lg:col-offset-1 lg:col-span-6 md:col md:col-span-4"}>
                            <div className={"sm:gap-v-32"}>
                                <div className={"step-container"}>
                                    <div className={"step-dots"}>
                                        <div className="step-dot active step-dot-0"></div>
                                        <div className="step-dot active step-dot-1"></div>
                                        <div className="step-dot active step-dot-2"></div>
                                        <div className="step-dot active step-dot-3"></div>
                                        <div className="step-dot active step-dot-4"></div>
                                        <div className="step-dot active step-dot-5"></div>
                                    </div>
                                    <div className="step-num">01</div>
                                    <div>
                                        <h3>Open an account in 10 minutes</h3>
                                        <div className={"body-small step-description"}>
                                            <p>Enter your personal, shareholder, and company information as listed in your by-laws. Next,
                                                <strong style={{fontWeight:"bold"}}>add these by-laws on Qonto.</strong></p>
                                        </div>
                                    </div>
                                </div>
                                <div className={"step-container"}>
                                    <div className={"step-dots"}>
                                        <div className="step-dot active step-dot-0"></div>
                                        <div className="step-dot active step-dot-1"></div>
                                        <div className="step-dot active step-dot-2"></div>
                                        <div className="step-dot active step-dot-3"></div>
                                        <div className="step-dot active step-dot-4"></div>
                                        <div className="step-dot active step-dot-5"></div>
                                    </div>
                                    <div className="step-num">02</div>
                                    <div>
                                        <h3>Deposit your share capital</h3>
                                        <div className={"body-small step-description"}>
                                            <p>Each partner should make their share capital deposit with <strong style={{fontWeight:"bold"}}>one simple transfer</strong>.
                                                You'll then receive a fund deposit certificate via email within 72 hours.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={"step-container"}>
                                    <div className="step-num">03</div>
                                    <div>
                                        <h3>Register your company</h3>
                                        <div className={"body-small step-description"}>
                                            <p>Finalize your company's registration with the relevant official entities,
                                                then submit your registration documents to Qonto so the <strong style={{fontWeight:"bold"}}> funds can be released.</strong> You're all set!</p>
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

export default companyCreationMerchants;