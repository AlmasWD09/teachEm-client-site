import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";



const WebsiteInfo = () => {
    const axiosSecure = useAxiosSecure();
    const { data: totalData = {},} = useQuery({
        queryKey: ['total-data'],
        queryFn: async () => {
          const { data } = await axiosSecure.get('/totalData/count/related/api',);
          return data;
        },
      })


    return (
        <div className="lg:mt-10">
            <h1 className="text-3xl font-semibold uppercase text-center mb-5">Website All Information</h1>

            <div className="bg-gray-300 flex flex-col lg:flex-row justify-center py-8 rounded-lg">
                <div className="w-[30%] text-center">
                    <p className="text-5xl text-primary font-semibold">{totalData.user}</p>
                    <p className="text-4xl font-semibold">Total User</p>
                </div>
                <div className="w-[30%] text-center">
                <p className="text-5xl text-red-400 font-semibold">{totalData.classes}</p>
                <p className="text-4xl font-semibold">Total Classes</p>
                </div>
                <div className="w-[30%] text-center">
                <p className="text-5xl text-green-400 font-semibold">{totalData.enroll}</p>
                <p className="text-4xl font-semibold">Total Enrollment</p>
                </div>
            </div>
        </div>
    );
};

export default WebsiteInfo;