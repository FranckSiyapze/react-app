import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Making from "./Making/Making";
import aboutImg from "./aa.png";
import './about.css';
import Value from "./Value/value";

class AboutUs extends React.Component{
    render(){
        return(
            <div className={"AboutUs"} style={{backgroundColor:"black !important"}}>
                <Header/>
                <Making/>
                    
                <div className={"container"}>
                <section className={"sec-con container-section transparent-mode section--spc--hero-sibling--top section--spc--background-sibling--bottom prismic"} id="section-1">
                    <div className='h-container gap-v-64'>
                        <div className={"container"} style={{backgroundColor:"rgba(255,255,255,0.8) !important"}}>
                            <div className={"reverse tw-flex-row-reverse md:row-8 md:row-gap lg:row-12 lg:row-gap"}>
                                <div className={"text-container gap-v-32 tw-flex tw-flex-col tw-text-center md:tw-text-left md:col md:col-span-4 lg:col lg:col-span-6"}>
                                    <h2 style={{textAlign:"left"}}>"We use design and technology to give entrepreneurs the banking experience they deserve."</h2>
                                    <div className={"body-regular pt-2"}>
                                        <p style={{textAlign:"left"}}><strong>Alexandre Prot and Steve Anavi<br/></strong>Co-Founders @Qonto</p>
                                    </div>
                                </div>
                                <div className={"img-container tw-flex lg:col lg:col-span-6 md:col md:col-span-4"}>
                                    <picture>
                                        <img src={aboutImg}/>
                                    </picture>

                                </div>
                            </div>
                        </div>
                    </div>
                    
                </section>
                </div>
                <Value/>

                <section data-v-e5758736 style={{transition:"opacity 0.7s", opacity:"1"}}>
                        <div data-v-4a248340 data-v-e5758736 className="section-container">
                            <section data-v-4a248340 className="header">
                                <h2 data-v-4a248340>Swish in numbers</h2>
                            </section>
                            <section data-v-4a248340 className="statistic-boxes">
                                <div data-v-4a248340 className="block">
                                    <div data-v-5713928d data-v-4a248340 className="statistics-container left">
                                        <div data-v-5713928d className="info">
                                            <h2 data-v-5713928d>68 630 806</h2>
                                            <p data-v-5713928d>payments in August</p>
                                        </div>
                                        <div data-v-5713928d className="icon-container left bgg">
                                            
                                        </div>

                                    </div>
                                </div>
                                <div data-v-4a248340 className="block">
                                    <div data-v-5713928d data-v-4a248340 className="statistics-container right">
                                        <div data-v-5713928d className="info">
                                            <h2 data-v-5713928d>283 769</h2>
                                            <p data-v-5713928d>number of companies offering payments via Swish</p>
                                        </div>
                                        <div data-v-5713928d className="icon-container right bgr"></div>
                                    </div>
                                </div>
                                <div data-v-4a248340 className="block">
                                    <div data-v-4a248340 data-v-5713928d className="statistics-container bottom">
                                        <div data-v-5713928d className="info">
                                            <h2 data-v-5713928d>7 928 540</h2>
                                            <p data-v-5713928d>private users</p>
                                        </div>
                                        <div data-v-5713928d className="icon-container bottom bgb" ></div>
                                    </div>
                                </div>
                                <div data-v-4a248340 className="block">
                                    <div data-v-5713928d data-v-4a248340 className="statistics-container bottom">
                                        <div data-v-5713928d className="info">
                                            <h2 data-v-5713928d>148%</h2>
                                            <p data-v-5713928d>increase in the use of QR codes during 2020 compared to previous year</p>
                                        </div>
                                        <div data-v-5713928d className="icon-container bottom bgb1">
                                        </div>
                                    </div>
                                </div>
                                <div data-v-4a248340 className="block">
                                    <div data-v-5713928d data-v-4a248340 className="statistics-container right">
                                        <div data-v-5713928d className="info">
                                            <h2 data-v-5713928d>34 405 968 692</h2>
                                            <p data-v-5713928d>SEK sent via Swish in August</p>
                                        </div>
                                        <div data-v-5713928d className="icon-container right bgr1">
                                            </div>
                                    </div>
                                </div>
                                <div data-v-4a248340 className="block">
                                    <div data-v-5713928d data-v-4a248340 className="statistics-container right">
                                        <div data-v-5713928d className="info">
                                            <h2 data-v-5713928d>77 % growth</h2>
                                            <p data-v-5713928d>in Swish for merchants compared to last year</p>
                                        </div>
                                            <div data-v-5713928d className="icon-container right bgr2"></div>
                                    </div>
                                </div>
                                <div data-v-4a248340 className="block">
                                    <div data-v-5713928d data-v-4a248340 className="statistics-container right">
                                        <div data-v-5713928d className="info">
                                            <h2 data-v-5713928d>29 %</h2>
                                            <p data-v-5713928d>prefer to pay with Swish online in age group 16-45</p>
                                        </div>
                                        <div data-v-5713928d className="icon-container right bgr3"></div>
                                    </div>
                                </div>
                            </section>
                        </div>
                </section>
                
                <Footer/>  
            </div>
        )
    }
}
export default AboutUs;