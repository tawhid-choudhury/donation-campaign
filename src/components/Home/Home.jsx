// import banner from '../../assets/banner.png'

import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Home = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, [])
    return (
        <>
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
            <div className="flex justify-center">
                <div className="mt-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  max-w-[1320px] m-auto gap-[24px] mb-[100px] items-center justify-center">
                    {
                        cards.map(card => <Card key={card.id} card={card}></Card>)
                    }
                </div>
            </div>
        </>

    );
};

export default Home;