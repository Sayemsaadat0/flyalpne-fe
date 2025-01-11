'use client';
import { motion } from 'framer-motion';

import Image from 'next/image';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function MyOrders() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto  "
    >
      <h1 className="text-2xl font-semibold my-5">My Orders</h1>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid grid-cols-3 lg:grid-cols-5 w-full bg-f-primary-1-50 text-black overflow-x-auto">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="to-pay">To Pay</TabsTrigger>
          <TabsTrigger value="to-ship">To Ship</TabsTrigger>
          <TabsTrigger value="to-receive">To Receive</TabsTrigger>
          <TabsTrigger value="to-review">To Review(70)</TabsTrigger>
        </TabsList>

        <div className="mt-6 flex items-center gap-4">
          <span className="text-sm">Show:</span>
          <Select defaultValue="all">
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="All Orders" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Orders</SelectItem>
              <SelectItem value="last-30-days">Last 30 Days</SelectItem>
              <SelectItem value="last-6-months">Last 6 Months</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <TabsContent value="all" className="mt-6 space-y-4">
          <Card className="shadow-lg bg-red-50">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-f-primary-1-50 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-semibold">Z</span>
                  </div>
                  <span className="font-medium">Zesan Enterprise</span>
                </div>
                <Badge variant="destructive">Cancelled</Badge>
              </div>
              <Separator className="my-4" />
              <div className="flex lg:flex-row flex-col gap-4">
                <Image
                  src="/bycycle.png"
                  alt="Power Bank"
                  width={100}
                  height={100}
                  className="rounded-lg object-cover"
                />
                <div className="flex-1 space-y-1">
                  <h3 className="font-bold text-slate-600">
                    Joyroom JR-QP191 10000mAh 22.5W LED Display Battery Status Monitoring Power Bank
                  </h3>
                  <p className="text-sm text-muted-foreground">Color Family: Black</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-semibold">$ 1,429</span>
                    <span className="text-sm text-muted-foreground">Qty: 1</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg ">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-f-primary-1-50 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-semibold">A</span>
                  </div>
                  <span className="font-medium">AMORVOR</span>
                </div>
                <Badge variant="default" className="text-xs">
                  Delivered
                </Badge>
              </div>
              <Separator className="my-4" />
              <div className="flex lg:flex-row flex-col gap-4">
                <Image
                  src="/bycycle.png"
                  alt="Phone Case"
                  width={100}
                  height={100}
                  className="rounded-lg object-cover"
                />
                <div className="flex-1 space-y-1">
                  <h3 className="font-bold text-slate-600">
                    AMORVOR for Realme X2 Pro/Reno Ace Back Cover Space Astronaut Case Camera
                    Protection
                  </h3>
                  <p className="text-sm text-muted-foreground">Color Family: Black</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-semibold">$ 219</span>
                    <span className="text-sm text-muted-foreground">Qty: 1</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="to-pay">
          <div className="mt-6 text-center text-muted-foreground">No orders to pay</div>
        </TabsContent>

        <TabsContent value="to-ship">
          <div className="mt-6 text-center text-muted-foreground">No orders to ship</div>
        </TabsContent>

        <TabsContent value="to-receive">
          <div className="mt-6 text-center text-muted-foreground">No orders to receive</div>
        </TabsContent>

        <TabsContent value="to-review">
          <div className="mt-6 text-center text-muted-foreground">You have 70 orders to review</div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
