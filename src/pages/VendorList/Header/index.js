import { useContext } from "react";
import vendorContext from "../../../context/VendorContext";
import {BackgroundImage, ProfileImage, HeaderWrapper, OverlayImage} from "./styles";

const Index = () => {
    const vendor  = useContext(vendorContext);

    return (
        <HeaderWrapper>
            <OverlayImage src="https://m.snappfood.ir/9a8c9c8510acd3f05587cdf638a1f122.svg"/>
            <BackgroundImage src={vendor.backgroundImage}/>
            <ProfileImage src={vendor.defLogo}/>
        </HeaderWrapper>
    )

}

export default Index
