import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";


const useEnrollClass = () => {
    const{user} = useAuth();
    const axiosPublic = useAxiosPublic();
    const {data: enrollClass = [], isPending: isloading, refetch} = useQuery({
        queryKey: ['enroll-class',user?.email], 
        queryFn: async() =>{
            const res = await axiosPublic.get(`/payment-my-enroll/api/get/${user.email}`);
            return res.data;
        }
    })


    return [enrollClass, isloading, refetch]
};

export default useEnrollClass;