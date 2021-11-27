import React from "react"
import "./howitWork.css"

class HowItWork extends React.Component {
    render() {
        return (
            <div>
                <div className='container pt-5 pt-md-10 branch-fade-in'>
                    <div className='row mb-3 mb-md-5'>
                        <div className='col text-center'>
                            <h2>Our approach to credit scoring</h2>
                        </div>
                    </div>

                    <div className='row justify-content-center'>
                        <div className='col-sm-6 col-md-4 my-3 my-lg-5 text-center'>
                            <h3>Handset details</h3>
                            <img
                                src="https://d2c5ectx2y1vm9.cloudfront.net/assets/hiw/icon_handset_details-d3ee90080cf32d4c5edb9457e82a1dcae07f0ed3894bba090f64b82fa0ce119d.png"/>
                        </div>
                        <div className='col-sm-6 col-md-4 my-3 my-lg-5 text-center'>
                            <h3>SMS logs</h3>
                            <img
                                src="https://d2c5ectx2y1vm9.cloudfront.net/assets/hiw/icon_sms_logs-339144bc687b4d9be62429ade32e52eb46ce7e54273985be3a60c870752f06f4.png"/>
                        </div>
                        <div className='col-sm-6 col-md-4 my-3 my-lg-5 text-center'>
                            <h3>Repayment history</h3>
                            <img
                                src="https://d2c5ectx2y1vm9.cloudfront.net/assets/hiw/icon_repayment_history-d5eca7676a2520e945c88b8c2b3a3e92eebd15b5c47ab8e027ab1eb5dcee2ea6.png"/>
                        </div>
                        <div className='col-sm-6 col-md-4 my-3 my-lg-5 text-center'>
                            <h3>GPS data</h3>
                            <img
                                src="https://d2c5ectx2y1vm9.cloudfront.net/assets/hiw/icon_gps_data-f2bd8528c8ab11e4b12525363600d0072ebc270a91b2944ae9ef459f07c62aa7.png"/>
                        </div>
                        <div className='col-sm-6 col-md-4 my-3 my-lg-5 text-center'>
                            <h3>Contact lists</h3>
                            <img
                                src="https://d2c5ectx2y1vm9.cloudfront.net/assets/hiw/icon_contact_lists-dd22d741aacac5d0863c528c2ee2a1b0a141a82b5f89c58f3493f45cc3a32989.png"/>
                        </div>
                    </div>
                </div>
                <div className='container px-4 mt-0 mt-md-10 branch-fade-in'>
                    <div className='row pt-5'>
                        <div className='col-md-1'></div>
                        <div className='col-md-6'>
                            <h2>100% transparency</h2>
                            <p className='text-large'>We don't want to stifle growth or get someone into a tight spot.
                                That's why we're
                                upfront with our lending terms and never charge late fees or <span
                                    className='d-inline-block'>rollover fees.</span></p>
                        </div>
                        <div className='col-md-5 text-center'>
                            <img className="w-100"
                                 src="https://d2c5ectx2y1vm9.cloudfront.net/assets/hiw/transparency-42374f5ed78f331be035a21e1b8f14b61be2fbf7767b4d261991a233a7511f2c.png"/>
                        </div>
                    </div>
                </div>

                <div className='container-fluid branch-shape-container'>
                    {/*<img className="branch-shape branch-shape-parallax branch-shape-right d-none d-md-inline mt-5"
                         src="https://d2c5ectx2y1vm9.cloudfront.net/assets/hiw/shape_2-af96ccdaab05a5b35c38c2e9d574ead8b0f8c33303bcec6b5900281e8289dc34.png"/>*/}
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-4 mt-5 mt-sm-20'>
                                <h2>
                                    <span className='d-inline-block' style={{fontWeight:"500", fontSize:"48px", lineHeight:"48px"}}>A commitment</span>
                                    <span
                                    className='d-inline-block' style={{fontWeight:"500", fontSize:"48px", lineHeight:"48px"}}>to customers</span></h2>
                            </div>
                            <div className='col-md-8 col-lg-7 mt-3 mt-md-20'>
                                <p className='text-large'>At Branch, our products are designed to meet people where
                                    they're at. For many, that means having little to no credit history or savings. So
                                    we use alternative data to offer financial products that people can access anywhere,
                                    without the hassle of judgement of traditional institutions.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='container-fluid'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-4 mt-5 mt-sm-10'>
                                <h2><span className='d-inline-block' style={{fontWeight:"500", fontSize:"48px", lineHeight:"48px"}}>Making a</span>
                                    <span className='d-inline-block' style={{fontWeight:"500", fontSize:"48px", lineHeight:"48px"}}>lending decision</span>
                                </h2>
                            </div>
                            <div className='col-md-8 mt-3 mt-md-10'>
                                <p className='text-large'>With the explicit permission of our customers, we analyze
                                    smartphone data to determine loan eligibility. Our machine learning algorithms
                                    process thousands of data points to create personalized loan options in a matter of
                                    seconds.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HowItWork;