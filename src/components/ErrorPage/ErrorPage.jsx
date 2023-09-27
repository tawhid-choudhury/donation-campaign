
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-center text-2xl font-bold text-red-500 mt-11'>
                Error!!
            </h1>
            <p className='text-center'>Something went Wrong</p>
            <Link to={'/'}> <p className='text-center mt-10 bg-blue-500 p-4 rounded-xl text-white'>Go Back to Home</p></Link>
        </div>
    );
};

export default ErrorPage;