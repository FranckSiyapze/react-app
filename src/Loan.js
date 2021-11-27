import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Company from "./companyCreation/companyCreation"
import SmallBussiness from "./smallBussiness/smallBussiness"
import HowItWork from "./howItWork/howItWork";
import Testimonials from "./Testimonials/Testimonials";

class Loan extends React.Component {
    render() {
        return (
            <div className={"Loan"}>
                <Header/>
                <div className='container-fluid bg-sand pt-5 hero hiw-hero'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6 mt-5 mt-md-20'>
                                <h1 className='pt-6 text-center text-md-left'>
                                    <span className='d-inline-block style'>Money at the</span>
                                    <span className='d-inline-block style'>speed of life</span>
                                </h1>
                                <p className='text-large text-center text-md-left px-4 px-sm-0' style={{fontSize:"1.5rem", fontWeight:"400", lineHeight:"36px"}}>We design our products
                                    to serve the needs of customers today, tomorrow, and in the future.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Company/>
                <SmallBussiness/>
                <HowItWork/>
                <Testimonials/>
                <Footer/>
            </div>
        )
    }
}

export default Loan;