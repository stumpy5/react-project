import React from "react";

const Clients = (props) => {
    console.log(props);
    return (
        <div>{
           props.clients.map((client, index)=>{
               return <p key={index}>My Name is {client}</p>
           }) 
        }</div>
    );
}

export default Clients;