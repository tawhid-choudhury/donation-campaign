import PropTypes from 'prop-types';

const Card = ({ card }) => {
    const color = card.color;

    const inlineStyle = {
        backgroundColor: `${color}26`,

    };
    const tc = {
        color: `${color}`,
        backgroundColor: `${color}26`,

    };
    const htc = {
        color: `${color}`,
        // backgroundColor: `${color}26`,

    };
    return (
        <div className={`h-[283px] rounded-lg max-w-[312px]`}
            style={inlineStyle}
        >
            <div className='max-w-[312px] h-[194px]'>
                <img src={card.image} className='w-full h-full rounded-t-lg' alt="" />
            </div>
            <div>
                <h4 className='mx-4 mt-4 p-[5px] max-w-[100px] rounded-lg text-center text-sm' style={tc}>{card.category}</h4>
                <h3 className='mx-4 text-xl mb-4 font-bold' style={htc}>{card.name}</h3>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object,
};

export default Card;