

const Accroding = () => {
    return (
        <div className="max-w-7xl mx-auto px-8 mt-10 ">
        <h1 className="w-3/5 mx-auto md:w-full text-xl lg:text-2xl font-semibold lg:font-bold text-center py-10">Frequently Asked Questions?</h1>
        <div className="flex justify-center">
            <div className="w-full lg:w-3/5">
                {/* according component */}
                <div className="collapse collapse-arrow bg-base-200 dark:bg-slate-800 dark:text-white mb-3 rounded">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium ">
                    How can You get best facility of our Course
                    </div>
                    <div className="collapse-content">
                        <p>Here is the translation of the sentence Take the opportunity to speak with current residents to get their perspectives on the facilities, management responsiveness, and overall living experience within the estate.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 dark:bg-slate-800 dark:text-white mb-3 rounded">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                    Is there a facility to gain ownership through rent
                    </div>
                    <div className="collapse-content">
                        <p>This arrangement can benefit tenants who may not have sufficient funds for a traditional down payment or who are working to improve their credit score before securing a mortgage</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 dark:bg-slate-800 dark:text-white mb-3 rounded">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                    Why is living in student housing beneficial for studies
                    </div>
                    <div className="collapse-content">
                        <p>Student housing complexes often prioritize safety and security measures, such as secure entry systems, on-site security personnel, and surveillance cameras.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 dark:bg-slate-800 dark:text-white mb-3 rounded">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        How can You get support
                    </div>
                    <div className="collapse-content">
                        <p>Reach out to the management office or property manager of your residential estate. They are typically responsible for addressing residents concerns and providing support</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
};

export default Accroding;