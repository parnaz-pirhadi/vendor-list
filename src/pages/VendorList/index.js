import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import { Virtuoso } from 'react-virtuoso';
import {fetchVendorsData} from "../../redux/action";
import SkeletonLoading from "../../components/SkeletonLoading";
import Card from "./Card";

const VendorList=()=>{
    const dispatch=useDispatch();
    const vendors=useSelector(state=>state.vendors)

    const [page, setPage] = useState(0);
    const [list, setList] = useState([]);

    useEffect(()=>{
        dispatch(fetchVendorsData(page))
    },[page]);

    useEffect(()=>{
        if(vendors && vendors.data?.length>0){
            setList((prevState)=>[...prevState,...vendors.data])
        }

    },[vendors])

    const fetchMoreData = () => {
            setPage(prevState => prevState + 1)
    };

    return (
            <Virtuoso
                data={list}
                endReached={fetchMoreData}
                endreachedthreshold={20}
                itemContent={(index, vendor) => <Card vendor={vendor.data}/>}
                components={{ Footer : vendors.loading ? SkeletonLoading:null }}
            />

    );
}

export default VendorList;
