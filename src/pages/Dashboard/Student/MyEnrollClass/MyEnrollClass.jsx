

const MyEnrollClass = () => {
    return (
        <div className="max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img
            className=" object-cover w-full h-56"
            src='https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            alt="avatar"
        />

        <div className="space-y-2 p-4">
            <p className="text-sm text-gray-700 dark:text-gray-200">title</p>
            <p className="text-sm text-gray-700 dark:text-gray-200">name</p>
            
            {/* <Link to={`/my-enroll-details/${_id}`}>
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-primary/60 focus:outline-none focus:bg-primary">Enroll Now</button>
            </Link> */}
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-primary/60 focus:outline-none focus:bg-primary">Continue</button>
            
        </div>
    </div>
    );
};

export default MyEnrollClass;