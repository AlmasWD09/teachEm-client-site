import { useState } from "react";
import useClass from "../../../hooks/useClass";
import Container from "../../../Shared/Container/Container";
import HigestEnrollClassCrud from "./HigestEnrollClassCrud";


const HigestEnrollClass = () => {
    const [HighestClasse] = useClass();
    const [showAll , setShowAll] = useState(false);
    
    const classesToDisplay = showAll ? HighestClasse : HighestClasse.slice(0, 4);
    return (
        <>
       <section className="mt-20 ">
                <Container>
                    <div>
                        <div className="text-center">
                            <h1 className="text-2xl font-bold text-primary capitalize lg:text-3xl">Our Best Class</h1>
                            <p className="max-w-lg mx-auto mt-4 text-gray-500">
                                Our course offers advanced techniques, engaging content, and interactive learning, attracting many students.
                            </p>
                        </div>

                        {/* Display the items */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                            {
                                classesToDisplay.map((singleClass, idx) => (
                                    <HigestEnrollClassCrud key={idx} singleClass={singleClass} />
                                ))
                            }
                        </div>

                        {/* Show the "Show All" button only if there are more than 3 items and not all are shown */}
                        {
                            HighestClasse.length > 4 && !showAll && (
                                <div className="w-full flex justify-center mt-6">
                                    <button
                                        onClick={() => setShowAll(true)} // On click, show all items
                                        className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-primary/60 focus:outline-none focus:bg-primary"
                                    >
                                        Show All
                                    </button>
                                </div>
                            )
                        }
                    </div>
                </Container>
            </section>
        </>
    );
};

export default HigestEnrollClass;