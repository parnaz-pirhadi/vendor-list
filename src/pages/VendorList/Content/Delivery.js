import {useContext} from "react";
import vendorContext from "../../../context/VendorContext";
import DeliveryIcon from "../../../assets/icons/DeliveryIcon";
import {numberWithCommas} from "../../../utils/utils";
import {DeliveryWrapper} from "./styles";

const Delivery=()=>{
    const vendor = useContext(vendorContext);

    return(
        <DeliveryWrapper>
            <DeliveryIcon/>
            {vendor.isZFExpress ?
                <span>پیک اسنپ فود</span> :
                <span>پیک رستوران</span>

            }
            <span> : {numberWithCommas(vendor.deliveryFee)} تومان</span>
        </DeliveryWrapper>
    )
}

export default Delivery
