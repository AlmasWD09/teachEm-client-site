

import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useClass = () => {
    const axiosPublic = useAxiosPublic();
    const {data: HighestClasse = [],refetch} = useQuery({
        queryKey: ['class',], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/higest/enroll-class/api/get');
            return res.data;
        }
    })


    return [HighestClasse,refetch]
};

export default useClass;