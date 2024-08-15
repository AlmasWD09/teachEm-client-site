import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useParams } from "react-router-dom";


const useAssignmentPostCount = () => {
    const axiosSecure = useAxiosSecure()
    const {id} = useParams();

    const {data:totalAssignment=[],refetch} = useQuery({
        queryKey: ['teacher-assignment-post',id], 
        queryFn: async() =>{
            const {data} = await axiosSecure.get(`/teacher-assignment-post/related/api/${id}`);
            return data
        }
    })
    return [totalAssignment,refetch]
}
export default useAssignmentPostCount;