import axios from "axios";
const apiKey = "kpkhYRInRM5xDi0WKhEz3puFGXaTYEvC";
export const marketSentimentApi = async () => {
    const url = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=demo`
    const { data } = await axios.get(url);
    // console.log(data);
    return data;
}

export const sectorPerformanceApi = async () => {
    const url = `https://financialmodelingprep.com/api/v3/sectors-performance?apikey=${apiKey}`;
    const { data } = await axios.get(url);
    // console.log(data);
    return data;
}

export const marketOverviewApi = async () => {
    const marketData = [];
    //fetching data for s&p500
    let url = `https://financialmodelingprep.com/api/v3/quote/SPY?apikey=${apiKey}`;
    let { data } = await axios.get(url);
    let { price, change, changesPercentage } = data[0];
    marketData.push({ company: "S&P 500", code: "SPY", price, change, changesPercentage });

    //fetching Apple 
    url = `https://financialmodelingprep.com/api/v3/quote/AAPL?apikey=${apiKey}`;
    ({ data } = await axios.get(url));
    ({ price, change, changesPercentage } = data[0]);
    marketData.push({ company: "Apple", code: "AAPL", price, change, changesPercentage });

    //fetching microsoft 
    url = `https://financialmodelingprep.com/api/v3/quote/MSFT?apikey=${apiKey}`;
    ({ data } = await axios.get(url));
    ({ price, change, changesPercentage } = data[0]);
    marketData.push({ company: "Microsoft", code: "MSFT", price, change, changesPercentage });

    //fetching amazon
    url = `https://financialmodelingprep.com/api/v3/quote/AMZN?apikey=${apiKey}`;
    ({ data } = await axios.get(url));
    ({ price, change, changesPercentage } = data[0]);
    marketData.push({ company: "Amazon", code: "AMZN", price, change, changesPercentage });

    //fetching google
    url = `https://financialmodelingprep.com/api/v3/quote/GOOGL?apikey=${apiKey}`;
    ({ data } = await axios.get(url));
    ({ price, change, changesPercentage } = data[0]);
    marketData.push({ company: "Google", code: "GOOGL", price, change, changesPercentage });

    //fetching Meta
    url = `https://financialmodelingprep.com/api/v3/quote/META?apikey=${apiKey}`;
    ({ data } = await axios.get(url));
    ({ price, change, changesPercentage } = data[0]);
    marketData.push({ company: "Meta", code: "META", price, change, changesPercentage });

    //fetching Tesla
    url = `https://financialmodelingprep.com/api/v3/quote/TSLA?apikey=${apiKey}`;
    ({ data } = await axios.get(url));
    ({ price, change, changesPercentage } = data[0]);
    marketData.push({ company: "Tesla", code: "TSLA", price, change, changesPercentage });

    //fetching crude oil data
    url = `https://financialmodelingprep.com/api/v3/quote/CL=F?apikey=${apiKey}`;
    ({ data } = await axios.get(url));
    ({ price, change, changesPercentage } = data[0]);
    marketData.push({ company: "Crud Oil", code: "CL=F", price, change, changesPercentage });

    //fetching gold
    url = `https://financialmodelingprep.com/api/v3/quote/GC=F?apikey=${apiKey}`;
    ({ data } = await axios.get(url));
    ({ price, change, changesPercentage } = data[0]);
    marketData.push({ company: "Gold", code: "GC=F", price, change, changesPercentage });

    //fetching silver
    url = `https://financialmodelingprep.com/api/v3/quote/SI=F?apikey=${apiKey}`;
    ({ data } = await axios.get(url));
    ({ price, change, changesPercentage } = data[0]);
    marketData.push({ company: "Silver", code: "SI=F", price, change, changesPercentage });

    //fetching bitcoin
    url = `https://financialmodelingprep.com/api/v3/quote/BTC-USD?apikey=${apiKey}`;
    ({ data } = await axios.get(url));
    ({ price, change, changesPercentage } = data[0]);
    marketData.push({ company: "Bitcoin", code: "BTC-USD", price, change, changesPercentage });
    console.log(marketData);
    return marketData;
}


export const fetchHistorcialDataApi = async (companyName: string = "SPY", day: string) => {
    const url = `https://financialmodelingprep.com/api/v3/historical-price-full/${companyName}?apikey=${apiKey}&timeseries=${day}`;
    const { data } = await axios.get(url);
    // console.log(data);
    return data;
}