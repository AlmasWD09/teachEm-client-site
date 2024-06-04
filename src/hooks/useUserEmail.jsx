
import useAuth from './useAuth';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
const useUserEmail = () => {
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic();
    const {data: singleUser = []} = useQuery({
        queryKey: ['singleUser',user?.email], 
        queryFn: async() =>{
            const res = await axiosPublic.get(`/user/api/get/${user.email}`);
            return res.data;
        }
    })


    return [singleUser]
};

export default useUserEmail;