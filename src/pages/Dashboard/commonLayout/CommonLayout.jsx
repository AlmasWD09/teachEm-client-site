import useAuth from "../../../hooks/useAuth";


const CommonLayout = () => {
    const {user} = useAuth();
    return (
       <>
        <div className="pt-10">
                {
                    user && <div className="flex justify-center text-center relative  md:flex ">
                        <div className="bg-primaryGray  rounded-md p-8">
                            <div className="space-y-2">
                                <h1 className="text-3xl lg:text-5xl text-secondery font-bold text-center py-10 uppercase">wellcome <span>{user?.displayName}</span>!!</h1>
                                <p className="lg:max-w-2xl mx-auto text-center px-8 lg:px-0">Your unwavering commitment to giving is truly inspiring. Through your generosity, we’re able to continue transforming lives and creating meaningful, lasting impacts. Together, we’re making the world a better place, one donation at a time. Thank you for being an essential part of our mission to help others</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
       </>
    );
};

export default CommonLayout;