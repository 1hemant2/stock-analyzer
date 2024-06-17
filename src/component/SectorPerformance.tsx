import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { sectorPerformanceApi } from '../Api/MarketData';

/* The `interface SectorData` is defining a TypeScript interface in the React component
`SectorPerformance`. This interface specifies the structure of objects that will be stored in the
`sectorData` state array. */
interface SectorData {
    sector: string;
    changesPercentage: string;
}

/* This code snippet is a React functional component named `SectorPerformance`. Here's what it's doing: */
const SectorPerformance: React.FC = () => {
    const [sectorData, setSecotorData] = useState<SectorData[]>([]);
    const getSectorPerformance = async () => {
        const data = await sectorPerformanceApi();
        setSecotorData(data);
    }
    useEffect(() => {
        getSectorPerformance();
    }, [])
    return (
        <div>
            <div>
                <Card bordered={false} style={{ width: 600, height: 250, background: '#000000', color: 'whitesmoke' }} >
                    <div>Sector Performance</div>
                    <div className='font-medium flex justify-between w-[48%] broder-t border-red-500'>All Sector <span className='text-green-600  '>+0.76%</span></div>
                    <div className="grid grid-cols-2 gap-3 mt-1">
                        {sectorData.slice(0, 10).map((d, index) => (
                            <div key={index} className="text-sm text-gray-400 flex justify-between">
                                <span className="font-semibold">{d.sector}</span>
                                <span className={parseInt(d.changesPercentage) < 0 ? 'text-red-600' : 'text-green-600'}>{d.changesPercentage}</span>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default SectorPerformance;



