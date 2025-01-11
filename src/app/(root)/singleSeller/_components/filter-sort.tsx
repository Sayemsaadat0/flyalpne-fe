'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

interface FilterSortProps {
  productsCount: number;
}

export const FilterSort = ({ productsCount }: FilterSortProps) => {
  const [sortOption, setSortOption] = useState('Featured');

  return (
    <div className="flex justify-between items-center mb-6">
      <p className="text-sm text-gray-500">Showing {productsCount} products</p>
      <div className="flex space-x-4">
        <div className="flex items-center space-x-2">
          {/* <Label htmlFor="search" className="sr-only">
            Search products
          </Label> */}
          <Input id="search" placeholder="Search products..." className="w-[200px]" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Sort: {sortOption}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setSortOption('Featured')}>Featured</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSortOption('Price: Low to High')}>
              Price: Low to High
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSortOption('Price: High to Low')}>
              Price: High to Low
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSortOption('Newest')}>Newest</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
