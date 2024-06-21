import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useEnrollClass = () => {
    const axiosPublic = useAxiosPublic();
    const {data: enrollClass = [], isPending: isloading, refetch} = useQuery({
        queryKey: ['enroll-class',], 
        queryFn: async() =>{
            const res = await axiosPublic.get(`/payment/api/get/almashossain7384@gmail.com`);
            return res.data;
        }
    })


    return [enrollClass, isloading, refetch]
};

export default useEnrollClass;