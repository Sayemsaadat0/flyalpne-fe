'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Edit, MoreVertical, Plus, Store, Trash } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface SellerStore {
  id: string;
  name: string;
  category: string;
  logo: string;
  productsCount: number;
  ordersCount: number;
  revenue: number;
}

const mockStores: SellerStore[] = [
  {
    id: '1',
    name: 'Tech Haven',
    category: 'Electronics',
    logo: '/assets/img/shop.png',
    productsCount: 150,
    ordersCount: 1200,
    revenue: 45000,
  },
  {
    id: '2',
    name: 'Fashion Forward',
    category: 'Clothing',
    logo: '/assets/img/shop.png?height=100&width=100',
    productsCount: 300,
    ordersCount: 2500,
    revenue: 75000,
  },
  {
    id: '3',
    name: 'Home Essentials',
    category: 'Home & Garden',
    logo: '/assets/img/shop.png?height=100&width=100',
    productsCount: 200,
    ordersCount: 1800,
    revenue: 60000,
  },
  {
    id: '4',
    name: 'Sporty Spot',
    category: 'Sports',
    logo: '/assets/img/shop.png?height=100&width=100',
    productsCount: 100,
    ordersCount: 800,
    revenue: 30000,
  },
];

const SellerStoresContainer = () => {
  const [stores, setStores] = useState<SellerStore[]>(mockStores);

  const handleDeleteStore = (storeId: string) => {
    setStores(stores.filter((store) => store.id !== storeId));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Stores</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add New Store
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stores.map((store) => (
          <Card key={store.id} className="flex flex-col">
            <CardContent className="flex-grow p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                    <Image
                      src={store.logo || '/assets/img/shop.png'}
                      alt={`${store.name} logo`}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">{store.name}</h2>
                    <p className="text-sm text-gray-500">{store.category}</p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => handleDeleteStore(store.id)}>
                      <Trash className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Products</p>
                  <p className="font-semibold">{store.productsCount}</p>
                </div>
                <div>
                  <p className="text-gray-500">Orders</p>
                  <p className="font-semibold">{store.ordersCount}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-gray-500">Revenue</p>
                  <p className="font-semibold">${store.revenue.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-gray-50 p-4">
              <Button className="w-full bg-blue-100" variant="outline">
                <Store className="w-4 h-4 mr-2" />
                Manage Store
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SellerStoresContainer;
