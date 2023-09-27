
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonCards = ({ card }) => {
    const color = card.color;
    const colorCBG = card.colorCBG;

    const tc = {
        color: `${color}`,
        backgroundColor: `${colorCBG}`,

    };
    const btn = {
        color: `white`,
        backgroundColor: `${color}`,

    };
    console.log(card.name);
    return (
        <div className='max-w-[648px] rounded-lg flex' style={tc}>
            <div className='max-w-[220px] min-h-[200px] rounded-lg'>
                <img src={card.image} alt="" className='rounded-s-lg w-full h-full' />
            </div>
            <div className='flex flex-col justify-start items-start'>
                <h4 className='mx-3 mt-4 p-[5px] px-[10px] rounded-lg text-center text-sm' style={tc}>{card.category}</h4>
                <h2 className='mx-3 text-lg font-bold text-black py-4'>{card.name}</h2>
                <p className='mx-3 mb-4 font-bold'>${card.amount}</p>
                <Link to={`/details/${card.id}`}>
                    <button className=' mx-3 rounded px-3 py-2' style={btn}>View Details</button>
                </Link>

            </div>

        </div>
    );
};

DonCards.propTypes = {
    card: PropTypes.object,
};

export default DonCards;