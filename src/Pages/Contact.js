import React from "react";

export default function Contact() {
    return(
        <>
        <div className="contact_me">
            <div className="logo_greenv"></div>
            <p>
                Reaper is built for creativity. Create your own server and make your dreams come true.
            </p>
            <div className="inp">
                <label><span style={{color:"whitesmoke",padding: "2em"}}>Email / Username </span> <input type="text" placeholder="Username" className="in1" /></label>
                <label><span style={{color:"whitesmoke",padding: "2em"}}>Password </span><input type="password" placeholder="Password" className="in1" /> </label>
                <button>Not Allow</button>
            </div>
        </div>
        </>
    )
}