import React from "react";
import user from "../images/user.jpg"
const ContactCard = (props) => {
    const {_, name, email} = props.contact
    return (

        <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
        <div className="content">
            <div className="header">
                {name}
            </div>
            <div>
                {email}
            </div>
        </div>
        <i 
        className="trash alternate outline icon right floated"
        style = {{ color: "red", marginTop: "7px"}}> </i>
    </div>



    );
};


export default ContactCard;