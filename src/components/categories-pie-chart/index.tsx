import { ResponsivePie } from '@nivo/pie';
import { useMemo } from 'react';

import { theme } from '../../styles/theme';
import { formatCurrency } from '../../utils/format-currency';

const apiData = [
  {
    _id: '1',
    title: 'Alimentação',
    amount: 30000,
    color: '#ff33bb',
  },
  {
    _id: '2',
    title: 'Compras',
    amount: 15000,
    color: '#ff0',
  },
  {
    _id: '3',
    title: 'Streaming',
    amount: 6000,
    color: '#08ff00',
  },
];

type ChartData = {
  id: string;
  label: string;
  externalId: string;
  value: number;
  color: string;
};

export function CategoriesPieChart() {
  const data = useMemo<ChartData[]>(() => {
    const chartData = apiData.map((item) => ({
      id: item.title,
      label: item.title,
      externalId: item._id,
      value: item.amount,
      color: item.color,
    }));

    return chartData;
  }, []);

  return (
    <ResponsivePie
      data={data}
      enableArcLabels={false}
      enableArcLinkLabels={false}
      colors={({ data }) => data.color}
      margin={{ top: 20 }}
      valueFormat={formatCurrency}
      theme={{
        text: {
          fontFamily: 'Lexend',
          fontSize: 10,
        },
        tooltip: {
          container: {
            backgroundColor: theme.zinc[900],
            boxShadow: '0px 0px 20px rgba(0, 0, 0, .5)',
            padding: 12,
            color: theme.zinc[100],
            fontFamily: 'Lexend',
            fontSize: 12,
            borderRadius: 4,
          },
        },
      }}
      legends={[
        {
          anchor: 'top',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: -20,
          itemWidth: 120,
          itemHeight: 16,
          itemTextColor: theme.zinc[200],
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 10,
          symbolShape: 'circle',
        },
      ]}
    />
  );
}
