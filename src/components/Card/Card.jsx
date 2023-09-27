import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {

    const color = card.color;
    const colorBG = card.colorBG;
    const colorCBG = card.colorCBG;

    const inlineStyle = {
        backgroundColor: `${colorBG}`,
    };
    const tc = {
        color: `${color}`,
        backgroundColor: `${colorCBG}`,

    };
    const htc = {
        color: `${color}`,

    };
    return (
        <div className={`h-[283px] rounded-lg max-w-[312px] cursor-pointer`}
            style={inlineStyle}
        >
            <Link to={`/details/${card.id}`}>
                <div className='max-w-[312px] h-[194px]'>
                    <img src={card.image} className='w-full h-full rounded-t-lg' alt="" />
                </div>
                <div className='flex flex-col justify-start items-start'>
                    <h4 className='mx-4 mt-4 p-[5px] px-[10px] rounded-lg text-center text-sm' style={tc}>{card.category}</h4>
                    <h3 className='mx-4 text-xl mb-4 font-bold' style={htc}>{card.name}</h3>
                </div>
            </Link>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object,
    handleCardClick: PropTypes.func,
};

export default Card;