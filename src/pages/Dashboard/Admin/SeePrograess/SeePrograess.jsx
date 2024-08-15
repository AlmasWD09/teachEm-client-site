import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SeePrograessCrud from "./SeePrograessCrud";


const SeePrograess = () => {
    const { id } = useParams()
    const axiosSecure = useAxiosSecure()
    // get data by api and use to transStack query
    const { data: feedbackData = [] } = useQuery({
        queryKey: ["single-feedback", id],
        queryFn: async () => {
            const { data } = await axiosSecure(`/feedbackData/api/get/${id}`);
            return data;
        },
    });
    return (
        <>
           <section>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    feedbackData.map((item, idx) => {
                        return (
                            <SeePrograessCrud key={idx} item={item} />
                        )
                    })
                }
            </div>
           </section>
        </>
    );
};

export default SeePrograess;