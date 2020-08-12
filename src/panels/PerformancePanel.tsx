import React from "react";
import {
  Chart,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartTitle,
  ChartTooltip,
} from "@progress/kendo-react-charts";
import { getPerformance } from "../services/dataService";

export default function PerformancePanel() {
  const [data, setData] = React.useState<string[]>();
  React.useEffect(() => {
    getPerformance().then((results: string[]) => {
      setData(results);
    })
  }, []);

  return (
    <Chart>
      <ChartTitle text="Fund Performance: Growth of Hypothetical $10,000" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem categories={["Jul-10",
                                            "Jul-11",
                                            "Jul-12",
                                            "Jul-13",
                                            "Jul-14",
                                            "Jul-15",
                                            "Jul-16",
                                            "Jul-17",
                                            "Jul-18",
                                            "Jul-19",
                                            "Jul-20"
                                            ]} />
      </ChartCategoryAxis>
      <ChartValueAxis>
            <ChartValueAxisItem min={7500} max={20000} majorUnit={2500} />
        </ChartValueAxis>
      <ChartSeries>
        <ChartSeriesItem type="line" data={data} />
      </ChartSeries>
    </Chart>
  )
}
