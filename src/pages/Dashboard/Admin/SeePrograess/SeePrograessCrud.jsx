import PropTypes from 'prop-types';
import { FcRating } from 'react-icons/fc';

const SeePrograessCrud = ({ item }) => {

    const { photo, name, description, rating } = item || {};
    return (
        <section>
            <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div className="flex justify-center -mt-16 md:justify-end ">
                    <img
                        className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
                        alt={name}
                        src={photo}
                    />
                </div>
                <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">{name}</h2>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
                    {description}
                </p>
                <div className="flex justify-end mt-4">
                    <p className='flex items-center gap-2'>rating: {rating}<FcRating /></p>
                </div>
            </div>
        </section>
    );
};
// props-type validation
SeePrograessCrud.propTypes = {
    item: PropTypes.object,
};
export default SeePrograessCrud;