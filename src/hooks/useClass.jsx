

import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useClass = () => {
    const axiosPublic = useAxiosPublic();
    const {data: classess = [],refetch} = useQuery({
        queryKey: ['class',], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/all-class/api/get');
            return res.data;
        }
    })


    return [classess,refetch]
};

export default useClass;