import React from "react";
import PropTypes from "prop-types";
import vendorContext from "../../context/VendorContext"
import {CardContainer} from "./styles";

import Header from "./Header"
import Content from "./Content";

const Card = (props) => {
    const vendor = props.vendor;

    return (
        <CardContainer>
            <section>
                <vendorContext.Provider value={vendor}>
                    <Header/>
                    <Content/>
                </vendorContext.Provider>
            </section>
        </CardContainer>
    )

}

export default React.memo(Card);

Card.propTypes = {
    vendor: PropTypes.object
};
