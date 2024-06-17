import Header from "./component/Header";
import MarketOverview from "./component/MarketOverview";
import MarketSentiment from "./component/MarketSentiment";
import SectorPerformance from './component/SectorPerformance';
import SideBar from "./component/SideBar";

function App() {

  return (
    <div>
      <div className=" bg-[#1c1a1a] text-white flex justify-center flex-col items-center">
        <div className="absolute top-0 left-0">
          <SideBar></SideBar>
        </div>
        <div className="h-[80px] w-[1050px]">
          <Header></Header>
        </div>
        <hr className="border-red-600" />
        <div className="flex space-x-9 mt-16">
          <MarketSentiment></MarketSentiment>
          <SectorPerformance></SectorPerformance>
        </div>
        <div className="mt-16 mb-5 pb-5">
          <MarketOverview></MarketOverview>
        </div>
      </div>
    </div>
  )
}

export default App;