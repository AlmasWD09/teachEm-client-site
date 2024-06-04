
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useClass = () => {
    const axiosPublic = useAxiosPublic();

    const {data: classess = [], isPending: loading, refetch} = useQuery({
        queryKey: ['class'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/classess/api/get');
            return res.data;
        }
    })


    return [classess, loading, refetch]
};

export default useClass;