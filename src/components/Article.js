import React, { Component } from "react";
export default class Article extends Component {
    render()
    {
        return(
            <article>
                <ul>
                    <li className="logo_gta"></li>
                    <li className="tit">Rea<span style={{color: "orange"}}>per</span> <i style={{fontSize: "10px",color: "limegreen"}}>Owner Yamen</i></li> <br></br>

                    <li className="ab_tit">
                        Building upon years of development on the Cfx.re framework, which has existed in various forms since 2014, FiveM is the original community-driven and source-available GTA V multiplayer modification project.
                        We put the community ― both players, server owners, and the greater GTA modding community ― first.
                        <br/><br/><br/>
                        Reaper is built for creativity. Create your own server and make your dreams come true.
                        
                    </li>

                    <a target="_blank" rel="noreferrer" href={"https://discord.gg/v7TrhpbQ"} ><button>GO <span style={{color: "pink"}}>Discord</span> Now</button> </a>
                </ul>
            </article>
        )
    }
}