import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { sectorPerformanceApi } from '../Api/MarketData';

interface SectorData {
    sector: string;
    changesPercentage: string;
}

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



