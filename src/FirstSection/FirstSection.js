import React from "react"
import "./FirstSection.css"


class firstSection extends React.Component{
    render(){
        return(
          <div id={"how-its-work"} className={"firstSection"}>
              <div className={"section-container"}>
                  <header data-v-76ff8a11>
                        <h2 data-v-76ff8a11 className={"policy"}>How Neero Works</h2>
                  </header>
                  <div data-v-76ff8a11 className={"container"}>
                      <ul className="nav tabs" data-v-76ff8a11 id="myTab" role="tablist">
                          <li data-v-76ff8a11 className="li-policy active home-tab" id={"activate"}>
                              <a data-v-76ff8a11 className=""  id="home-tab" data-toggle="tab" href="#home" role="tab"
                                 aria-controls="home" aria-selected="true">Activate</a>
                          </li>
                          <li data-v-76ff8a11 className="li-policy" id={"neero"}>
                              <a className="" id="profile-tab" data-toggle="tab" href="#home" role="tab"
                                 aria-controls="profile" aria-selected="false">Neero</a>
                          </li>
                          <li data-v-76ff8a11 className="li-policy" id={"scan-qr-code"}>
                              <a className="" id="contact-tab" data-toggle="tab" href="#home" role="tab"
                                 aria-controls="contact" aria-selected="false">Scan QR code</a>
                          </li>
                          <li data-v-76ff8a11 className="li-policy" id={"send-request"}>
                              <a className="" id="cause-tab" data-toggle="tab" href="#home" role="tab"
                                 aria-controls="cause" aria-selected="false">Send request</a>
                          </li>
                      </ul>
                      <div className="tab-content" id="myTabContent">
                          <div className="tab-pane fade show active steps-container" data-v-76ff8a11 id="home" role="tabpanel"
                               aria-labelledby="home-tab">


                              <div data-v-76ff8a11 className={"img-container tab-content"}>
                                  <div className={"tab-pane fade show active"} id="first" role="tabpanel" >
                                      <img data-v-76ff8a11 src="https://images.ctfassets.net/zrqoyh8r449h/7I3yq7Q19npdTKe7TJwl4U/80fbf04dd33607efe2776d9df4a75ecf/Demo-1.1-EN.png?h=1160" alt="first" height="580px"/>
                                  </div>

                                  <div className={"tab-pane fade show"} id="second" role="tabpanel">
                                      <img data-v-76ff8a11  src="https://images.ctfassets.net/zrqoyh8r449h/6tjjXb6fH1qHSxzQAlQgtn/2b66f84ca08084b7ebf9a7b1c7035906/Demo-1.2-EN.png?h=1160" alt="second" height="580px"/>
                                  </div>
                                  <div className={"tab-pane fade show"} id="third" role="tabpanel">
                                      <img data-v-76ff8a11  src="https://images.ctfassets.net/zrqoyh8r449h/2EhRlGF2fu0k3obwN5JK5A/768697ad9708dd374951bf7ddd684f8a/Demo-1.3-EN.png?h=1160" alt="third" height="580px"/>
                                  </div>
                                  <div className={"tab-pane fade show"} id="fourth" role="tabpanel">
                                      <img data-v-76ff8a11  src="https://images.ctfassets.net/zrqoyh8r449h/2Z7AEzk1yOgavgYc9HwGkX/bd3f1ba4a2ab3be0d3e9648fef3b3ca6/Demo-1.4-EN.png?h=1160" alt="fourth" height="580px"/>
                                  </div>

                              </div>


                              <div data-v-76ff8a11 className={"info-container tab-content"}>

                                          <div data-v-76ff8a11 className={"tab-pane fade show active"} id="first" role="tabpanel">
                                              <h3 data-v-76ff8a11>Get going in a few steps</h3>
                                              <p data-v-76ff8a11>
                                                  Connect your phone number to your bank account and enjoy the possibility to send real
                                                  time payments - anywhere, anytime. Follow the guide to see how it all works.
                                              </p>
                                          </div>


                                  <div data-v-76ff8a11 className={"stepper"}>
                                      <div data-v-76ff8a11 className="line"></div>
                                      <div data-v-76ff8a11 className={"steps-wrapper nav tabs"} id={"mytabChange"} role={"tablist"}>
                                          <button data-v-76ff8a11 className={"step active"} id={"first-tab"} data-toggle="tab" href="#first" role="tab">
                                              <span data-v-76ff8a11 className={"step-inner "} id={"1"}>
                                                  <span data-v-76ff8a11 className="number" id={"fst-1"}>1</span>
                                              </span>
                                          </button>
                                          <button data-v-76ff8a11 className={"step"} data-toggle="tab" id={"second-tab"} href="#second" role="tab">
                                              <span data-v-76ff8a11 className={"step-inner active1"} id={"2"}>
                                                  <span data-v-76ff8a11 className="number" id={"snd-2"}>2</span>
                                              </span>
                                          </button>
                                          <button data-v-76ff8a11 className={"step"} data-toggle="tab" id={"third-tab"} href="#third" role="tab">
                                              <span data-v-76ff8a11 className={"step-inner active1"} id={"3"}>
                                                  <span data-v-76ff8a11 className="number" id={"thrd-3"}>3</span>
                                              </span>
                                          </button>
                                          <button data-v-76ff8a11 className={"step"} data-toggle="tab" id={"fourth-tab"} href="#fourth" role="tab">
                                              <span data-v-76ff8a11 className={"step-inner active1"} id={"4"}>
                                                  <span data-v-76ff8a11 className="number" id={"frt-4"}>4</span>
                                              </span>
                                          </button>
                                      </div>
                                  </div>

                              </div>
                          </div>

                          {/*<div className="tab-pane fade steps-container" data-v-76ff8a11 id="profile" role="tabpanel"
                               aria-labelledby="profile-tab">
                              <div data-v-76ff8a11 className={"img-container"}>
                                  <img data-v-76ff8a11 src="https://images.ctfassets.net/zrqoyh8r449h/7I3yq7Q19npdTKe7TJwl4U/80fbf04dd33607efe2776d9df4a75ecf/Demo-1.1-EN.png?h=1160" alt="" height="580px"/>
                              </div>
                              <div data-v-76ff8a11 className={"info-container"}>
                                  <div data-v-76ff8a11 className={"info-content"}>
                                      <h3 data-v-76ff8a11>Get going in a few steps</h3>
                                      <p data-v-76ff8a11>
                                          Connect your phone number to your bank account and enjoy the possibility to send real
                                          time payments - anywhere, anytime. Follow the guide to see how it all works.
                                      </p>
                                  </div>
                                  <div data-v-76ff8a11 className={"stepper"}>
                                      <div data-v-76ff8a11 className="line"></div>
                                      <div data-v-76ff8a11 className={"steps-wrapper"}>
                                          <button data-v-76ff8a11 className={"step active"}>
                                              <span className={"step-inner"}>
                                                  <span data-v-76ff8a11 className="number">1</span>
                                              </span>
                                          </button>
                                          <button data-v-76ff8a11 className={"step"}>
                                              <span data-v-76ff8a11 className={"step-inner"}>
                                                  <span data-v-76ff8a11 className="number">2</span>
                                              </span>
                                          </button>
                                          <button data-v-76ff8a11 className={"step"}>
                                              <span data-v-76ff8a11 className={"step-inner"}>
                                                  <span data-v-76ff8a11 className="number">3</span>
                                              </span>
                                          </button>
                                          <button data-v-76ff8a11 className={"step"}>
                                              <span data-v-76ff8a11 className={"step-inner"}>
                                                  <span data-v-76ff8a11 className="number">4</span>
                                              </span>
                                          </button>
                                      </div>
                                  </div>

                              </div>
                          </div>
                          <div className="tab-pane fade steps-container" data-v-76ff8a11 id="contact" role="tabpanel"
                               aria-labelledby="contact-tab">
                              <div data-v-76ff8a11 className={"img-container"}>
                                  <img data-v-76ff8a11 src="https://images.ctfassets.net/zrqoyh8r449h/7I3yq7Q19npdTKe7TJwl4U/80fbf04dd33607efe2776d9df4a75ecf/Demo-1.1-EN.png?h=1160" alt="" height="580px"/>
                              </div>
                              <div data-v-76ff8a11 className={"info-container"}>
                                  <div data-v-76ff8a11 className={"info-content"}>
                                      <h3 data-v-76ff8a11>Get going in a few steps</h3>
                                      <p data-v-76ff8a11>
                                          Connect your phone number to your bank account and enjoy the possibility to send real
                                          time payments - anywhere, anytime. Follow the guide to see how it all works.
                                      </p>
                                  </div>
                                  <div data-v-76ff8a11 className={"stepper"}>
                                      <div data-v-76ff8a11 className="line"></div>
                                      <div data-v-76ff8a11 className={"steps-wrapper"}>
                                          <button data-v-76ff8a11 className={"step active"}>
                                              <span className={"step-inner"}>
                                                  <span data-v-76ff8a11 className="number">1</span>
                                              </span>
                                          </button>
                                          <button data-v-76ff8a11 className={"step"}>
                                              <span data-v-76ff8a11 className={"step-inner"}>
                                                  <span data-v-76ff8a11 className="number">2</span>
                                              </span>
                                          </button>
                                          <button data-v-76ff8a11 className={"step"}>
                                              <span data-v-76ff8a11 className={"step-inner"}>
                                                  <span data-v-76ff8a11 className="number">3</span>
                                              </span>
                                          </button>
                                          <button data-v-76ff8a11 className={"step"}>
                                              <span data-v-76ff8a11 className={"step-inner"}>
                                                  <span data-v-76ff8a11 className="number">4</span>
                                              </span>
                                          </button>
                                      </div>
                                  </div>

                              </div>
                          </div>
                          <div className="tab-pane fade steps-container" data-v-76ff8a11 id="cause" role="tabpanel"
                               aria-labelledby="contact-tab">
                              <div data-v-76ff8a11 className={"img-container"}>
                                  <img data-v-76ff8a11 src="https://images.ctfassets.net/zrqoyh8r449h/7I3yq7Q19npdTKe7TJwl4U/80fbf04dd33607efe2776d9df4a75ecf/Demo-1.1-EN.png?h=1160" alt="" height="580px"/>
                              </div>
                              <div data-v-76ff8a11 className={"info-container"}>
                                  <div data-v-76ff8a11 className={"info-content"}>
                                      <h3 data-v-76ff8a11>Get going in a few steps</h3>
                                      <p data-v-76ff8a11>
                                          Connect your phone number to your bank account and enjoy the possibility to send real
                                          time payments - anywhere, anytime. Follow the guide to see how it all works.
                                      </p>
                                  </div>
                                  <div data-v-76ff8a11 className={"stepper"}>
                                      <div data-v-76ff8a11 className="line"></div>
                                      <div data-v-76ff8a11 className={"steps-wrapper"}>
                                          <button data-v-76ff8a11 className={"step active"}>
                                              <span className={"step-inner"}>
                                                  <span data-v-76ff8a11 className="number">1</span>
                                              </span>
                                          </button>
                                          <button data-v-76ff8a11 className={"step"}>
                                              <span data-v-76ff8a11 className={"step-inner"}>
                                                  <span data-v-76ff8a11 className="number">2</span>
                                              </span>
                                          </button>
                                          <button data-v-76ff8a11 className={"step"}>
                                              <span data-v-76ff8a11 className={"step-inner"}>
                                                  <span data-v-76ff8a11 className="number">3</span>
                                              </span>
                                          </button>
                                          <button data-v-76ff8a11 className={"step"}>
                                              <span data-v-76ff8a11 className={"step-inner"}>
                                                  <span data-v-76ff8a11 className="number">4</span>
                                              </span>
                                          </button>
                                      </div>
                                  </div>

                              </div>
                          </div>*/}
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}

export default firstSection