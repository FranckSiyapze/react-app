import React from "react"
import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import FirstSection from "./FirstSection/FirstSection"
import Dropdown from "./Dropdown/Dropdown";
import DoMore from "./DoMore/DoMore";
import BetterLife from "./BetterLife/BetterLife"
import Passport from "./Passport/Passport";
import TrustedStore from "./TrustedStore/TrustedStore";
import Partners from "./Partners/Partners";
import Question from "./Question/Question";
import Footer from "./Footer/Footer";

class App extends React.Component{
  
  render(){
    return (
      <div className="App">
        <Header/>
        <Banner/>
        <Dropdown/>
        <FirstSection/>
        <DoMore/>
        <BetterLife/>
        <Passport/>
        <TrustedStore/>
        <Partners/>
        <Question/>
        <Footer/>
        {/*<header className="App-header" style={{position:"relative"}}>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>*/}
    </div>
  );
  }
}


export default App;
