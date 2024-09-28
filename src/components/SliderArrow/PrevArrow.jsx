import { BsChevronLeft } from "react-icons/bs";
import PropTypes from 'prop-types';

const PrevArrow = ({ onClick }) => {
    return (
        <>
            <div className='absolute right-[100px] -top-[80px]' onClick={onClick}>
                <div className="bg-primaryGray h-10 lg:h-12 w-10 lg:w-12 rounded  text-2xl grid place-items-center cursor-pointer">
                    <BsChevronLeft />
                </div>
            </div>
        </>
    );
};
// props-type validation
PrevArrow.propTypes = {
    onClick: PropTypes.array,
};
export default PrevArrow;