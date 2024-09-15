import PropTypes from 'prop-types';


const HigestEnrollClassCrud = ({singleClass}) => {
    const {title,description,image,total_enrolment} = singleClass || {};
    return (
        <>
           <div
                    className="bg-gray-200 rounded-lg" >
                    <img
                        className=" object-cover w-full h-56 rounded-lg"
                        src={image}
                        alt="avatar" />
                    <div className="space-y-2 p-4">
                        <p className="text-2xl font-semibold text-gray-700 dark:text-gray-200">{title}</p>
                        <p className="text-sm text-gray-700 dark:text-gray-200">{description}</p>
                        <p>Enroled: ({total_enrolment})</p>
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