import { Helmet } from "react-helmet-async";
import useAllUser from "../../../../hooks/useAllUser";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useTheme from "../../../../hooks/useTheme";



const Users = () => {
    const theme = useTheme()
    const [users, refetch] = useAllUser()
    const axiosSecure = useAxiosSecure()

    const handleChangeRole = (id) => {
        const requestInfo = {
            role: 'admin',
        }
        const { res } = axiosSecure.patch(`/user/api/role/update/${id}`, requestInfo)
        console.log(res);
        refetch()
    }
    return (
        <>
            <div className='container mx-auto px-4 pt-10 lg:pt-0'>
                <Helmet>
                    <title>TeaceEm || Users</title>
                </Helmet>
                <div className=''>
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
                                            Email
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
                                            Role
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        users?.map(singleUser => <tr key={singleUser._id}>
                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                <img className="w-10 h-10 rounded-full" src={singleUser?.photo || 'https://i.ibb.co/ncyN8Qg/404.webp'} alt="" />
                                            </td>
                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                <p className='text-gray-900 whitespace-no-wrap'>{singleUser?.email}</p>
                                            </td>
                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                <p className='text-gray-900 whitespace-no-wrap'>{singleUser?.name}</p>
                                            </td>
                                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                <p className='text-gray-900 whitespace-no-wrap'>{singleUser?.role}</p>
                                            </td>
                                            <td className='md:px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                <button
                                                    disabled={singleUser.role === 'admin'}
                                                    onClick={() => handleChangeRole(singleUser._id)}
                                                    className={`${singleUser?.role === "admin" ? 'cursor-not-allowed md:btn md:btn-sm rounded-full' : 'md:btn-sm cursor-pointer px-1 py-1 md:px-3 md:py-1 md:font-semibold bg-green-300 rounded-full'}`}>Make Admin</button>
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

export default Users;