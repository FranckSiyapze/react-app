import React from "react"
import "./companyCreation.css"

class companyCreation extends React.Component {
    render() {
        return (
            <div
                className={"stepper_advanced_v2-section transparent-mode section--spc--background-sibling--top section--spc--standard--bottom prismic cc"}>
                <div className={"h-container"}>
                    <div className={"lg:row-12 lg:row-gap md:row-8 md:row-gap lg:row-center md:row-center"}>
                        <div className={"lg:col lg:col-span-5 md:col md:col-span-4"}>
                            <div className={"description gap-v-24 lg:gap-v-32"}>
                                <h2>How to make the capital deposit of your company?</h2>
                                <div className={"body-regular"}>
                                    <p>The certificate of deposit will allow you to finalize your company creation, and
                                        to get your Neero business banking account!</p>
                                </div>
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
                                        <h3>Choose your legal status</h3>
                                        <div className={"body-small step-description"}>
                                            <p>Once you've chosen the right legal form for your company, you'll have to
                                                write its bylaws. Our partner, LegalStart can guide you every step of
                                                the way.</p>
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
                                        <h3>Deposit your capital</h3>
                                        <div className={"body-small step-description"}>
                                            <p>With a simple transfer, every partner can deposit his or her shares of
                                                the capital. Qonto will then send you a digital certificate within 72
                                                hours.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={"step-container"}>
                                    <div className="step-num">03</div>
                                    <div>
                                        <h3>Register your company</h3>
                                        <div className={"body-small step-description"}>
                                            <p>The final step consists in registering your company. You'll have to
                                                deposit your Kbis in the Qonto app to free your capital. You're all
                                                set!</p>
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

export default companyCreation;