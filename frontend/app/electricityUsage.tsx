import ConsumptionBarChart from "./consumptionChart";
import { secrets } from "./secrets";

async function getConsumption() {
  const { apiKey, meter, meterPoint } = secrets.octopus;
  const repsonse = await fetch(
    `https://api.octopus.energy/v1/electricity-meter-points/${meterPoint}/meters/${meter}/consumption/`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(`${apiKey}:`).toString("base64")}:`,
      },
    }
  );
  const result = await repsonse.json();
  return result.results.reverse();
}

export default async function ElectricityUsage() {
  const data = await getConsumption();

  return <ConsumptionBarChart data={data} />;
}
