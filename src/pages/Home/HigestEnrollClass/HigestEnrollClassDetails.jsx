import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Container from "../../../Shared/Container/Container";
import { useParams } from "react-router-dom";


const HigestEnrollClassDetails = () => {
    const { id } = useParams()
    const axiosSecure = useAxiosSecure()
    const { data: highestSingleClass = {}, refetch } = useQuery({
        queryKey: ['single-class', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/class/api/get/${id}`);
            return res.data;
        }
    })

    const { _id, image, title, teacherName, teacherEmail, price, description, total_enrolment } = highestSingleClass || {}
    return (
        <>
            <Container>
                <div className="pt-24">
                    <div className="max-w-2xl mx-auto  bg-white rounded-lg shadow-md mt-2">
                        <img
                            className="object-cover object-center w-full h-64 md:h-96 rounded-lg"
                            src={image}
                            alt={name}
                        />

                        <div className="p-6">
                            <div>
                                <p><span className="text-xs font-medium text-blue-600 ">Class Id: </span> ({_id})</p>
                                <h3
                                    className="text-2xl font-bold tracking-tight text-gray-700 "
                                    >{title}
                                </h3>
                                <p>{description}</p>
                               
                            </div>

                            <div className="mt-4">
                            <p className="text-sm text-gray-600 uppercase">{teacherName}</p>
                                <p className="text-sm text-gray-600 ">{teacherEmail}</p>
                                <p>Price: <span className="font-bold">{price}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default HigestEnrollClassDetails;