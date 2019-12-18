import React, {Fragment} from "react";

// Styles
import StyledDiv from "./products.css";

const Products = (props) => {
    console.log(props);
    return (
        <Fragment>{
            props.products.map((product, index)=>{
                return (
                    <StyledDiv key={index}>
                        <p>Name: <b>{product.name}</b></p>
                        <button>£{product.price}</button>
                    </StyledDiv>
                )
            })
        }</Fragment>
    );
}


export default Products;