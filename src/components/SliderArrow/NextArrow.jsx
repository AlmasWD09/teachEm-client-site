import { BsChevronRight } from "react-icons/bs";
import PropTypes from 'prop-types';

const NextArrow = ({onClick}) => {
    return (
        <>
        <div className='absolute right-0 -top-[80px]' onClick={onClick}>
            <div className="bg-primary h-10 lg:h-12 w-10 lg:w-12 rounded text-white text-2xl grid place-items-center cursor-pointer">
                <BsChevronRight />
            </div>
        </div>
    </>
    );
};
// props-type validation
NextArrow.propTypes = {
    onClick: PropTypes.array,
};
export default NextArrow;