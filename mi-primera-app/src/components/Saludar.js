import React from "react";

function Saludar(props){
    const {userInfo,saludar}=props;
    const {name = "ANONIMO", years = "tiene mas de 15"} = userInfo;
    return(
        <div>
    <button onClick={() => saludar(name,years)}>Saludar</button>
        </div>
    );

}

export default Saludar;