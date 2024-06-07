import useAuth from "../../../../hooks/useAuth";


const MyClass = () => {
    const {user} = useAuth();

    // handle update
    const handleUpdate = () =>{
        console.log('click hoica vhi');
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="flex bg-gray-200 rounded-lg shadow-xl dark:bg-gray-800">
               <div className="flex justify-center items-center px-4 ">
               <div
                    className="h-40 w-40 rounded-lg"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')" }}
                ></div>
               </div>

                <div className="w-2/3 py-4 md:py-4 space-y-3">
                    <h1 className="text-xl font-bold text-gray-800 dark:text-white">Backpack</h1>

                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
                    </p>
                    <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">$220</h1>
                    <div className="flex justify-between">
                        <div>
                        <p>{user?.displayName ||'Not Found'}</p>
                        <p>{user.email}</p>
                        </div>
                        <div>
                        <button className="btn btn-xs">status</button>
                        </div>
                    </div>

                    <div className="flex mt-2 items-center justify-between">
                      
                    </div>

                    <div className="flex justify-between mt-3 items-center">
                        <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                            Details
                        </button>
                        <div className="flex gap-3">
                        <button onClick={handleUpdate} className="btn-xs bg-green-500 text-white">update</button>
                       <button className="btn-xs bg-red-500 text-white">delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyClass;