import React from "react";
import "./Testimonials.css"
import {MDBIcon} from "mdbreact";

class Testimonials extends React.Component {
    render() {
        return (
            <div className="container mt-5" >
                <h2 style={{textAlign:"center", marginTop:"50px", marginBottom:"50px"}}>We have seen them bloom and grow</h2>
                <div className="row">
                    <div className="col-md-12">
                        <div id="testimonial-slider" className="owl-carousel">
                            <div className="testimonial">
                                <div className="pic">
                                    <img
                                        src="https://media-exp1.licdn.com/dms/image/C4D03AQHTQ2Fb19EBKA/profile-displayphoto-shrink_200_200/0/1607350916067?e=1637798400&v=beta&t=mW8JbGpaXbIhUBGTwYvczZNQmvR6Jw6jVmnYeG8mg-0"/>
                                </div>
                                <p className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada vulputate
                                    nisi in
                                    fermentum. Vivamus ac libero quis nisi auctor pulvinar. Aenean sit amet lectus
                                    posuere,
                                    mattis massa eget, ullamcorper diam. Nunc sit amet felis eget arcu congue dictum.
                                </p>
                                <h3 className="title">Jessica</h3>
                                <small className="post">- Archietect</small>
                            </div>

                            <div className="testimonial">
                                <div className="pic">
                                    <img
                                        src="https://media-exp1.licdn.com/dms/image/C4D03AQHTQ2Fb19EBKA/profile-displayphoto-shrink_200_200/0/1607350916067?e=1637798400&v=beta&t=mW8JbGpaXbIhUBGTwYvczZNQmvR6Jw6jVmnYeG8mg-0"/>
                                </div>
                                <p className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada vulputate
                                    nisi in
                                    fermentum. Vivamus ac libero quis nisi auctor pulvinar. Aenean sit amet lectus
                                    posuere,
                                    mattis massa eget, ullamcorper diam. Nunc sit amet felis eget arcu congue dictum.
                                </p>
                                <h3 className="title">Pearl</h3>
                                <small className="post">- Engineer </small>
                            </div>

                            <div className="testimonial">
                                <div className="pic">
                                    <img
                                        src="https://media-exp1.licdn.com/dms/image/C4D03AQHTQ2Fb19EBKA/profile-displayphoto-shrink_200_200/0/1607350916067?e=1637798400&v=beta&t=mW8JbGpaXbIhUBGTwYvczZNQmvR6Jw6jVmnYeG8mg-0"/>
                                </div>
                                <p className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada vulputate
                                    nisi in
                                    fermentum. Vivamus ac libero quis nisi auctor pulvinar. Aenean sit amet lectus
                                    posuere,
                                    mattis massa eget, ullamcorper diam. Nunc sit amet felis eget arcu congue dictum.
                                </p>
                                <h3 className="title">Kellie</h3>
                                <small className="post">- Graphic Designer</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Testimonials;