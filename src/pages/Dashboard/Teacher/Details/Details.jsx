import { useState } from "react";
import AssignmentCreateModal from "../../../../components/Modal/AssignmentCreateModal";
import useAssignmentPostCount from "../../../../hooks/useAssignmentPostCount";
import useEnrollCount from "../../../../hooks/useEnrollCount";



const Details = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [totalAssignment,refetch] = useAssignmentPostCount();
    const [totalEnrollClass] = useEnrollCount();



    const handleClick = () => {
        setIsOpen(true)
    }
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
                    <p>Total Assignment Post<span className="text-2xl font-bold">{totalAssignment.totalAssignmentPost}</span></p>
                    <p className="font-bold"></p>
                </div>
                <div className="bg-green-300 text-center p-5">
                    <p>Total Assignment Submit:<span className="text-2xl font-bold">0000</span></p>
                    <p className="font-bold"></p>
                </div>
                <div className="bg-green-300 text-center p-5">
                    <p>Total Enrollment: <span className="text-2xl font-bold">{totalEnrollClass.totalEnrollClass}</span></p>
                    <p className="font-bold"></p>
                </div>
            </div>
        </div>
    );
};
export default Details;