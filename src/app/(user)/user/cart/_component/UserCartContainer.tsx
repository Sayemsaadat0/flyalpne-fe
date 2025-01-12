'use client';

import { useState } from 'react';
import { Minus, Plus, Heart, Trash2, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface CartItem {
  id: number;
  name: string;
  description: string;
  brand: string;
  color: string;
  price: number;
  originalPrice: number;
  quantity: number;
  image: string;
  endsAt?: string;
}

const UserCartContainer = () => {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Portable Foldable Laptop Table',
      description: 'Home Laptop/Notebook Stand Desk for Study',
      brand: 'No Brand',
      color: 'Black',
      price: 320,
      originalPrice: 540,
      quantity: 1,
      image:
        'https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXouY29tLmJkL3AvZTNhMGZlMjk3NjU4NDUyNTcyYzhkN2M2N2ZhYzdiY2YuanBn_2200x2200q75.png_.webp',
      endsAt: 'Dec 31 23:59:59',
    },
    {
      id: 2,
      name: 'BOYA BY-M1 Condenser Professional Lavalier Lapel',
      description: 'Microphone for PC iPhone Camera YouTube',
      brand: 'BOYA',
      color: 'Black',
      price: 1050,
      originalPrice: 2270,
      quantity: 1,
      image:
        'https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9iZC1saXZlLTIxLnNsYXRpYy5uZXQva2YvUzQ4MzMxYjE5MWM0ZDRiZTM5OTYzMDhlNWQ2OGViMTc3ay5qcGc=_2200x2200q75.png_.webp',
    },
  ]);

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const toggleSelectAll = () => {
    if (selectedItems.length === items.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(items.map((item) => item.id));
    }
  };

  const toggleSelectItem = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const updateQuantity = (id: number, increment: boolean) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: increment ? item.quantity + 1 : Math.max(1, item.quantity - 1),
          };
        }
        return item;
      }),
    );
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/user/cart/checkout'); // Replace with the desired route
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-4"
    >
      <div className="grid xl:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox
                checked={selectedItems.length === items.length}
                onCheckedChange={toggleSelectAll}
              />
              <span className="text-sm text-muted-foreground">
                SELECT ALL ({items.length} ITEMS)
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="hidden border text-red-700 shadow-md sm:flex"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              DELETE
            </Button>
          </div>

          <div className="space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="p-3 sm:p-4">
                <div className="flex  items-center flex-col xl:flex-row gap-4 relative">
                  <div className="flex gap-4 ">
                    <Checkbox
                      checked={selectedItems.includes(item.id)}
                      onCheckedChange={() => toggleSelectItem(item.id)}
                      className="mt-1.5 absolute left-0 top-0 xl:relative"
                    />
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="space-y-1">
                      <h3 className="font-medium line-clamp-2">{item.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {item.description}
                      </p>
                      <div className="text-sm text-muted-foreground">
                        {item.brand}, Color family:{item.color}
                      </div>
                      {item.endsAt && (
                        <div className="text-sm text-muted-foreground">Ends at {item.endsAt}</div>
                      )}
                    </div>
                    <div className="flex flex-col lg:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-semibold text-orange-500">
                          ৳ {item.price}
                        </span>
                        <span className="text-sm line-through text-muted-foreground">
                          ৳ {item.originalPrice}
                        </span>
                      </div>
                      <div className="flex items-center justify-between sm:justify-end gap-4">
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, false)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, true)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1 w-full  mx-auto">
          <Card className="p-4">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Location</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span>Bhandaria, Pirojpur,Barishal</span>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-4">Order Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal ({items.length} items)</span>
                    <span>৳ {subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping Fee</span>
                    <span>৳ 0</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex flex-col sm:flex-row gap-2">
                <Input placeholder="Enter Voucher Code" className="flex-1" />
                <Button variant="secondary" className="sm:w-24 bg-gray-100">
                  APPLY
                </Button>
              </div>

              <Separator />

              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>৳ {subtotal}</span>
              </div>

              <Button
                onClick={handleButtonClick}
                className="w-full bg-orange-500 text-white font-bold hover:bg-orange-600"
              >
                PROCEED TO CHECKOUT ({selectedItems.length})
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};

export default UserCartContainer;
