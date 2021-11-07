import { BASE_URL } from "utils/requests";
import { SaleSum } from "types/sale";
import axios from "axios";
import ReactApexChart from "react-apexcharts";

type ChartData = {
  labels: string[];
  series: number[];
};

function DonutChart() {
  let chartData: ChartData = { labels: [], series: [] };

  axios.get(`${BASE_URL}/sales/amount-by-seller`).then((res) => {
    const data = res.data as SaleSum[];
    const labels = data.map((el) => el.sellerName);
    const series = data.map((el) => el.sum);

    chartData = { labels, series };
    console.log(chartData);
  });

  const options = {
    legend: {
      show: true,
    },
  };

  const mockData = {
    series: [477138, 499928, 444867, 220426, 473088],
    labels: ["Anakin", "Barry Allen", "Kal-El", "Logan", "Padmé"],
  };

  return (
    <ReactApexChart
      options={{ ...options, labels: chartData.labels }}
      series={chartData.series}
      type="donut"
      height="240"
    />
  );
}

export default DonutChart;
