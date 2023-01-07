import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { SaleSuccess } from "../../types/sale";
import { round } from "../../utils/format";
import { BASE_URL } from "../../utils/requests";

type SeriesData = {
  name: string;
  data: number[];
};

type ChartData = {
  labels: {
    categories: string[];
  };
  series: SeriesData[];
};

function Footer() {
  const [chartData, setChartData] = useState<ChartData>({
    labels: {
      categories: []
    },
    series: [
      {
        name: "",
        data: []
      }
    ]
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/sales/success-by-seller`).then(res => {
      const data = res.data as SaleSuccess[];
      const categories = data.map(el => el.sellerName);
      const seriesData = data.map(el =>
        round(100.0 * (el.deals / el.visited), 1)
      );

      setChartData({
        labels: {
          categories
        },
        series: [
          {
            name: "% Sucesso",
            data: seriesData
          }
        ]
      });
    });
  }, []);

  const options = {
    plotOptions: {
      bar: {
        horizontal: true
      }
    }
  };

  return (
    <ReactApexChart
      options={{ ...options, xaxis: chartData.labels }}
      series={chartData.series}
      type="bar"
      height="240"
    />
  );
}

export default Footer;
