
import useAuth from './useAuth';

import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
const useRole = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: role =''} = useQuery({
        queryKey: ['role',user?.email], 
        queryFn: async() =>{
            const {data} = await axiosSecure.get(`/user/api/get/${user.email}`);
            return data.role
        }
    })


    return [role]
};


export default useRole;