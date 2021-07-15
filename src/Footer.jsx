import React from "react";
let Footer=()=>{
    let year=new Date().getFullYear();
        return(
        <>
        <div className="footer">
            <p>Copyrights ©️ {year}</p>
        </div>
        </>
    )
}
export default Footer;