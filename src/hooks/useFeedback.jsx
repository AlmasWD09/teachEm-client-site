import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useFeedback = () => {
    const axiosPublic = useAxiosPublic();
    const {data: feedbackData = [], isPending: isloading, refetch} = useQuery({
        queryKey: ['feedback'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/all-feedback/api/get');
            return res.data;
        }
    })


    return [feedbackData, isloading, refetch]
};

export default useFeedback;