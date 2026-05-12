import React from "react";
import "./Main.css";
 import Header from "./Header";

export default props => {
    return (
        <React.Fragment>
            <Header {...props} />
            <main className="content">
                content
            </main>
        </React.Fragment>
    )
}