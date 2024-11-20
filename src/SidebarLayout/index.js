import React from "react";
import Sidebarleft from "./Sidebarleft";
import SidebarRight from "./SidebarRight";

export default function SidebarLayout(props) {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebarleft /> {/* Always visible, left */}
            <div style={{width:"100%",textAlign:"center"}}>
                {props.children} {/* Dynamic content for the main area */}
            </div>
            <SidebarRight /> {/* Always visible, right */}
        </div>
    );
}
