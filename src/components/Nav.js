import React, { Component } from "react";
import Marquee from "react-fast-marquee";
export default class Nav extends Component{
    render() {
        return(
            <nav>
                <Marquee gradient={false} speed={50} className="mq">
                    <span style={{fontSize: "large", color: "orange"}}>Reaper </span> ,   is a modification for Grand Theft Auto V enabling you to play multiplayer on customized dedicated servers, powered by Cfx.re. 🍂
                </Marquee>
            </nav>
        )
    }
}