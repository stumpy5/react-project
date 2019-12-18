import React from "react";
import ReactDOM from "react-dom";

// Components
import Clients from "./components/clients/clients";
import Products from "./components/products/products";




const App = () => {
    return (
        <div>
            <h1>test is this your name</h1>
            <Clients clients={["wayne", "Cath" ]} name={"Joe"}/>
            <Products products={[{name:"Flake", price: 0.99},{name:"Kit-Kat", price:1.29}]}/>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));