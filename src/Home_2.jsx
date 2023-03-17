import React from "react";

const Home_2 = (props) => {

    const clicker = () => { 
        props.onClick(props.id);
    }
    return <button onClick={clicker}>Delete</button>

}

export default Home_2;