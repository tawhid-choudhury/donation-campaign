// import banner from '../../assets/banner.png'

import { useEffect, useState } from "react";
import Card from "../Card/Card";


const cartLocal = JSON.parse(localStorage.getItem('cart') || "[]")

const Home = () => {
    const [cards, setCards] = useState([]);
    const [cartItems, setCartItems] = useState(cartLocal);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, []);


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }, [cartItems])

    const handleCardClick = (b) => {
        const newCart = [...cartItems, b];
        setCartItems(newCart);
    }

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
                        cards.map((card, idx) => <Card key={idx} card={card} handleCardClick={handleCardClick}></Card>)
                    }
                </div>
            </div>
        </>

    );
};

export default Home;