import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ScrollTrigger from 'react-scroll-trigger';
import Container from "../../../Shared/Container/Container";
import { useState } from "react";
import CountUp from 'react-countup';



const WebsiteInfo = () => {
    const axiosSecure = useAxiosSecure();
    const [counterState, setCounterState] = useState(false);

    const { data: totalData = {}, } = useQuery({
        queryKey: ['total-data'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/totalData/count/related/api',);
            return data;
        },
    })


    return (
        <>
            <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
                <div className="bg-primaryGray dark:bg-gray-900  py-7 lg:mt-20">
                    <Container>
                        <div className=" flex flex-col md:flex-row justify-center md:justify-evenly gap-20 md:gap-0 text-center py-10">
                            <div className="flex flex-col justify-center items-center px-10 space-y-4">

                                {
                                    counterState && <CountUp className="text-6xl lg:text-[70px] font-semibold" start={0} end={totalData.user} duration={5}>
                                        {totalData.user}
                                    </CountUp>
                                }
                                <p className="text-center text-base lg:text-lg text-gray-600 dark:text-white">total users!</p>
                            </div>


                            <div className="flex flex-col justify-center items-center px-10 space-y-4">

                                {
                                    counterState && <CountUp className="text-6xl lg:text-[70px] font-semibold" start={0} end={totalData.classes} duration={5}>
                                        {totalData.classes}
                                    </CountUp>
                                }
                                <p className="text-center text-base lg:text-lg text-gray-600 dark:text-white">total classes!</p>
                            </div>

                            <div className="flex flex-col justify-center items-center px-10 space-y-4">


                                {
                                    counterState && <CountUp className="text-6xl lg:text-[70px] font-semibold" start={0} end={totalData.enroll} duration={5}>
                                        {totalData.enroll}
                                    </CountUp>
                                }
                                <p className="text-center text-base lg:text-lg text-gray-600 dark:text-white">total enroll!</p>
                            </div>
                        </div>
                    </Container>
                </div>
            </ScrollTrigger>
        </>
    );
};

export default WebsiteInfo;