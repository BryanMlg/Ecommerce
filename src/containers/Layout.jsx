import React from "react";
import Header from "@components/Header.jsx";

// eslint-disable-next-line react/prop-types
export default function Layout({children}){
    return(
        <div className="Layout">
            <Header />
            {children}
        </div>
    );
}
