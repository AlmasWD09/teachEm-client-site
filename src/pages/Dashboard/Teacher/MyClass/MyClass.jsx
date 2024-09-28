import { useState } from "react";

import MyClassCrud from "./MyClassCrud";
import useAuth from "../../../../hooks/useAuth";
import LoadindSpenier from "../../../../components/LoadindSpenier";
import useTeacherData from "../../../../hooks/useTeacherData";




const MyClass = () => {
  const{user,loading} = useAuth()
    const [isOpen,setIsOpen] = useState(false)
    const [teacherData, isloading, refetch] = useTeacherData()
    
    const handleUpdate = () =>{
        setIsOpen(true)
    }
    const closeModal=()=>{
        setIsOpen(false)
    }
    if(loading || isloading)return <LoadindSpenier />
    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
         {
            teacherData.map(singleClass=><MyClassCrud
            key={singleClass._id}
            singleClass={singleClass}
            isOpen={isOpen}
            handleUpdate={handleUpdate}
            closeModal={closeModal}
            user={user}
            refetch={refetch}
            ></MyClassCrud>)
         }
        </div>
        </>
    );
};

export default MyClass;