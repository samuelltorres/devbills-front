import { ResponsivePie } from '@nivo/pie';
import { useMemo } from 'react';

import { Expense } from '../../services/api.types';
import { theme } from '../../styles/theme';
import { formatCurrency } from '../../utils/format-currency';

type ChartData = {
  id: string;
  label: string;
  externalId: string;
  value: number;
  color: string;
};

export type CategoryProps = {
  id: string;
  title: string;
  color: string;
};

type CategoriesPieChartProps = {
  onClick: (category: CategoryProps) => void;
  expenses?: Expense[];
};

export function CategoriesPieChart({
  onClick,
  expenses,
}: CategoriesPieChartProps) {
  const data = useMemo<ChartData[]>(() => {
    if (expenses?.length) {
      const chartData = expenses.map((item) => ({
        id: item.title,
        label: item.title,
        externalId: item._id,
        value: item.amount,
        color: item.color,
      }));

      return chartData;
    }
    return [];
  }, [expenses]);

  return (
    <ResponsivePie
      onClick={({ data }) =>
        onClick({
          id: data.externalId,
          title: data.id,
          color: data.color,
        })
      }
      data={data}
      enableArcLabels={false}
      enableArcLinkLabels={false}
      colors={({ data }) => data.color}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      valueFormat={formatCurrency}
      activeOuterRadiusOffset={6}
      cornerRadius={5}
      padAngle={2}
      innerRadius={0.2}
      theme={{
        text: {
          fontFamily: 'Lexend',
          fontSize: 10,
        },
        tooltip: {
          container: {
            backgroundColor: theme.zinc[900],
            boxShadow: '0px 0px 20px rgba(0, 0, 0, .5)',
            border: '1px solid',
            borderColor: theme.zinc[700],
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
          anchor: 'right',
          direction: 'column',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: theme.zinc[50],
              },
            },
          ],
          itemHeight: 18,
          justify: false,
          itemWidth: 100,
          translateX: 0,
          translateY: 56,
          itemTextColor: theme.zinc[300],
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 10,
          symbolShape: 'circle',
        },
      ]}
    />
  );
}
