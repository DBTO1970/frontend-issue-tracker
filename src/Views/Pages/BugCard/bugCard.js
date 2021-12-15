import React from "react";
import './bugCard.css';

const BugCard = (props) => {
    const {name, priority, version} = props.bug;
    function Clicked (){
        props.Clicked(props.name);
    }
    return (
        <div className="bug-card" onClick={Clicked}>
            <h2 className="name">{name}</h2>
            <h4 className="priority">{priority}</h4>
            <h2 className="version">{version}</h2>
        </div>
    )
}

export default BugCard;