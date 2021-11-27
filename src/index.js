import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import './index.css';
import App from './App';
import Loan from "./Loan";
import reportWebVitals from './reportWebVitals';
import AboutUs from './about-us';
import Merchant from './merchant'
import Error from "./404.js"
import Faq from "./Faq";
import ContactUs from "./contact-us";
import New from "./New";
import Register from './register';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import common_fr from "./translations/fr/common.json";
import common_en from "./translations/en/common.json";

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

i18next.init({
    interpolation: {escapeValue: false},  // React already does escaping
    lng: window.localStorage.getItem('lang') ? window.localStorage.getItem('lang') :'EN',                              // language to use
    resources: {
        EN: {
            common: common_en               // 'common' is our custom namespace
        },
        FR: {
            common: common_fr
        },
    },
});

ReactDOM.render(
    <Router>
        <I18nextProvider i18n={i18next}>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route exact path='/loan/how-it-work' component={Loan}/>
                <Route exact path='/about-us' component={AboutUs}/>
                <Route exact path='/merchants' component={Merchant}/>
                <Route exact path='/faq' component={Faq}/>
                <Route exact path='/contact-us' component={ContactUs}/>
                <Route exact path='/news' component={New}/>
                <Route exact path='/register' component={Register}/>
                <Route path='*' exact={true} component={Error}/>
                {/* <Route path='/edit/:id' component={Edit} /> */}
                {/*<Route path='/edit/:id' component={Edit} />*/}
            </Switch>
        </I18nextProvider>
    </Router>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
