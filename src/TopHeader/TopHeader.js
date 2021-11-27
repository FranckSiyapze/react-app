import React from "react"
import {MDBIcon, } from "mdbreact";
import "./TopHeader.css"


class TopHeader extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return(
      <div className={"superHeader"} >
                    <div className={"subHeader"}>
                        <div className={"subHeader1"}>
                            <a href="#" className={"topHeader"} style={{fontWeight: "bold"}}>
                        Coronavirus (COVID-19) resources and updates.
                        Here is how OPay is supporting our community through COVID-19
                                <span className={"hfLtQw jOnhZW"}>
                                    <MDBIcon icon="arrow-right"  />
                                </span>
                            </a>
                            <MDBIcon icon="times" onClick={this.props.onClose} className={"white-text"} />
                        </div>
                    </div>
                </div>
    );
    }
}


export default TopHeader;