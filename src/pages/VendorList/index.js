import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import useFetchList from "../../components/customHook/useFetchList";
import { Virtuoso } from 'react-virtuoso';
import SkeletonLoading from "../../components/SkeletonLoading";
import Card from "./Card";

const VendorList=()=>{
   const [page, setPage] = useState(0);
    const [list, setList] = useState([]);

    const vendors=useSelector(state=>state.vendors)
    const {fetchList} = useFetchList();

    useEffect(()=>{
        fetchList(page)
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
