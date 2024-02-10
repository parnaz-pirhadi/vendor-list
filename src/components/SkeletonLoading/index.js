import {SkeletonLoader, SkeletonWrapper} from "./styles";

const SkeletonLoading = () => {
    return (
        <SkeletonWrapper>
            <SkeletonLoader width="100%" height="200px" />
            <SkeletonLoader width="40%" height="20px" />
            <SkeletonLoader width="30%" height="20px" />
        </SkeletonWrapper>
    );
};

export default SkeletonLoading;
