import {useDispatch} from 'react-redux';
import {fetchVendorsData} from "../../redux/action";


function useFetchList() {
    const dispatch = useDispatch();

    const fetchList = (page) => {
        dispatch(fetchVendorsData(page))
    };

    return {fetchList};
}

export default useFetchList;
