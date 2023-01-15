import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Header extends Component {
    render() {
        return(
            <header>
                <ul>
               
                    <Link to="/"><li className="logoHeader"></li> </Link>
                    <Link to="/"><li id="h_li">Home</li> </Link>
                    
                    <Link to="/about"><li>About</li>  </Link>
                    <Link to="/contact"><li>Contact</li> </Link>
                   
                </ul>
                <br />
                <hr id="bar_header"/>
            </header>
        )
    }
}