import {useContext} from "react";
import StarIcon from "../../../assets/icons/StarIcon";
import {numberWithCommas} from "../../../utils/utils";
import {Rate, RateWrapper} from "./styles";
import vendorContext from "../../../context/VendorContext";

const Rates = () => {
    const vendor = useContext(vendorContext);
    return (
        <RateWrapper>
            <Rate rate={vendor.rate >= 4.5 ? "OK" : "NOT_OK"}>
                <StarIcon/>
                {vendor.rate}
            </Rate>
            <span>({numberWithCommas(vendor.voteCount)})</span>

        </RateWrapper>
    )
}
export default Rates;
