
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {


    const all = useLoaderData();
    const { id } = useParams();
    const card = all.find(c => c.id === parseInt(id))
    console.log(card);


    const color = card.color;

    const btn = {
        color: `white`,
        backgroundColor: `${color}`,

    };
    return (
        <div className='max-w-[1320px] m-auto relative'>
            <div className='flex flex-col items-center max-w-[1320px] max-h-[700px]'>
                <img src={card.image} alt="" className=" w-full lg:h-[700px]" />
            </div>
            <div className='lg:bg-black/50 flex flex-col items-start justify-center lg:max-w-[1320px] absolute lg:top-[570px] lg:w-full lg:h-[130px]'>
                <button className='text-xl rounded px-6 py-4 lg:ml-6' style={btn}>Donate ${card.amount}</button>
            </div>
            <div>
                <h1 className='text-4xl pt-14 pb-6'>{card.name}</h1>
                <p className='pb-28'>{card.description}</p>
            </div>
        </div>
    );
};

Details.propTypes = {

};

export default Details;