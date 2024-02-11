import {useContext} from "react";
import vendorContext from "../../../context/VendorContext";
import {Description, Title, TitleWrapper} from "./styles";
import Rates from "./Rate";

const Info=()=>{
    const vendor = useContext(vendorContext);
    return(
        <>
            <TitleWrapper>
                <Title>
                    {vendor.title}
                </Title>
                <Rates/>
            </TitleWrapper>
            <Description>
                {vendor.description}
            </Description>
        </>
    )
}

export default Info
