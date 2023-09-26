// import banner from '../../assets/banner.png'

import { useState } from "react";


const Home = () => {
    const [cards, setCards] = useState([]);

    return (
        <div className=''>
            <div className="hero min-h-[600px]" style={{ backgroundImage: 'url(https://i.ibb.co/0nm027T/banner.png)' }}>
                <div className="hero-overlay bg-white bg-opacity-90"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="text-5xl  text-black  font-bold">I Grow By Helping People In Need</h1>
                        <div className='mt-10'>
                            <input className="border-2 lg:w-[360px] h-12 rounded-s-lg px-5" type="text" placeholder='Search here....' />
                            <button className="bg-[#FF444A] w-[110px] h-12 rounded-e-lg">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;