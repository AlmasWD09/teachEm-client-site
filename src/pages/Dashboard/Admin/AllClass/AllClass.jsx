import { Helmet } from "react-helmet-async";
import useClass from "../../../../hooks/useClass";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useTheme from "../../../../hooks/useTheme";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";




const AllClass = () => {
    const theme = useTheme()
    const {user} = useAuth();
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const [classess, refetch] = useClass()
    // console.log(classess);

    const handleReject = async (id) => {

        const rejectInfo = {
            rejectId: id,
            status: 'reject'
        }
        const { data } = await axiosSecure.patch(`/class/api/status/update/${id}`, rejectInfo)
        refetch()
    }
    const handleApproved = async (id) => {
        const classInfo = {
            approvedId: id,
            status: 'acceped',
        }
        const { data } = await axiosSecure.patch(`/class/api/status/update/${id}`, classInfo)
        refetch()
    }

    // see projess page
    const handleSeeProgaess = (id) => {
        navigate(`/dashboard/see-prograess/${id}`)
    }

    return (
        <>
            <div className='container mx-auto px-4 sm:px-8'>
                <Helmet>
                    <title>TeaceEm || All Class</title>
                </Helmet>
                <div className='py-8'>
                    <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                        <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                            <table className='min-w-full leading-normal'>
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
                                            Title
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
                                            Description
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Approved button
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Reaject button
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            SeeProgress button
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Status
                                        </th>
                                    </tr>
                                </thead>



                                <tbody>
                                    {classess.map(singleClass => <tr key={singleClass._id}>
                                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                            <img className="w-20 h-12 object-cover rounded-full" src={singleClass.image} alt="" />
                                        </td>
                                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                            <p className='text-gray-900 whitespace-no-wrap'>{singleClass.title}</p>
                                        </td>
                                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                            <p className='text-gray-900 whitespace-no-wrap'>{singleClass.email || 'NOT FUND'}</p>
                                        </td>
                                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                            <p className='text-gray-900 whitespace-no-wrap'>{singleClass.description}</p>
                                        </td>
                                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                            <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                                                <span
                                                    aria-hidden='true'
                                                    className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                                                ></span>
                                                <button
                                                    onClick={() => handleApproved(singleClass._id)}
                                                    className='relative'>Approved</button>
                                            </span>
                                        </td>
                                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                           
                                                <button
                                                disabled={singleClass?.status === "reject"}
                                                onClick={()=>handleReject(singleClass._id)}
                                                className='btn-sm bg-orange-100 rounded-full disabled:cursor-not-allowed'>Reaject</button>
                                    
                                        </td>

                                        {/* <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                            <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                                                <span
                                                    aria-hidden='true'
                                                    className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                                                ></span>
                                                <button
                                                    onClick={() => handleApproved(singleClass._id)}
                                                    className='relative'>See Progress</button>
                                            </span>
                                        </td> */}
                                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                {/* <span
                                                    aria-hidden='true'
                                                    className='absolute inset-0 bg-green-300 rounded-full'
                                                ></span> */}
                                                <button
                                                    disabled={singleClass?.status !== "acceped" || singleClass?.status === "reject"}
                                                    onClick={()=>handleSeeProgaess(singleClass._id)}
                                                    className={`${singleClass?.status === "pending" || singleClass?.status === "reject" ? 'cursor-not-allowed btn btn-sm rounded-full' : 'btn-sm cursor-pointer px-3 py-1 font-semibold bg-green-300 rounded-full'}`}>SeeProgress</button>
                                        </td>
                                        {/* <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                            <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                                                <span
                                                    aria-hidden='true'
                                                    className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
                                                ></span>
                                                <button
                                                    onClick={() => handleReject(singleClass._id)}
                                                    className='relative'>Reaject</button>
                                            </span>
                                        </td> */}
                                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                            <button className='cursor-none'>{singleClass.status}</button>
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

export default AllClass;