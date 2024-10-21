
import LoadindSpenier from "../../components/LoadindSpenier";
import useAuth from "../../hooks/useAuth";
import useStatus from "../../hooks/useStatus";
import Container from "../../Shared/Container/Container";
import ClassCrud from "./ClassCrud";


const AllClassess = () => {
  const {loading} = useAuth();
  const [statusData,isloading] = useStatus()
  console.log(statusData);
  if(loading || isloading) return <LoadindSpenier />
  return (
    <>
      <Container>
        <div className="pt-24">
          {
            statusData.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {
                statusData.map(singleData => <ClassCrud
                  key={singleData._id}
                  singleData={singleData}
                ></ClassCrud>)
              }
            </div>
              :
              <div className="flex justify-center items-center py-48">
                <h2 className="text-2xl font-bold ">Data Not Found</h2>
              </div>
          }
        </div>
      </Container>
    </>
  );
};

export default AllClassess;