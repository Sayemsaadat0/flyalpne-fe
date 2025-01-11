import { Card, CardContent } from '@/components/ui/card';

interface StatsCardProps {
  label: string;
  value: string | number;
  className?: string;
}

export const StatsCard = ({ label, value, className }: StatsCardProps) => {
  return (
    <Card className={className}>
      <CardContent className="flex flex-col items-center justify-center p-6">
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-sm text-muted-foreground">{label}</p>
      </CardContent>
    </Card>
  );
}
