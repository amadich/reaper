import React from 'react';
import Copy from '../img/copy.png';
function about() {
    //const [mycopy , setMycopy] = useState("");
    return ( 
        <div className='aboutPage'>
            <ul>
                    <li id='btn_ip'><span className="span_ab_ip">IP : 127.0.0.1 <img src={Copy} width="24" alt='click-to-copy' style={{float: "right", cursor: "pointer" ,marginLeft: '10px'}} /></span></li>
                    <li className='about_ip_tit'>Building upon years of development on the Cfx.re framework, which has existed in various forms since 2014, FiveM is the original community-driven and source-available GTA V multiplayer modification project. We put the community ― both players, server owners, and the greater GTA modding community ― first.</li>
            </ul>
        </div>
     );
}

export default about