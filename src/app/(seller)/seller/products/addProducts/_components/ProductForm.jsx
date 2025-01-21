'use client';

import * as React from 'react';
import { Check } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const SIZES = ['S', 'M', 'L', 'XL', 'XXL'];
const COLORS = [
  { name: 'Pink', value: '#ff69b4' },
  { name: 'Navy', value: '#000080' },
  { name: 'Mint', value: '#98ff98' },
  { name: 'Teal', value: '#008080' },
];

export default function ProductForm() {
  const [selectedColor, setSelectedColor] = React.useState(COLORS[0].value);
  const [selectedSizes, setSelectedSizes] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="productName">PRODUCT NAME</Label>
              <Input id="productName" className="mt-1.5" />
            </div>

            <div>
              <Label htmlFor="category">SELECT CATEGORIES</Label>
              <Select defaultValue="t-shirt">
                <SelectTrigger className="mt-1.5">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="t-shirt">T-shirt</SelectItem>
                  <SelectItem value="hoodie">Hoodie</SelectItem>
                  <SelectItem value="sweater">Sweater</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="slug">SLUG</Label>
              <Input id="slug" className="mt-1.5" />
            </div>

            <div>
              <Label htmlFor="shortDescription">SORT DESCRIPTION</Label>
              <Textarea id="shortDescription" className="mt-1.5" />
            </div>

            <div>
              <Label>COLORS</Label>
              <div className="flex gap-2 mt-1.5">
                {COLORS.map((color) => (
                  <button
                    key={color.value}
                    type="button"
                    className="w-8 h-8 rounded-full relative"
                    style={{ backgroundColor: color.value }}
                    onClick={() => setSelectedColor(color.value)}
                  >
                    {selectedColor === color.value && (
                      <Check className="w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white stroke-[3]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Label>SIZE</Label>
              <div className="flex gap-4 mt-1.5">
                {SIZES.map((size) => (
                  <div key={size} className="flex items-center space-x-2">
                    <Checkbox
                      id={`size-${size}`}
                      checked={selectedSizes.includes(size)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedSizes([...selectedSizes, size]);
                        } else {
                          setSelectedSizes(selectedSizes.filter((s) => s !== size));
                        }
                      }}
                    />
                    <Label htmlFor={`size-${size}`}>{size}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="price">PRICE</Label>
                <div className="relative mt-1.5">
                  <Input id="price" type="number" step="0.01" min="0" />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                    ( in USD )
                  </span>
                </div>
              </div>

              <div>
                <Label htmlFor="quantity">QUANTITY</Label>
                <Input id="quantity" type="number" min="0" className="mt-1.5" />
              </div>
            </div>

            <div>
              <Label htmlFor="fullDetail">FUL DETAIL</Label>
              <Textarea id="fullDetail" className="mt-1.5" />
            </div>

            <div>
              <Label htmlFor="tags">PRODUCT TAGS</Label>
              <Input id="tags" className="mt-1.5" />
              <p className="mt-1.5 text-sm text-muted-foreground">
                ( Type and make comma to separate tags )
              </p>
            </div>
          </div>

          <Button type="submit" className="w-24 bg-f-primary-1-600 text-white">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
