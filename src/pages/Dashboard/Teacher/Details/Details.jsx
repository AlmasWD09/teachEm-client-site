import { useState } from "react";
import { useParams } from "react-router-dom";
import AssignmentCreateModal from "../../../../components/Modal/AssignmentCreateModal";


const Details = () => {
const {id} = useParams()
const [isOpen,setIsOpen] = useState(false)


const handleClick = () =>{
   setIsOpen(true)
}
    return (
        <div>
            {/* processing section */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <div className="">
                    <button
                    onClick={handleClick}
                    className="btn bg-green-800 rounded-full text-white">Create Assignment</button>
                    <AssignmentCreateModal isOpen={isOpen} setIsOpen={setIsOpen}/>
                </div>
                <div className="bg-green-300 text-center p-10">
                    <p>Total Enrollment</p>
                    <p className="font-bold">0</p>
                </div>
                <div className="bg-green-300 text-center p-10">
                    <p>Total Assignment</p>
                    <p className="font-bold">0</p>
                </div>
            </div>
        </div>
    );
};

export default Details;