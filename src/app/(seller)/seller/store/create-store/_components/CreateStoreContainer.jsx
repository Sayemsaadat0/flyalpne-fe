'use client';

import { useState } from 'react';
import { Plus, Store, Upload, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
// import shopLogo from 'assets/img/shop.png';

// interface StoreForm {
//   name: string
//   description: string
//   category: string
//   address: string
//   phone: string
//   logo: string
//   banner: string
// }

const initialStoreForm /*: StoreForm */ = {
  name: '',
  description: '',
  category: '',
  address: '',
  phone: '',
  logo: '',
  banner: '',
};

const categories = [
  'Fashion',
  'Electronics',
  'Home & Garden',
  'Sports',
  'Books',
  'Toys',
  'Health & Beauty',
  'Automotive',
  'Other',
];

const CreateStoreContainer = () => {
  const [stores, setStores] = useState(/*: StoreForm[] */ [{ ...initialStoreForm }]);

  const addStore = () => {
    setStores([...stores, { ...initialStoreForm }]);
  };

  const removeStore = (index /*: number */) => {
    if (stores.length > 1) {
      setStores(stores.filter((_, i) => i !== index));
    }
  };

  const updateStore = (index /*: number */, field /*: keyof StoreForm */, value /*: string */) => {
    const updatedStores = stores.map((store, i) => {
      if (i === index) {
        return { ...store, [field]: value };
      }
      return store;
    });
    setStores(updatedStores);
  };

  const handleSubmit = (e /*: React.FormEvent */) => {
    e.preventDefault();
    console.log(stores);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col gap-4 lg:flex-row justify-between items-center mb-6">
        <div className="flex justify-start items-center gap-1">
          <Image
            className="rounded-xl w-20 h-20"
            src="/assets/img/shop.png"
            width={100}
            height={100}
            alt="shop logo"
          />
          <h1 className="text-2xl font-bold">Create Store</h1>
        </div>
        <Button onClick={addStore} variant="outline">
          <Plus className="w-4 h-4 mr-2" />
          Add Another Store
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {stores.map((store, index) => (
          <Card key={index} className="relative">
            <CardContent className="p-6">
              {index > 0 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2"
                  onClick={() => removeStore(index)}
                >
                  <X className="w-4 h-4" />
                </Button>
              )}

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Store Name
                    </label>
                    <Input
                      placeholder="Enter store name"
                      value={store.name}
                      onChange={(e) => updateStore(index, 'name', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <Select
                      value={store.category}
                      onValueChange={(value) => updateStore(index, 'category', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category.toLowerCase()}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input
                      placeholder="Enter phone number"
                      value={store.phone}
                      onChange={(e) => updateStore(index, 'phone', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Description
                    </label>
                    <Textarea
                      placeholder="Enter store description"
                      className="min-h-[120px]"
                      value={store.description}
                      onChange={(e) => updateStore(index, 'description', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <Textarea
                      placeholder="Enter store address"
                      className="min-h-[120px]"
                      value={store.address}
                      onChange={(e) => updateStore(index, 'address', e.target.value)}
                    />
                  </div>
                </div>

                <div className="lg:col-span-2 grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Store Logo
                    </label>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full lg:h-40 border-2 border-dashed rounded-lg cursor-pointer p-3 bg-gray-50 hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-4 text-gray-500" />
                          <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                          </p>
                        </div>
                        <Input
                          type="file"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              updateStore(index, 'logo', URL.createObjectURL(file));
                            }
                          }}
                        />
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Store Banner
                    </label>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full lg:h-40 border-2 border-dashed rounded-lg cursor-pointer p-3 bg-gray-50 hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-4 text-gray-500" />
                          <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">
                            SVG, PNG, JPG or GIF (MAX. 1920x400px)
                          </p>
                        </div>
                        <Input
                          type="file"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              updateStore(index, 'banner', URL.createObjectURL(file));
                            }
                          }}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit" className="bg-purple-400 text-white font-bold hover:bg-purple-700 ">
            <Store className="w-4 h-4 mr-2" />
            Create Store{stores.length > 1 ? 's' : ''}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateStoreContainer;
