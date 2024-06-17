import React, { useState } from 'react';
import { Card } from 'antd';
import { useEffect } from "react";
import { marketSentimentApi } from '../Api/MarketData';


const MarketSentiment: React.FC = () => {
    const [sentiment, setSentiment] = useState('');
    const [summary, setSummary] = useState('');
    const getMarketSentiMent = async () => {
        const { feed } = await marketSentimentApi();
        const { overall_sentiment_label, summary } = feed[0];
        // console.log(overall_sentiment_label, summary);
        setSentiment(overall_sentiment_label);
        setSummary(summary.slice(0, 50).split('.')[0]);
    }
    useEffect(() => {
        getMarketSentiMent();
    }, [])
    return (
        <div>
            <Card bordered={false} style={{ width: 400, height: 250, background: '#000000', color: 'whitesmoke' }}>
                <div className="flex space-x-4 ">
                    <div className="border border-1 rounded-full bg-[#222722]  text-white pl-1 pr-1 text-xs flex items-center">
                        The market are <span className='text-green-700'>{sentiment}</span> <span className='bg-green-950 rounded-full'></span>
                    </div>
                    <i className="ri-arrow-right-up-line bg-[#272a28] text-green-800 rounded-full w-6 h-6 text-center font-semibold"></i>
                </div>
                <div className='absolute bottom-0 '>
                    <div className="text-gray-600 ">What you need to know today</div>
                    <div className="text-2xl">{summary}</div>
                </div>
            </Card>
        </div>
    )
}

export default MarketSentiment;