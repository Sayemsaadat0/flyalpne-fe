'use client';

import Image from 'next/image';
import { FileText, Info, Star } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

// interface Review {
//   id: number
//   name: string
//   rating: number
//   comment: string
//   avatar: string
// }

const reviews = [
  {
    id: 1,
    name: 'Jeny Doe',
    rating: 4,
    comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    avatar:
      'https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-admin/assets/img/review-image/1.jpg?height=80&width=80',
  },
  {
    id: 2,
    name: 'Linda Morgus',
    rating: 4,
    comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    avatar:
      'https://maraviyainfotech.com/projects/ekka/ekka-v37/ekka-admin/assets/img/review-image/2.jpg?height=80&width=80',
  },
];

const ProductInfo = () => {
  return (
    <Tabs defaultValue="reviews" className="w-full my-10">
      <TabsList className="grid bg-f-primary-1-100 w-full grid-cols-3  border  h-auto p-0">
        <TabsTrigger
          value="detail"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none hover:bg-purple-300 text-black py-3"
        >
          <FileText className="h-4 w-4 mr-2" />
          Detail
        </TabsTrigger>

        <TabsTrigger
          value="info"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none py-3 hover:bg-purple-300 text-black"
        >
          <Info className="h-4 w-4 mr-2" />
          Info
        </TabsTrigger>

        <TabsTrigger
          value="reviews"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none py-3 hover:bg-purple-300 text-black"
        >
          <Star className="h-4 w-4 mr-2" />
          Reviews
        </TabsTrigger>
      </TabsList>

      <TabsContent value="reviews" className="p-4">
        <div className="space-y-6">
          {reviews.map((review) => (
            <Card key={review.id} className="border-0 shadow-none">
              <CardContent className="p-0">
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src={review.avatar || '/placeholder.svg'}
                      alt={review.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">{review.name}</h3>
                    <div className="flex gap-0.5 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? 'fill-primary text-primary' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="detail" className="p-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">►</span>
            <span>Weight 1000 g</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">►</span>
            <span>Dimensions 35 × 30 × 7 cm</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">►</span>
            <span>Color Black, Pink, Red, White</span>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="info" className="p-4">
        <div className="space-y-4">
          <p className="text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-gray-500">►</span>
              <span>Any Product types that You want - Simple, Configurable</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500">►</span>
              <span>Downloadable/Digital Products, Virtual Products</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500">►</span>
              <span>Inventory Management with Backordered items</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500">►</span>
              <span>Flatlock seams throughout</span>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ProductInfo;
