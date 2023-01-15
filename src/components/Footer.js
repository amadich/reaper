import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return(
            <footer>
                <p>
                    Copyright © 2023 Developed by amadich
                    <br />
                    <a target="_blank" rel="noreferrer" href="https://github.com/amadich" style={{color: "orange"}}>
                        GitHub/amadich
                    </a>
                </p>
            </footer>
        )
    }
}