import Date from "./dateDisplay";
import ElectricityUsage from "./electricityUsage";
import YRWeather from "./YRWeather";

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col gap-3 p-3 h-screen">
        <Date />
        <div className="flex-1">
        <YRWeather />
        </div>
        <div className="h-[300px]">
        <ElectricityUsage />
        </div>
      </div>
    </div>
  );
}
