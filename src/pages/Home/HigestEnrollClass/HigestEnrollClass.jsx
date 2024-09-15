import useClass from "../../../hooks/useClass";
import HigestEnrollClassCrud from "./HigestEnrollClassCrud";


const HigestEnrollClass = () => {
    const [HighestClasse] = useClass();
    
    return (
        <div>
            <div className="bg-gray-300 flex justify-center gap-6 py-4 rounded">
                <h1 className="text-3xl font-semibold uppercase">higest enroll class</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-24 mt-10">
               {
                HighestClasse.map((singleClass,idx)=>{
                    return(
                        <HigestEnrollClassCrud key={idx} singleClass={singleClass} />
                    )
                })
               }
            </div>
        </div>
    );
};

export default HigestEnrollClass;