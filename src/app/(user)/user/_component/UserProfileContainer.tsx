'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExpertiseSection } from './Dummy Content/ExpertiseSection';
import { ProfileStatus } from './Dummy Content/ProfileStatus';
import { StatsCard } from './Dummy Content/StatsCard';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { UserPieChart } from './Dummy Content/UserPieChart';
import { UserBarChart } from './Dummy Content/UserBarChart';

const UserProfileContainer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" flex-1 space-y-6 "
    >
      <div className="rounded-lg bg-[#E8ECF9] text-[#0E266C] font-extrabold px-6 py-10 min-h-[200px] flex justify-center items-center text-center">
        <h1 className="text-2xl font-bold">Welcome To Profile Section</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          className="bg-slate-200 text-[#0E266C] text-center"
          label="Total Products in cart"
          value="12 "
        />
        <StatsCard
          className="bg-slate-200 text-[#0E266C]  text-center"
          label="Items Bought"
          value="10"
        />
        <StatsCard
          className="bg-slate-200 text-[#0E266C]  text-center"
          label="Total Active Session"
          value="0"
        />
        <StatsCard
          className="bg-slate-200 text-[#0E266C]  text-center"
          label="Total Spend"
          value="120$"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className=" flex-1 space-y-6 ">
          <UserPieChart />
          <ExpertiseSection />
        </div>
        <div className="space-y-6">
          <UserBarChart />
          <ProfileStatus />
          <Card>
            <CardHeader>
              <CardTitle>Setup your time schedule</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Connect calendar</span>
                <Button variant={'outline'} className="bg-slate-500 text-white font-bold w-[120px]">
                  Connect
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <span>Asia/Dhaka (+06)</span>
                <Button variant="outline" className="bg-slate-500 text-white font-bold w-[120px]">
                  Update
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <span>Set up your sessions</span>
                <Button variant="outline" className="bg-slate-500 text-white font-bold w-[120px] ">
                  Create
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};

export default UserProfileContainer;
