'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { X } from 'lucide-react';
import { categories, colors, lifeStyles } from '../dummyData';
import PriceRangeSlider from './PriceRangeSlider';

const ProductFilters = () => {
  return (
    <div className="md:w-[280px]  bg-white p-4 md:border rounded-lg font-semibold">
      {/* Categories Section */}
      <Accordion
        type="multiple"
        collapsible="true"
        defaultValue={['categories', 'price', 'brand', 'color']}
      >
        {/* Categories Section */}
        <AccordionItem value="categories">
          <div className="flex items-center justify-between">
            <AccordionTrigger className="text-sm font-bold text-[#227989]">
              CATEGORIES
            </AccordionTrigger>
            <X className="h-4 w-4 text-gray-400" />
          </div>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              {categories.map((category) => (
                <div key={category.name} className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{category.name}</span>
                  <span className="text-sm text-gray-400">{category.count}</span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Price Section */}
        <PriceRangeSlider />

        {/* Brand Section */}
        <AccordionItem value="brand">
          <div className="flex items-center justify-between">
            <AccordionTrigger className="font-bold text-[#227989]">BRAND</AccordionTrigger>
            <X className="h-4 w-4 text-gray-400" />
          </div>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              {lifeStyles.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox id={brand} />
                  <label htmlFor={brand} className="text-sm text-gray-600">
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Color Section */}
        <AccordionItem value="color">
          <div className="flex items-center justify-between">
            <AccordionTrigger className="font-bold text-[#227989]">COLOR</AccordionTrigger>
            <X className="h-4 w-4 text-gray-400" />
          </div>
          <AccordionContent>
            <div className="grid grid-cols-4 gap-3 pt-2">
              {colors.map((color, index) => (
                <button
                  key={index}
                  className={`w-8 h-8 rounded-full ${color} border-2 border-transparent hover:border-gray-300 focus:border-gray-300 transition-colors`}
                  aria-label={`Select ${color.replace('bg-', '').replace('-500', '')} color`}
                />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ProductFilters;
