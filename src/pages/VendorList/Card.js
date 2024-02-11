import React from "react";
import vendorContext from "../../context/VendorContext"
import {CardContainer} from "./styles";

import Header from "./Header"
import Content from "./Content";

const Card = ({vendor}) => {

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
