import React, { useEffect, useState } from 'react'
import { marketOverviewApi } from '../Api/MarketData';
import { fetchHistorcialDataApi } from '../Api/MarketData';
import Card from 'antd/es/card/Card';
import { Line } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

// Register the required components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

/**
 * @MarketData - it will be use to show the market overview in chat 
 */
interface MarketData {
    price: number;
    change: number;
    changesPercentage: number;
    company: string;
    code: string;
}

/**
 * @HistoricalData - it will be use to show the chat data 
 * @date : stock date 
 * @close : closing point of each date 
 */
interface HistoricalData {
    date: string;
    close: number;
}

const MarketOverview: React.FC = () => {
    const [marketDatas, setMarketDatas] = useState<MarketData[]>([]);
    const [chartDataPrice, setChartDataPrice] = useState([]);
    const [charDataTime, setCharDataTime] = useState([]);
    const [code, setCode] = useState('');
    const [company, setCompany] = useState('S&P 500');

    /**
     * setMarketDatas is used to set the data of market overview of chat 
     */
    const getMarketData = async () => {
        const data = await marketOverviewApi();
        setMarketDatas(data ?? []);
    }

    /**
     * The function `getChartData` fetches historical data for a given stock code and sets the price and
     * date data for chart rendering.
     * @param {string} [code=SPY] - The `code` parameter is a string that represents the stock symbol for
     * which you want to fetch historical data. In the provided function `getChartData`, the default value
     * for `code` is set to "SPY" if no value is provided when calling the function.
     * @param {string} day - The `day` parameter in the `getChartData` function is used to specify a
     * particular day for which historical data will be fetched.
     */
    const getChartData = async (code: string = "SPY", day: string) => {
        let { historical } = await fetchHistorcialDataApi(code, day);
        console.log(historical);
        const prices = historical?.map((item: HistoricalData) => item?.close);
        const dates = historical?.map((item: HistoricalData) => item?.date);
        setChartDataPrice(prices);
        setCharDataTime(dates);
        setCode(code);
    }

    /**
     * @data - it is used as props for react chart js 2
     */
    const data = {
        labels: charDataTime?.reverse(), // Reverse to show latest date first
        datasets: [
            {
                label: 'Closing Price',
                data: chartDataPrice.reverse(), // Reverse to match labels
                fill: false,
                borderColor: 'rgb(202, 15, 71)',
                tension: 0.1
            }
        ]
    };


    useEffect(() => {
        getMarketData();
    }, []);
    useEffect(() => {
        getChartData("SPY", "5");
    }, [])
    return (
        <div>
            <Card bordered={false} style={{ width: 1050, height: 400, background: '#000000', color: 'whitesmoke' }} >
                <div className="flex">
                    <div className='w-[350px] '>
                        {
                            marketDatas?.map((item, index) => {
                                const { price, change, changesPercentage, company, code } = item;
                                return (
                                    <div key={index} onClick={() => { getChartData(code, "5"), setCompany(company) }} className='mt-2 cursor-pointer'>
                                        {
                                            <div className='font-medium border-1 border-gray-500 hover:bg-gray-600 rounded-md grid grid-cols-4 gap-2'>

                                                <span>{company}</span>
                                                <span>{price}</span>
                                                <span className={change < 0 ? 'text-red-500' : 'text-green-500'}>{change}</span>
                                                <span className={change < 0 ? 'text-red-500' : 'text-green-500'}>{changesPercentage}</span>
                                            </div>
                                        }
                                        <hr className='bg-white' />
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className='ml-8'>
                        <div className='text-white ml-10'>{company}</div>
                        <div className='w-[700px] '>

                            <Line data={data} width={"700px"} height={"300px"}
                                options={{ maintainAspectRatio: false }} />
                        </div>
                        <div className='space-x-6 border border-white p-1 inline-block mt-3 '>
                            <button onClick={() => getChartData(code, "1")}>1D</button>
                            <button onClick={() => getChartData(code, "5")}>1W</button>
                            <button onClick={() => getChartData(code, "21")}>1M</button>
                            <button onClick={() => getChartData(code, "63")}>3M</button>
                            <button onClick={() => getChartData(code, "252")}>1Y</button>
                            <button onClick={() => getChartData(code, "")}>ALL</button>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default MarketOverview;