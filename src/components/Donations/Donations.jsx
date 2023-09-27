import { useEffect, useState } from "react";
import DonCards from "./DonCards";

const Donations = () => {
    const [donCards, setDonCards] = useState([]);
    const [noFound, setNofound] = useState(false);

    useEffect(() => {
        const donateds = JSON.parse(localStorage.getItem('donated'));
        if (donateds) {
            setDonCards(donateds);
        } else {
            setNofound("no data found")
        }
    }, [])
    return (
        <div className="max-w-[1320px] m-auto">
            {
                noFound ? <p>{noFound}</p> :
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10 px-1">{
                        donCards.map(card => <DonCards key={card.id} card={card}></DonCards>)
                    }
                    </div>
            }
        </div>
    );
};

export default Donations;