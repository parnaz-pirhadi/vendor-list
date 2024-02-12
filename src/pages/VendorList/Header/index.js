import { useContext } from "react";
import vendorContext from "../../../context/VendorContext";
import {BackgroundImage, ProfileImage, HeaderWrapper, OverlayImage} from "./styles";

const Index = () => {
    const vendor  = useContext(vendorContext);

    return (
        <HeaderWrapper>
            <OverlayImage src="https://m.snappfood.ir/9a8c9c8510acd3f05587cdf638a1f122.svg" alt={vendor.title}/>
            <BackgroundImage src={vendor.backgroundImage} alt={vendor.title}/>
            <ProfileImage src={vendor.defLogo} alt={vendor.title}/>
        </HeaderWrapper>
    )

}

export default Index
