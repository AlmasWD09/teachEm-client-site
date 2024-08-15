import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useParams } from "react-router-dom";


const useEnrollDetails = () => {
    const axiosSecure = useAxiosSecure();
    const {id} = useParams();

    const { data: enrollDetails = [],refetch} = useQuery({
        queryKey: ["my-enrollDetails",id],
        queryFn: async () => {
          const { data } = await axiosSecure(`/payment-myEnroll-details/api/get/${id}`);
          return data;
        },
      });
      return [enrollDetails,refetch]
};

export default useEnrollDetails;