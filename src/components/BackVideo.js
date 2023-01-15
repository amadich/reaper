import React from 'react';
import bgV from '../videos/bg.mp4';
const BackgroundVideo = () => {
    return (
        <div>
            <video 
                style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    minWidth: "100%",
                    minHeight: "100%",
                    width: "auto",
                    height: "auto",
                    zIndex: "-1",
                }}
                autoPlay
                loop
                muted
            >
                <source src={bgV} type="video/mp4" />
                
            </video>
            {/* Your other components go here */}
        </div>
    );
}

export default BackgroundVideo;
