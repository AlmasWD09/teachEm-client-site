import { useState } from "react";
import { useParams } from "react-router-dom";
import AssignmentCreateModal from "../../../../components/Modal/AssignmentCreateModal";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const Details = () => {
const {id} = useParams()
const [isOpen,setIsOpen] = useState(false)

const handleClick = () =>{
   setIsOpen(true)
}

const axiosPublic = useAxiosPublic();
const {data: assignmentData = [], refetch} = useQuery({
    queryKey: ['assignment-data',id], 
    queryFn: async() =>{
        const res = await axiosPublic.get(`/assignment/api/get/${id}`);
        return res.data;
    }
   
})
    return (
        <div>
            {/* processing section */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <div className="">
                    <button
                    onClick={handleClick}
                    className="px-8 py-2.5 rounded-full leading-5 text-white transition-colors duration-300 transform bg-primary hover:bg-primary/60 focus:outline-none focus:bg-primary">Create Assignment</button>
                    <AssignmentCreateModal isOpen={isOpen} setIsOpen={setIsOpen} refetch={refetch}/>
                </div>
                <div className="bg-green-300 text-center p-5">
                    <p>Total Enrollment</p>
                    <p className="font-bold">{assignmentData.length}</p>
                </div>
                <div className="bg-green-300 text-center p-5">
                    <p>Total Assignment</p>
                    <p className="font-bold">{assignmentData.length}</p>
                </div>
            </div>
        </div>
    );
};
export default Details;