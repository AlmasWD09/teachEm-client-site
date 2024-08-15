import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useAllUser = () => {
    const axiosPublic = useAxiosPublic();

    const {data: users = [],refetch} = useQuery({
        queryKey: ['users'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/user/api/get');
            return res.data;
        }
    })


    return [users,refetch]
};

export default useAllUser;