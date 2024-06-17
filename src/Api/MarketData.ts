import axios from "axios";
const apiKey = "OKAq7l6RAvizTbsVfW1OWdsQN7Gl2Rax";
/**
 * The function `marketSentimentApi` makes an asynchronous API call to retrieve news sentiment data for
 * the AAPL stock from Alpha Vantage.
 * @returns The `marketSentimentApi` function is returning the data fetched from the Alpha Vantage API
 * endpoint that provides news sentiment for the ticker symbol AAPL (Apple Inc.).
 */
export const marketSentimentApi = async () => {
    try {
        const url = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=demo`
        const { data } = await axios.get(url);
        // console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

/**
 * The function `sectorPerformanceApi` makes an asynchronous API call to retrieve sector performance
 * data using a provided API key.
 * @returns The `sectorPerformanceApi` function is returning data related to sector performance fetched
 * from the specified API endpoint. The data is retrieved using an asynchronous request with Axios
 * library. The function returns the data object obtained from the API response.
 */
export const sectorPerformanceApi = async () => {
    try {
        const url = `https://financialmodelingprep.com/api/v3/sectors-performance?apikey=${apiKey}`;
        const { data } = await axios.get(url);
        // console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }

}

/**
 * The function `marketOverviewApi` fetches market data for various companies and commodities from an
 * API and returns an array of objects containing the data.
 * @returns The `marketOverviewApi` function is returning an array of objects containing market data
 * for various companies and commodities. Each object in the array includes information such as company
 * name, stock code, price, change, and percentage change. The data fetched includes S&P 500, Apple,
 * Microsoft, Amazon, Google, Meta, Tesla, crude oil, gold, silver, and Bitcoin.
 */
export const marketOverviewApi = async () => {
    try {
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
    } catch (error) {
        console.log(error);
    }
}


/**
 * The function fetches historical price data for a specified company using an API and a given time
 * series.
 * @param {string} [companyName=SPY] - The `companyName` parameter in the `fetchHistoricalDataApi`
 * function is a string parameter that represents the name of the company for which you want to fetch
 * historical data. The default value is set to "SPY" if no company name is provided.
 * @param {string} day - The `day` parameter in the `fetchHistoricalDataApi` function is used to
 * specify the time series for which historical price data should be fetched. It determines the range
 * of historical data to retrieve, such as daily, weekly, monthly, etc.
 * @returns The function `fetchHistoricalDataApi` is returning the historical price data for a
 * specified company (default is "SPY") for a specific day. It makes an API call to
 * `https://financialmodelingprep.com/api/v3/historical-price-full/?apikey=&timeseries=`
 * and returns the data received from the API call.
 */
export const fetchHistorcialDataApi = async (companyName: string = "SPY", day: string) => {
    try {
        const url = `https://financialmodelingprep.com/api/v3/historical-price-full/${companyName}?apikey=${apiKey}&timeseries=${day}`;
        const { data } = await axios.get(url);
        // console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}