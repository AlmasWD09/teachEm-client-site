
import useStatus from "../../hooks/useStatus";
import ClassCrud from "./ClassCrud";


const AllClassess = () => {
    const [statusData] = useStatus()
    return (
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            statusData.map(singleData=><ClassCrud 
            key={singleData._id}
            singleData={singleData}
            ></ClassCrud>)
          }
          </div>
        </div>
    );
};

export default AllClassess;