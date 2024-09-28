import PropTypes from 'prop-types';


const HigestEnrollClassCrud = ({ singleClass }) => {
    const { title, description, image, total_enrolment } = singleClass || {};
    return (
        <>
            <div>
                <img className="relative  object-cover w-full rounded-md h-96" src={image} alt="" />

                <div className="relative max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                    <h3 className="font-semibold text-gray-800  md:text-xl">
                        {title}
                    </h3>

                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                        {description}
                    </p>

                    <p className="mt-3 text-sm text-blue-500">Enroll : {total_enrolment || 0} </p>
                </div>
            </div>
        </>
    );
};
// props-type validation
HigestEnrollClassCrud.propTypes = {
    singleClass: PropTypes.array,
};
export default HigestEnrollClassCrud;