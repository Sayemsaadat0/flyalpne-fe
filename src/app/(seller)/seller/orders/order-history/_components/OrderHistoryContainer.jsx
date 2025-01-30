'use client';

import { MoreHorizontal, Calendar, Filter } from 'lucide-react';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';
import { orders } from '@/data/seller.orders.dummy.data';

// const orders = [
//   {
//     id: "354",
//     item: {
//       name: "Smart Watch",
//       image: "/placeholder.svg?height=40&width=40",
//     },
//     customer: {
//       name: "Tokyo Naikra",
//       email: "naikra@example.com",
//     },
//     items: 10,
//     amount: 280,
//     payment: "PAID",
//     status: "DELIVERED",
//     date: new Date("2023-10-30"),
//   },
//   {
//     id: "654",
//     item: {
//       name: "Tee-Shirt For Men",
//       image: "/placeholder.svg?height=40&width=40",
//     },
//     customer: {
//       name: "Hardik Patel",
//       email: "patel000777@example.com",
//     },
//     items: 2,
//     amount: 50,
//     payment: "REFUNDED",
//     status: "RETURNED",
//     date: new Date("2023-11-15"),
//   },
//   // Add more sample data...
// ]

export function OrderHistoryContainer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState('20');
  const [currentPage, setCurrentPage] = useState(1);
  const [dateRange, setDateRange] = useState({
    from: new Date(new Date().setMonth(new Date().getMonth() - 1)),
    to: new Date(),
  });
  const [statusFilter, setStatusFilter] = useState([]);

  // Filter orders based on search term, date range, and status
  // const filteredOrders = orders.filter(
  //   (order) =>
  //     (order.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       order.customer.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
  //     order.date >= dateRange.from &&
  //     (!dateRange.to || order.date <= dateRange.to) &&
  //     (statusFilter.length === 0 || statusFilter.includes(order.status)),
  // );
  const filteredOrders = orders.filter((order) => order.status === 'DELIVERED');

  // Calculate pagination
  const totalPages = Math.ceil(filteredOrders.length / Number.parseInt(entriesPerPage));
  const startIndex = (currentPage - 1) * Number.parseInt(entriesPerPage);
  const endIndex = startIndex + Number.parseInt(entriesPerPage);
  const currentOrders = filteredOrders.slice(startIndex, endIndex);
  console.log('🚀 ~ OrderHistoryContainer ~ currentOrders:', filteredOrders);

  const getStatusColor = (status) => {
    switch (status) {
      case 'DELIVERED':
        return 'bg-green-100 text-green-800';
      case 'RETURNED':
        return 'bg-yellow-100 text-yellow-800';
      case 'CANCELLED':
        return 'bg-red-100 text-red-800';
      default:
        return '';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Show</span>
          <Select value={entriesPerPage} onValueChange={setEntriesPerPage}>
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={entriesPerPage} />
            </SelectTrigger>
            <SelectContent side="top">
              {['10', '20', '30', '40', '50'].map((size) => (
                <SelectItem key={size} value={size}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <span className="text-sm font-medium">entries</span>
        </div>
        {/* <Input
          placeholder="Search orders..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-xs"
        /> */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className=" bg-blue-50 border-blue-500 justify-start text-left font-normal"
            >
              <Calendar className="mr-2 h-4 w-4" />
              {dateRange.from ? (
                dateRange.to ? (
                  <>
                    {dateRange.from.toDateString()} - {dateRange.to.toDateString()}
                  </>
                ) : (
                  dateRange.from.toDateString()
                )
              ) : (
                <span>Pick a date range</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <CalendarComponent
              initialFocus
              mode="range"
              defaultMonth={dateRange.from}
              selected={dateRange}
              onSelect={(range) => setDateRange(range || { from: new Date(), to: undefined })}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="bg-green-50 border-green-500 ">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px]">
            {['DELIVERED', 'RETURNED', 'CANCELLED'].map((status) => (
              <div key={status} className="flex items-center space-x-2 mb-5">
                <Checkbox
                  id={status}
                  className=""
                  checked={statusFilter.includes(status)}
                  onCheckedChange={(checked) => {
                    setStatusFilter(
                      checked
                        ? [...statusFilter, status]
                        : statusFilter.filter((s) => s !== status),
                    );
                  }}
                />
                <label
                  htmlFor={status}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {status}
                </label>
              </div>
            ))}
          </PopoverContent>
        </Popover>
      </div>
      <div></div>
      <div className="rounded-md border  min-h-[60vh] ">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Payment</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="w-[50px]">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentOrders.length === 0 ? (
              <TableRow>
                <TableCell colSpan={9} className="h-24 text-center">
                  No results found.
                </TableCell>
              </TableRow>
            ) : (
              currentOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-medium">{order.customer.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{order.customer.email}</TableCell>
                  <TableCell>{order.items}</TableCell>
                  <TableCell>
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    }).format(order.amount)}
                  </TableCell>
                  <TableCell>{order.payment}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={`${order.status.toLocaleLowerCase() == 'delivered' && 'bg-teal-500'} text-white rounded-full font-extrabold`}
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">{order.date}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
                        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(order.id)}>
                          Copy Order ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Order details</DropdownMenuItem>
                        <DropdownMenuItem>Download invoice</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing {startIndex + 1} to {Math.min(endIndex, filteredOrders.length)} of{' '}
          {filteredOrders.length} results
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
