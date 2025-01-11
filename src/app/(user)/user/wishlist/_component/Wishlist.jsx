'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ShoppingCart, Trash } from 'lucide-react';
import { motion } from 'framer-motion';

// interface Product {
//   id: number
//   name: string
//   price: number
//   originalPrice?: number
//   discount?: number
//   store: string
//   image: string
//   details: string
//   inStock: boolean
// }

const products = [
  {
    id: 1,
    name: "Men's Summer Casual Loafer Half Shoe - Comfortable And Stylish For Any Occasion",
    price: 290,
    store: 'En Shop - Choice Selection',
    image: '/bycycle.png',
    details: 'Location: Area 421',
    inStock: true,
  },
  {
    id: 2,
    name: "Regular Neck Pillow, Ash, (11'x12'), 1 Pcs",
    price: 275,
    originalPrice: 690,
    discount: 60,
    store: 'Agrey Hometex',
    image: '/bycycle.png',
    details: 'Color Family: Light Ash',
    inStock: true,
  },
  {
    id: 3,
    name: 'New Grey Export Quality Stylish Cap For Men And Women',
    price: 190,
    originalPrice: 299,
    discount: 36,
    store: 'UPWAY FASHION',
    image: '/bycycle.png',
    details: 'Size: One size, Color Family: Black',
    inStock: true,
  },
];

export default function WishlistPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container py-6 space-y-6"
    >
      <div className="space-y-4">
        <h1 className="text-2xl font-medium">My Wishlist & Followed Stores (49)</h1>

        <Tabs defaultValue="wishlist" className="w-full">
          <TabsList className="bg-f-primary-1-50 text-black">
            <TabsTrigger value="wishlist">My Wishlist (49)</TabsTrigger>
            <TabsTrigger value="purchases">Past Purchases</TabsTrigger>
            <TabsTrigger value="stores">Followed Stores</TabsTrigger>
          </TabsList>

          <TabsContent value="wishlist" className="space-y-4">
            <Button className="w-full sm:w-auto bg-f-primary-1-400 text-white">
              Add all to cart
            </Button>

            <div className="divide-y border rounded-lg bg-white">
              {products.map((product) => (
                <div key={product.id} className="p-4 flex flex-col sm:flex-row gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={100}
                      height={100}
                      className="rounded-md object-cover"
                    />
                  </div>

                  <div className="flex-grow space-y-2">
                    <div className="font-medium text-sm">{product.store}</div>
                    <h3 className="font-bold">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.details}</p>

                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-bold">৳ {product.price}</span>
                      {product.originalPrice && (
                        <>
                          <span className="text-sm text-muted-foreground line-through">
                            ৳ {product.originalPrice}
                          </span>
                          <span className="text-sm text-green-600">-{product.discount}%</span>
                        </>
                      )}
                    </div>

                    {product.inStock ? (
                      <div className="text-sm text-green-600">Back in stock</div>
                    ) : (
                      <div className="text-sm text-red-600">Out of stock</div>
                    )}
                  </div>

                  <div className="flex-shrink-0 flex gap-2 flex-col">
                    <Button className="w-full sm:w-auto bg-f-primary-1 text-white">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button className="w-full sm:w-auto bg-gray-300 text-black">
                      <Trash className="w-4 h-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="purchases">
            <div className="text-center py-8 text-muted-foreground">No past purchases to show</div>
          </TabsContent>

          <TabsContent value="stores">
            <div className="text-center py-8 text-muted-foreground">No followed stores to show</div>
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
}
