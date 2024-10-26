import { Helmet } from "react-helmet-async";
import useClass from "../../../../hooks/useClass";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useTheme from "../../../../hooks/useTheme";
import { useNavigate } from "react-router-dom";





const AllClass = () => {
    const theme = useTheme()
    console.log(theme);
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
        // console.log(data);
        refetch()
    }
    const handleApproved = async (id) => {
        const classInfo = {
            approvedId: id,
            status: 'acceped',
        }
        const { data } = await axiosSecure.patch(`/class/api/status/update/${id}`, classInfo)
        // console.log(data);
        refetch()
    }

    // see projess page
    const handleSeeProgaess = (id) => {
        navigate(`/dashboard/see-prograess/${id}`)
    }

    return (
        <>
            <div className='container mx-auto px-4 sm:px-8 pt-10 lg:pt-0'>
                <Helmet>
                    <title>TeaceEm || All Class</title>
                </Helmet>
                <div className=''>
                    <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto '>
                        <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                            <table className='min-w-full leading-normal'>
                                <thead>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white dark:bg-gray-900  border-b border-gray-200 dark:border-gray-600 text-gray-800 dark:text-white  text-left text-sm uppercase font-normal'
                                        >
                                            Image
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white dark:bg-gray-900  border-b border-gray-200 dark:border-gray-600 text-gray-800 dark:text-white  text-left text-sm uppercase font-normal'
                                        >
                                            Title
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white dark:bg-gray-900  border-b border-gray-200 dark:border-gray-600 text-gray-800 dark:text-white  text-left text-sm uppercase font-normal'
                                        >
                                            Email
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white dark:bg-gray-900  border-b border-gray-200 dark:border-gray-600 text-gray-800 dark:text-white  text-left text-sm uppercase font-normal'
                                        >
                                            Description
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white dark:bg-gray-900  border-b border-gray-200 dark:border-gray-600 text-gray-800 dark:text-white  text-left text-sm uppercase font-normal'
                                        >
                                            Approved button
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white dark:bg-gray-900  border-b border-gray-200 dark:border-gray-600 text-gray-800 dark:text-white  text-left text-sm uppercase font-normal'
                                        >
                                            Reaject button
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white dark:bg-gray-900  border-b border-gray-200 dark:border-gray-600 text-gray-800 dark:text-white  text-left text-sm uppercase font-normal'
                                        >
                                            SeeProgress button
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white dark:bg-gray-900  border-b border-gray-200 dark:border-gray-600 text-gray-800 dark:text-white  text-left text-sm uppercase font-normal'
                                        >
                                            Status
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {classess.map(singleClass => <tr key={singleClass._id}>
                                        <td className='px-5 py-5 border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-sm'>
                                            <img className="w-20 h-12 object-cover rounded-full" src={singleClass.image} alt="" />
                                        </td>
                                        <td className=' py-5 border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-sm'>
                                            {
                                                singleClass?.title?.length > 20 ? <p className='text-gray-900 dark:text-white whitespace-no-wrap'>{singleClass.title.slice(0, 20)} <span className="text-primary semifont-bold cursor-pointer">More...</span></p>
                                                    :
                                                    <p>{singleClass.title}</p>
                                            }
                                        </td>
                                        <td className=' py-5 border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-sm'>
                                            <p className='px-5 text-gray-900 dark:text-white whitespace-no-wrap'>{singleClass.teacherEmail}</p>
                                        </td>
                                        <td className=' py-5 border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-sm'>
                                            {
                                                singleClass?.description?.length > 20 ? <p className='text-gray-900 dark:text-white whitespace-no-wrap'>{singleClass.description.slice(0, 20)} <span className="text-primary semifont-bold cursor-pointer">More...</span></p>
                                                    :
                                                    <p>{singleClass.description}</p>
                                            }
                                        </td>
                                        <td className='px-5 py-5 border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-sm'>
                                            <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold dark:text-white text-green-900 leading-tight'>
                                                <span
                                                    aria-hidden='true'
                                                    className='absolute inset-0 bg-green-200  opacity-50 rounded-full'
                                                ></span>
                                                <button
                                                    onClick={() => handleApproved(singleClass._id)}
                                                    className='relative'>Approved</button>
                                            </span>
                                        </td>
                                        <td className='px-5 py-5 border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-sm'>

                                            <button
                                                disabled={singleClass?.status === "reject"}
                                                onClick={() => handleReject(singleClass._id)}
                                                className=' bg-orange-100 dark:text-gray-600 rounded-full px-3 py-1 disabled:cursor-not-allowed'>Reaject</button>

                                        </td>

                                        <td className='px-5 py-5 border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-sm'>
                                            <button
                                                disabled={singleClass?.status !== "acceped" || singleClass?.status === "reject"}
                                                onClick={() => handleSeeProgaess(singleClass._id)}
                                                className={`${singleClass?.status === "pending" || singleClass?.status === "reject" ? 'cursor-not-allowed px-3 py-1 rounded-full dark:bg-gray-800 dark:text-gray-400' : ' cursor-pointer px-3 py-1 font-semibold bg-green-300 rounded-full'}`}>SeeProgress</button>
                                        </td>
                                        <td className='px-5 py-5 border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-sm'>
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