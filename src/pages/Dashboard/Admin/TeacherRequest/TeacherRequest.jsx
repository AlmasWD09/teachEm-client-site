import { Helmet } from "react-helmet-async";
import useRequeste from "../../../../hooks/useRequeste";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useTheme from "../../../../hooks/useTheme";



const TeacherRequest = () => {
    const theme = useTheme()
    const [requestData,refetch] = useRequeste()
    const axiosSecure = useAxiosSecure()
  

    const handleApproved = async(id,email) => {

        const requestInfo = {
            role:'teacher',
            status:'accepted',
        }
        const {data} =await axiosSecure.patch(`/requested/api/role/update/${id}`,requestInfo)
        console.log(data);



        const userRoleUpdate = {
            role:'teacher',
        }
        const res =await axiosSecure.patch(`/user/api/role/${email}`,userRoleUpdate)
        console.log(res.data);
        refetch()
    }



    const handleReject = async(id) =>{
        const requestInfo = {
            status:'reject',
        }
        const {data} =await axiosSecure.patch(`/requested/api/role/update/${id}`,requestInfo)
        console.log(data);
        refetch()
    }


    return (
        <>
            <div className='container mx-auto px-4 sm:px-8'>
                <Helmet>
                    <title>TeaceEm || Teacher Requeste</title>
                </Helmet>
                <div className='py-8'>
                    <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                        <div className='inline-block min-w-full shadow rounded-lg overflow-hidden '>
                            <table className='min-w-full leading-normal '>
                                <thead>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Image
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Email
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Experience
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Title
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Category
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Role
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Action(A)
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Action(R)
                                        </th>
                                    </tr>
                                </thead>



                                <tbody>
                                    {
                                        requestData?.map(reqData => <tr key={reqData._id}>
                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                <img className="w-10 h-10 rounded-full" src={reqData?.photo} alt="" />
                                            </td>
                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                <p className='text-gray-900 whitespace-no-wrap'>{reqData?.name}</p>
                                            </td>
                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                <p className='text-gray-900 whitespace-no-wrap'>{reqData?.email}</p>
                                            </td>
                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                <p className='text-gray-900 whitespace-no-wrap'>{reqData?.experience}</p>
                                            </td>
                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                <p className='text-gray-900 whitespace-no-wrap'>{reqData?.title}</p>
                                            </td>
                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                <p className='text-gray-900 whitespace-no-wrap'>{reqData?.category}</p>
                                            </td>
                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                {reqData?.status ? (
                                                    <p
                                                        className={`${reqData.status === 'Verified' ? 'text-green-500' : 'text-yellow-600'
                                                            } whitespace-no-wrap`}
                                                    >
                                                        {reqData.status}
                                                    </p>
                                                ) : (
                                                    <p className='text-red-500 whitespace-no-wrap'>Unavailable</p>
                                                )}
                                            </td>
                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                <p className='text-gray-900 whitespace-no-wrap bg-green-100 px-2 py-1 rounded-full'>{reqData?.role}</p>
                                            </td>
                                            
                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                            <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                                                <span
                                                    aria-hidden='true'
                                                    className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                                                ></span>
                                                <button 
                                                 onClick={()=>handleApproved(reqData._id,reqData.email)}
                                                className='relative'>Approved </button>
                                            </span>
                                        </td>
                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                                                    <span
                                                        aria-hidden='true'
                                                        className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
                                                    ></span>
                                                    <button
                                                        onClick={() => handleReject(reqData._id)}
                                                        className='relative'>Reject</button>
                                                </span>
                                            </td>
                                        </tr>)
                                    }
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeacherRequest;