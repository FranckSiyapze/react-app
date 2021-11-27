import React from "react"
import "./Passport.css"
class Passport extends React.Component{
    render() {
        return(
            <div className={"subHeader"}>
                <div className={"dbNpnS"}>
                    <h2 className={"kTakdN"}>OPay Cards, Your Passport To The
                        <div className={"ewSejN"}>World</div>
                    </h2>
                    <p className={"eETszF"}>
                        With our physical debit cards, you can make payments for goods, services and international subscriptions from your OPay wallet. Make offline or online payments seamlessly with your OPay card and partake in our Generous Reward Program.
                    </p>
                </div>
                <div className={"hMmwTi"}>
                    <div className={"ecCvbo "} style={{position: "relative", overflow:"hidden"}}>
                        <div aria-hidden="true" style={{width:"100%", paddingBottom:"128%"}}></div>
                        <img
                            src={"data:image/png;base64,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"}
                             style={{position:"absolute",
                                     top:"0px",
                                     left:"0px",
                                     width:"100%",
                                     height:"100%",
                                     objectFit:"cover",
                                     objectPosition:"center center",
                                    opacity:"0"
                                 }}
                        />
                        <picture>
                            <source srcSet="https://opayweb.com/static/35a4cca03eea981dd64f36e615a60076/a90ce/card-hand.png 125w,
                                            https://opayweb.com/static/35a4cca03eea981dd64f36e615a60076/002c1/card-hand.png 250w,
                                            https://opayweb.com/static/35a4cca03eea981dd64f36e615a60076/53f65/card-hand.png 500w,
                                            https://opayweb.com/static/35a4cca03eea981dd64f36e615a60076/f26e3/card-hand.png 750w,
                                            https://opayweb.com/static/35a4cca03eea981dd64f36e615a60076/5d2c5/card-hand.png 1000w,
                                            https://opayweb.com/static/35a4cca03eea981dd64f36e615a60076/35c76/card-hand.png 1106w"
                                    sizes="(max-width: 500px) 100vw, 500px"/>
                                <img
                                sizes="(max-width: 500px) 100vw, 500px"
                                srcSet="https://opayweb.com/static/35a4cca03eea981dd64f36e615a60076/a90ce/card-hand.png 125w,
                                        https://opayweb.com/static/35a4cca03eea981dd64f36e615a60076/002c1/card-hand.png 250w,
                                        https://opayweb.com/static/35a4cca03eea981dd64f36e615a60076/53f65/card-hand.png 500w,
                                        https://opayweb.com/static/35a4cca03eea981dd64f36e615a60076/f26e3/card-hand.png 750w,
                                        https://opayweb.com/static/35a4cca03eea981dd64f36e615a60076/5d2c5/card-hand.png 1000w,
                                        https://opayweb.com/static/35a4cca03eea981dd64f36e615a60076/35c76/card-hand.png 1106w"
                                src="https://opayweb.com/static/35a4cca03eea981dd64f36e615a60076/53f65/card-hand.png" alt="OPay Card"
                                loading="lazy"
                                style={{position:"absolute",
                                     top:"0px",
                                     left:"0px",
                                     width:"100%",
                                     height:"100%",
                                     objectFit:"cover",
                                     objectPosition:"center center",
                                    opacity:"1"
                                 }}
                                />
                        </picture>
                    </div>
                </div>
            </div>
        );
    }
}
export default Passport