import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export const ProfileStatus = () => {
  return (
    <Card className="bg-[#EAF5EF]">
      <CardHeader className="flex flex-row items-center justify-between  ">
        <CardTitle>Profile Status</CardTitle>
        <span className="text-sm text-muted-foreground">Update all setting</span>
      </CardHeader>
      <CardContent>
        {/* <Progress value={60} className="h-2 " /> */}
        <p className="mt-2 text-sm text-muted-foreground">60% completed</p>
      </CardContent>
    </Card>
  );
}
