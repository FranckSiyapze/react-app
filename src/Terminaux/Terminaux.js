import React from "react";
import "./Terminaux.css"

class Terminal extends React.Component{
    render() {
        return(
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-4"}>
                        <div className="card card-terminal">
                            <img
                                src="https://mk0yavincomje5ln1qs0.kinstacdn.com/wp-content/uploads/2021/03/IMG_1663.jpg"
                                className="card-img-top img-terminal"/>
                                <div className="card-body">
                                    <h5 className="card-title">MINI X</h5>
                                    <p className="card-text">Ultra compact le MINI X tient dans votre poche et vous suivra partout</p>
                                </div>
                        </div>
                    </div>
                    <div className={"col-4"}>
                        <div className="card card-terminal">
                            <img
                                src="https://mk0yavincomje5ln1qs0.kinstacdn.com/wp-content/uploads/2021/03/IMG_3673.jpg"
                                className="card-img-top img-terminal"/>
                                <div className="card-body">
                                    <h5 className="card-title">YAVIN X</h5>
                                    <p className="card-text">Terminal mobile avec batterie longue durée et imprimante intégrée</p>
                                </div>
                        </div>
                    </div>
                    <div className={"col-4"}>
                        <div className="card card-terminal">
                            <img
                                src="https://mk0yavincomje5ln1qs0.kinstacdn.com/wp-content/uploads/2021/03/IMG_3683.jpg"
                                className="card-img-top img-terminal"/>
                                <div className="card-body">
                                    <h5 className="card-title">YAVIN X FIXE PINPAD</h5>
                                    <p className="card-text">Le X PINPAD est idéal pour les encaissements à un point fixe. (caisses, comptoirs)</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Terminal