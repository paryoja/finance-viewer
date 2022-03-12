import { FC } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { useTheme } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

interface WatchListColumn1ChartProps {
  data: any[];
  labels: string[];
}

const WatchListColumn1Chart: FC<WatchListColumn1ChartProps> = ({
  data: dataProp,
  labels,
  ...rest
}) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: dataProp,
        borderWidth: 1,
        borderColor: theme.colors.primary.main,
        pointBorderWidth: 0,
        pointRadius: 0,
        pointHoverRadius: 0
      }
    ],
    labels
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    layout: {
      padding: 0
    },
    scales: {
      x: {
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          display: false
        }
      },
      y: {
        gridLines: {
          display: false
        },
        ticks: {
          display: false
        }
      }
    },
    tooltips: {
      enabled: true,
      mode: 'nearest',
      intersect: false,
      caretSize: 6,
      displayColors: false,
      yPadding: 8,
      xPadding: 16,
      borderWidth: 4,
      borderColor: theme.palette.common.black,
      backgroundColor: theme.palette.common.black,
      titleFontColor: theme.palette.common.white,
      bodyFontColor: theme.palette.common.white,
      footerFontColor: theme.palette.common.white,
      callbacks: {
        title: () => { },
        label: (tooltipItem: any) => {
          return `Price: $${tooltipItem.yLabel}`;
        }
      }
    }
  };

  return (
    <div {...rest}>
      <Line data={data} options={options} />
    </div>
  );
};

WatchListColumn1Chart.propTypes = {
  data: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired
};

export default WatchListColumn1Chart;
