import React from "react";
import './Header.css';
import TopHeader from "./../TopHeader/TopHeader"
import Navbar from "./../Navbar/Navbar"


class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            isShow: true,
        }
    }
    closeTop = () =>{
        this.setState({
            isShow : false
        })
    }
    render() {
        return(
        <div className={"paraHeader"} >
            {this.state.isShow && <TopHeader onClose={this.closeTop}/>}
            <Navbar/>
        </div>
    );
    }
}

export default Header