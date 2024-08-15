import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useStatus = () => {
    const axiosPublic = useAxiosPublic();
    const {data: statusData = [], isPending: isloading, refetch} = useQuery({
        queryKey: ['all-status',], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/class/api/status/get');
            return res.data.filter((item) => item.status === "acceped");
            // return res.data;
        }
    })


    return [statusData, isloading, refetch]
};
export default useStatus;
