import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faSun,
  faCloudSun,
  faCloudRain,
  faCloudShowersHeavy,
  faCloudBolt,
  faSmog,
  faSnowflake,
  IconDefinition,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { secrets } from "./secrets";

const weatherMapping: Record<string, IconDefinition> = {
  clearsky: faSun,
  fair: faCloudSun,
  partlycloudy: faCloudSun,
  cloudy: faCloud,
  lightrainshowers: faCloudRain,
  rainshowers: faCloudRain,
  heavyrainshowers: faCloudShowersHeavy,
  lightrainshowersandthunder: faCloudBolt,
  rainshowersandthunder: faCloudBolt,
  heavyrainshowersandthunder: faCloudBolt,
  lightsleetshowers: faCloudRain,
  sleetshowers: faCloudRain,
  heavysleetshowers: faCloudShowersHeavy,
  lightssleetshowersandthunder: faCloudBolt,
  sleetshowersandthunder: faCloudBolt,
  heavysleetshowersandthunder: faCloudBolt,
  lightsnowshowers: faSnowflake,
  snowshowers: faSnowflake,
  heavysnowshowers: faSnowflake,
  lightssnowshowersandthunder: faCloudBolt,
  snowshowersandthunder: faCloudBolt,
  heavysnowshowersandthunder: faCloudBolt,
  lightrain: faCloudRain,
  rain: faCloudShowersHeavy,
  heavyrain: faCloudShowersHeavy,
  lightrainandthunder: faCloudBolt,
  rainandthunder: faCloudBolt,
  heavyrainandthunder: faCloudBolt,
  lightsleet: faCloudRain,
  sleet: faCloudRain,
  heavysleet: faCloudShowersHeavy,
  lightsleetandthunder: faCloudBolt,
  sleetandthunder: faCloudBolt,
  heavysleetandthunder: faCloudBolt,
  lightsnow: faSnowflake,
  snow: faSnowflake,
  heavysnow: faSnowflake,
  lightsnowandthunder: faCloudBolt,
  snowandthunder: faCloudBolt,
  heavysnowandthunder: faCloudBolt,
  fog: faSmog,
};

type YRWeatherCompact = {
  properties: {
    timeseries: {
      data: {
        instant: {
          details: {
            air_temperature: number;
          };
        };
        next_1_hours: {
          summary: {
            symbol_code: keyof typeof weatherMapping;
          };
        };
      };
    }[];
  };
};

const getWeather = async () => {
  const { lat, lon } = secrets.location;
  const response = await fetch(
    `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`,
    {
      headers: {
        "User-Agent": "dashboardApp github.com/willwoodacre/dashboard",
      },
    }
  );
  return (await response.json()) as YRWeatherCompact;
};

export default async function YRWeather() {
  const weather = await getWeather();
  const currentWeather = weather.properties.timeseries[0].data;
  const weatherSymbol = currentWeather.next_1_hours.summary.symbol_code
    .replace("_night", "")
    .replace("_day", "");

  return (
    <div className="flex justify-between text-8xl font-bold h-[1em]">
      <FontAwesomeIcon
        size="1x"
        icon={weatherMapping[weatherSymbol] ?? faQuestionCircle}
      />
      <div className="">{currentWeather.instant.details.air_temperature}°</div>
    </div>
  );
}
