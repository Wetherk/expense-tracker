import "./Chart.css";
import ChartBar from "./ChartBar";
import Card from "../UI/Card";

function Chart({ dataPoints }) {
    let maxValue = 0;
    dataPoints.forEach((dataPoint) => {
        maxValue += dataPoint.value;
    });

    return (
        <Card className="chart">
            {dataPoints.map(({ value, label }) => (
                <ChartBar
                    key={label}
                    value={value}
                    maxValue={maxValue}
                    label={label}
                />
            ))}
        </Card>
    );
}

export default Chart;
