import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import { Virtuoso } from 'react-virtuoso';
import {fetchVendorsData} from "../../redux/action";
import SkeletonLoading from "../../components/SkeletonLoading";

function VendorList(){
    const dispatch=useDispatch();
    const vendors=useSelector(state=>state.vendors)

    const [page, setPage] = useState(0);
    const [list, setList] = useState([]);


    const fetchMoreData = () => {
        setPage(prevState=>prevState+1)

    };

    useEffect(()=>{
        dispatch(fetchVendorsData(page))
    },[page])


    useEffect(()=>{
        if(vendors && vendors.data?.length>0){
            setList((prevState)=>[...prevState,...vendors.data])
        }

    },[vendors])

    return (
                <Virtuoso
                    data={list}
                    style={{ height: "100%"}}
                    endReached={fetchMoreData}
                    endReachedThreshold={20}
                    itemContent={(index, item) => (
                        <div style={{ padding: '10px', borderBottom: '1px solid #ccc',height:"300px"}}>{item.type}</div>
                    )}
                    components={{ Footer : vendors.loading ? SkeletonLoading:null }}
                />
    );
}

export default VendorList;
