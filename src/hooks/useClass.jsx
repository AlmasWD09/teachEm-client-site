
import useAuth from './useAuth';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useClass = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();
    const {data: classess = [], isPending: isloading, refetch} = useQuery({
        queryKey: ['class',user?.email], 
        queryFn: async() =>{
            const res = await axiosPublic.get(`/teacherClass/api/get/${user?.email}`);
            return res.data;
        }
    })


    return [classess, isloading, refetch]
};

export default useClass;