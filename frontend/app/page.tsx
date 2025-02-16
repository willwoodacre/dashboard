import Date from "./dateDisplay";
import YRWeather from "./YRWeather";

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col gap-3 p-3">
        <Date />
        <YRWeather />
      </div>
    </div>
  );
}
