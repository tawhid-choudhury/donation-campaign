
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from 'recharts';


const Stats = () => {
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
    const length = donCards.length;
    //Chart
    const data = [
        { name: 'Group A', value: 12 - length },
        { name: 'Group B', value: length },
    ];

    const COLORS = ['#FF444A', '#00C49F'];


    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <div className="max-w-[1320px] m-auto">
            {
                noFound ? <p>{noFound}</p> :
                    <div>
                        <div className="hidden md:flex items-center justify-center" width="100%" height="100%">
                            <PieChart width={500} height={500}>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={250}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </div>
                        <div className="md:hidden flex items-center justify-center" width="100%" height="100%">
                            <PieChart width={300} height={300}>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={150}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </div>
                    </div>


            }
            <div className="mt-8 md:flex justify-center gap-[200px] text-center">
                <p>Your Donation <span className="bg-[#00C49F]"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></p>
                <p>Reamining Donation <span className="bg-[#FF444A]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
            </div>
        </div>
    );
};
export default Stats;