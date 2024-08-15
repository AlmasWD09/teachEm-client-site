
import useAxiosSecure from './useAxiosSecure';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const useEnrollCount = () => {
    const axiosSecure = useAxiosSecure()
    const {id} = useParams();

    const {data:totalEnrollClass=[],refetch} = useQuery({
        queryKey: ['enroll-class',id], 
        queryFn: async() =>{
            const {data} = await axiosSecure.get(`/student-enroll-class/related/api/${id}`);
            return data
        }
    })
    return [totalEnrollClass,refetch]
}

export default useEnrollCount;