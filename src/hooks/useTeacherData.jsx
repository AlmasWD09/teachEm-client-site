import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";


const useTeacherData = () => {
    const axiosPublic = useAxiosPublic();
    const{user} = useAuth()
    const {data: teacherData = [], isPending: isloading, refetch} = useQuery({
        queryKey: ['teacherData',user?.email], 
        queryFn: async() =>{
            const res = await axiosPublic.get(`/teacherClass/api/get/${user?.email}`);
            return res.data;
        }
    })


    return [teacherData, isloading, refetch]
};
export default useTeacherData;
