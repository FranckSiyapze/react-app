import React from "react"
import "./Pricing.css"
import {MDBIcon} from "mdbreact";

class Pricing extends React.Component {
    render() {
        return (
            <div>
                <div className="section-container container ">
                        <div className="row" style={{justifyContent:"center"}}>
                            <div className="col-12 ">
                                <ul className="nav nav-pills" style={{justifyContent:"center"}}>
                                    <li className="nav-item" style={{width:"15%", textAlign:"center"}}>
                                        <a className="nav-link active" data-toggle="pill" href="#flamingo" role="tab"
                                           aria-controls="pills-flamingo" aria-selected="true">Micro-businesses</a>
                                    </li>
                                    <li className="nav-item" style={{width:"15%", textAlign:"center"}}>
                                        <a className="nav-link" data-toggle="pill" href="#cuckoo" role="tab"
                                           aria-controls="pills-cuckoo" aria-selected="false">SMEs and Startups</a>
                                    </li>
                                    <li className="nav-item" style={{width:"15%", textAlign:"center"}}>
                                        <a className="nav-link" data-toggle="pill" href="#ostrich" role="tab"
                                           aria-controls="pills-ostrich" aria-selected="false">Business creators</a>
                                    </li>
                                </ul>
                                <div className="tab-content mt-3">
                                    <div className="tab-pane fade show active" id="flamingo" role="tabpanel"
                                         aria-labelledby="flamingo-tab">
                                        <p style={{textAlign:"center",marginBottom:"60px", marginTop:"30px"}}>For freelancers and self-employed workers</p>
                                        <div className={"row"} >
                                            <div className={"col-4"} style={{textAlign:"center"}}>
                                                <div className="container pricing">
                                                    <div className="card card-pricing">
                                                        <div className="image">
                                                            <img
                                                                src="https://images.prismic.io/qonto/73062c49-7884-463b-b0d7-19be54e6cdfb_Pricing_Icon_Basic.png?auto=compress%2Cformat&dpr=1&q=55&usm=20&w=144"
                                                                alt=""/>
                                                        </div>
                                                        <div className="info">
                                                            <h1>Basic</h1>
                                                            <p style={{marginBottom: "30px"}}>The essentials for managing your activity as a
                                                                self-employed worker</p>
                                                            <div className="price">
                                                                <span style={{fontWeight: "bold", fontSize: "20px"}}>€ 190</span> &nbsp; / month (excl.
                                                                VAT)
                                                            </div>
                                                            <button style={{width: "100%"}} className="btn  my-2 mx-0 my-sm-3  rounded-button"
                                                                    type="submit">Open an account
                                                            </button>
                                                            <small>30-day free trial - No commitment</small>
                                                            <div className={"mt-3 mb-3"}><p><MDBIcon icon="check"/> &nbsp; 1 user only (1 Business
                                                                Mastercard)</p></div>
                                                            <div className={"mt-3 mb-3"}><p><MDBIcon icon="check"/> &nbsp; <span>30</span> SEPA
                                                                transfers and direct debits</p></div>
                                                            <div className={"mt-3 mb-3"}><p><MDBIcon icon="check"/> &nbsp; 7-day-a-week support</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={"col-4"} style={{textAlign:"center"}}>
                                                <div className="container pricing">
                                                    <div className="card card-pricing">
                                                        <div className="image">
                                                            <img
                                                                src="https://images.prismic.io/qonto/73062c49-7884-463b-b0d7-19be54e6cdfb_Pricing_Icon_Basic.png?auto=compress%2Cformat&dpr=1&q=55&usm=20&w=144"
                                                                alt=""/>
                                                        </div>
                                                        <div className="info">
                                                            <h1>Basic</h1>
                                                            <p style={{marginBottom: "30px"}}>The essentials for managing your activity as a
                                                                self-employed worker</p>
                                                            <div className="price">
                                                                <span style={{fontWeight: "bold", fontSize: "20px"}}>€ 190</span> &nbsp; / month (excl.
                                                                VAT)
                                                            </div>
                                                            <button style={{width: "100%"}} className="btn  my-2 mx-0 my-sm-3  rounded-button"
                                                                    type="submit">Open an account
                                                            </button>
                                                            <small>30-day free trial - No commitment</small>
                                                            <div className={"mt-3 mb-3"}><p><MDBIcon icon="check"/> &nbsp; 1 user only (1 Business
                                                                Mastercard)</p></div>
                                                            <div className={"mt-3 mb-3"}><p><MDBIcon icon="check"/> &nbsp; <span>30</span> SEPA
                                                                transfers and direct debits</p></div>
                                                            <div className={"mt-3 mb-3"}><p><MDBIcon icon="check"/> &nbsp; 7-day-a-week support</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={"col-4"} style={{textAlign:"center"}}>
                                                <div className="container pricing">
                                                    <div className="card card-pricing">
                                                        <div className="image">
                                                            <img
                                                                src="https://images.prismic.io/qonto/73062c49-7884-463b-b0d7-19be54e6cdfb_Pricing_Icon_Basic.png?auto=compress%2Cformat&dpr=1&q=55&usm=20&w=144"
                                                                alt=""/>
                                                        </div>
                                                        <div className="info">
                                                            <h1>Basic</h1>
                                                            <p style={{marginBottom: "30px"}}>The essentials for managing your activity as a
                                                                self-employed worker</p>
                                                            <div className="price">
                                                                <span style={{fontWeight: "bold", fontSize: "20px"}}>€ 190</span> &nbsp; / month (excl.
                                                                VAT)
                                                            </div>
                                                            <button style={{width: "100%"}} className="btn  my-2 mx-0 my-sm-3  rounded-button"
                                                                    type="submit">Open an account
                                                            </button>
                                                            <small>30-day free trial - No commitment</small>
                                                            <div className={"mt-3 mb-3"}><p><MDBIcon icon="check"/> &nbsp; 1 user only (1 Business
                                                                Mastercard)</p></div>
                                                            <div className={"mt-3 mb-3"}><p><MDBIcon icon="check"/> &nbsp; <span>30</span> SEPA
                                                                transfers and direct debits</p></div>
                                                            <div className={"mt-3 mb-3"}><p><MDBIcon icon="check"/> &nbsp; 7-day-a-week support</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="cuckoo" role="tabpanel"
                                         aria-labelledby="profile-tab">
                                        The cuckoos are generally medium-sized slender birds. Most species live in
                                        trees, though a sizeable minority are ground-dwelling. The family has a
                                        cosmopolitan distribution, with the majority of species being tropical.
                                    </div>
                                    <div className="tab-pane fade" id="ostrich" role="tabpanel"
                                         aria-labelledby="ostrich-tab">
                                        The common ostrich is farmed around the world, particularly for its feathers,
                                        which are decorative and are also used as feather dusters. Its skin is used for
                                        leather products and its meat is marketed commercially, with its leanness a
                                        common marketing point.
                                    </div>
                                    <div className="tab-pane fade" id="tropicbird" role="tabpanel"
                                         aria-labelledby="tropicbird-tab">
                                        Tropicbirds range in size from 76 cm to 102 cm in length and 94 cm to 112 cm in
                                        wingspan. Their plumage is predominantly white, with elongated central tail
                                        feathers. The three species have different combinations of black markings on the
                                        face, back, and wings. Their bills are large, powerful and slightly decurved.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Pricing