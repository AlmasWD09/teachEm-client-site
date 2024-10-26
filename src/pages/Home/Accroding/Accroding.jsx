import Container from "../../../Shared/Container/Container";
import photo from "../../../assets/accroding.jpg"

const Accroding = () => {
    return (
        <>
            <div className="bg-primaryGray dark:bg-gray-900 py-20 mt-10">
                <Container>
                    <div className=" flex flex-col md:flex-row justify-center lg:items-center md:gap-5 lg:gap-20">
                        {/* left content */}
                        <div className="md:w-[50%] lg:w-[60%]">
                            <h1 className=" text-2xl md:text-4xl font-bold font-Urbanist capitalize text-center md:text-start pb-8">Frequently Asked Questions?</h1>
                            <div className="">
                                {/* according component */}
                                <div className="collapse collapse-arrow bg-white dark:border dark:border-white dark:bg-gray-900 p-4 mb-3 rounded">
                                    <input type="radio" name="my-accordion-2" defaultChecked />
                                    <div className="collapse-title text-lg md:text-xl font-medium ">
                                        How can You get best facility of our Course
                                    </div>
                                    <div className="collapse-content text-gray-400 dark:text-white">
                                        <p>Here is the translation of the sentence Take the opportunity to speak with current residents to get their perspectives on the facilities, management responsiveness, and overall living experience within the estate.</p>
                                    </div>
                                </div>
                                <div className="collapse collapse-arrow bg-white dark:border dark:border-white dark:bg-gray-900 p-4 mb-3 rounded">
                                    <input type="radio" name="my-accordion-2" />
                                    <div className="collapse-title text-lg md:text-xl font-medium">
                                        Is there a facility to gain ownership through rent
                                    </div>
                                    <div className="collapse-content text-gray-400 dark:text-white">
                                        <p>This arrangement can benefit tenants who may not have sufficient funds for a traditional down payment or who are working to improve their credit score before securing a mortgage</p>
                                    </div>
                                </div>
                                <div className="collapse collapse-arrow bg-white dark:border dark:border-white dark:bg-gray-900 p-4 mb-3 rounded">
                                    <input type="radio" name="my-accordion-2" />
                                    <div className="collapse-title text-lg md:text-xl font-medium">
                                        Why is living in student housing beneficial for studies
                                    </div>
                                    <div className="collapse-content text-gray-400 dark:text-white">
                                        <p>Student housing complexes often prioritize safety and security measures, such as secure entry systems, on-site security personnel, and surveillance cameras.</p>
                                    </div>
                                </div>
                                <div className="collapse collapse-arrow bg-white dark:border dark:border-white dark:bg-gray-900 p-4 mb-3 rounded">
                                    <input type="radio" name="my-accordion-2" />
                                    <div className="collapse-title text-lg md:text-xl font-medium">
                                        How can You get support
                                    </div>
                                    <div className="collapse-content text-gray-400 dark:text-white">
                                        <p>Reach out to the management office or property manager of your residential estate. They are typically responsible for addressing residents concerns and providing support</p>
                                    </div>
                                </div>

                            </div>
                        </div>


                        {/* right side photo */}
                        <div className="md:w-[50%] md:mt-28 lg:mt-0">
                            <img className="rounded-md lg:h-[600px] dark:lg:h-[560px] w-full object-cover" src={photo} alt="" />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Accroding;