import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useRequeste = () => {
    const axiosPublic = useAxiosPublic();
    const {data: requestData = [],refetch} = useQuery({
        queryKey: ['request',], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/all-requested/api/get');
            return res.data;
        }
    })


    return [requestData,refetch]
}
export default useRequeste;