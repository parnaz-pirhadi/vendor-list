import React from "react";

const VendorList = React.lazy(() => import('../../../pages/VendorList'));


const routers = [
    {
        path: "/",
        exact: true,
        component: VendorList,
    }
]
export default routers;
