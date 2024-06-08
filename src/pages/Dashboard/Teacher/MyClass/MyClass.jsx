import { useState } from "react";
import useClass from "../../../../hooks/useClass";
import MyClassCrud from "./MyClassCrud";
import useAuth from "../../../../hooks/useAuth";



const MyClass = () => {
  const{user,loading} = useAuth()
    const [isOpen,setIsOpen] = useState(false)
    const[classess,isloading] = useClass()

    
    const handleUpdate = () =>{
        setIsOpen(true)
    }
    const closeModal=()=>{
        setIsOpen(false)
    }
    if(loading || isloading)return <p>loading......</p>
    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
         {
            classess.map(singleClass=><MyClassCrud
            key={singleClass._id}
            singleClass={singleClass}
            isOpen={isOpen}
            handleUpdate={handleUpdate}
            closeModal={closeModal}
            user={user}
            ></MyClassCrud>)
         }
        </div>
        </>
    );
};

export default MyClass;