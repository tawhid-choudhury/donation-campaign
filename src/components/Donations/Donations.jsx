import { useEffect, useState } from "react";
import DonCards from "./DonCards";

const Donations = () => {
    const [donCards, setDonCards] = useState([]);
    const [noFound, setNofound] = useState(false);
    const [dataLen, setDataLen] = useState(4);

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
                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10 px-1">{
                            donCards.slice(0, dataLen).map(card => <DonCards key={card.id} card={card}></DonCards>)
                        }
                        </div>
                        <div
                            onClick={() => setDataLen(donCards.length)}
                            className="flex justify-center">
                            <div className={dataLen == donCards.length && "hidden"}>
                                <div className={donCards.length <= 4 && "hidden"}>
                                    <button className=' mx-3 rounded px-3 py-2 bg-green-500 text-white'>See All</button>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Donations;