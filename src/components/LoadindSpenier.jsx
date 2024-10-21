import { ColorRing } from "react-loader-spinner";


const LoadindSpenier = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['#2563eb', '#f47e60', '#60a5fa', '#abbd81', '#849b87']}
            />
        </div>
    );
};

export default LoadindSpenier;