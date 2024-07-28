

const WebsiteInfo = () => {
    return (
        <div className="lg:mt-10">
            <h1 className="text-3xl font-semibold uppercase text-center mb-5">Website All Information</h1>

            <div className="bg-gray-300 flex flex-col lg:flex-row justify-center py-8 rounded-lg">
                <div className="w-[30%]">
                    <p className="text-4xl font-semibold">Total User</p>
                    <p className="text-3xl text-primary font-semibold">11 user</p>
                </div>
                <div className="w-[30%]">
                <p className="text-4xl font-semibold">Total Classes</p>
                <p className="text-3xl text-red-400 font-semibold">11 class</p>
                </div>
                <div className="w-[30%]">
                <p className="text-4xl font-semibold">Total Enrollment</p>
                <p className="text-3xl text-green-400 font-semibold">11 enroll</p>
                </div>
            </div>
        </div>
    );
};

export default WebsiteInfo;