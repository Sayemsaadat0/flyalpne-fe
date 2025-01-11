'use client';

import * as React from 'react';
import { Label, Pie, PieChart, Cell } from 'recharts';

import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

// Define the chart configuration
const chartConfig = {
  below30: {
    label: '$0 to $30',
    color: '#299D90',
  },
  from30To50: {
    label: '$31 to $50',
    color: '#E76E50',
  },
  from50To100: {
    label: '$51 to $100',
    color: '#1D81F3',
  },
  from100To150: {
    label: '$101 to $150',
    color: '#264753',
  },
  above150: {
    label: 'Orders above $150',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig;

const dummyOrders = [
  { Price: 25, status: 'completed' },
  { Price: 40, status: 'completed' },
  { Price: 60, status: 'completed' },
  { Price: 120, status: 'completed' },
  { Price: 180, status: 'completed' },
  { Price: 20, status: 'completed' },
  { Price: 35, status: 'completed' },
  { Price: 75, status: 'completed' },
  { Price: 130, status: 'completed' },
  { Price: 210, status: 'completed' },
  { Price: 50, status: 'completed' },
  { Price: 95, status: 'completed' },
  { Price: 140, status: 'completed' },
  { Price: 160, status: 'completed' },
  { Price: 45, status: 'cancelled' }, // Cancelled orders are ignored
  { Price: 90, status: 'completed' },
  { Price: 150, status: 'completed' },
  { Price: 175, status: 'completed' },
];

export const UserPieChart = ({
  // orders,
  isloading,
}: any) => {
  const orders = dummyOrders;
  const getOrdersBelow30 = orders?.filter(
    (item: any) => item.Price <= 30 && item.status.toLowerCase() != 'cancelled',
  );
  const getOrdersFrom30To50 = orders?.filter(
    (item: any) =>
      item?.Price >= 31 && item?.Price <= 50 && item?.status?.toLowerCase() != 'cancelled',
  );
  const getOrdersFrom50To100 = orders?.filter(
    (item: any) =>
      item?.Price >= 51 && item?.Price <= 100 && item?.status?.toLowerCase() != 'cancelled',
  );
  const getOrdersFrom100To150 = orders?.filter(
    (item: any) =>
      item?.Price >= 101 && item?.Price <= 150 && item?.status?.toLowerCase() != 'cancelled',
  );
  const getOrdersAbove150 = orders?.filter(
    (item: any) => item.Price > 150 && item.status.toLowerCase() != 'cancelled',
  );

  const getOrdersChartData = [
    {
      title: chartConfig.below30.label,
      count: getOrdersBelow30?.length,
      fill: chartConfig.below30.color,
    },
    {
      title: chartConfig.from30To50.label,
      count: getOrdersFrom30To50?.length,
      fill: chartConfig.from30To50.color,
    },
    {
      title: chartConfig.from50To100.label,
      count: getOrdersFrom50To100?.length,
      fill: chartConfig.from50To100.color,
    },
    {
      title: chartConfig.from100To150.label,
      count: getOrdersFrom100To150?.length,
      fill: chartConfig.from100To150.color,
    },
    {
      title: chartConfig.above150.label,
      count: getOrdersAbove150?.length,
      fill: chartConfig.above150.color,
    },
  ];

  const totalOrders = React.useMemo(() => {
    return getOrdersChartData.reduce((acc, curr) => acc + curr.count, 0);
  }, [getOrdersChartData]);

  return (
    <Card className="flex flex-col shadow-lg mx-auto">
      <CardHeader className="items-center pb-0">
        <CardDescription className="text-center">Items bought by price ratio </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig} // Pass the chartConfig here
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={getOrdersChartData}
              dataKey="count"
              nameKey="title"
              innerRadius={60}
              strokeWidth={5}
            >
              {getOrdersChartData?.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
              {/* <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    {totalOrders.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    Orders
                                                </tspan>
                                            </text>
                                        );
                                    }
                                }}
                            /> */}
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground text-center">
          Showing total orders bought by price ratio
        </div>
      </CardFooter>
    </Card>
  );
}
