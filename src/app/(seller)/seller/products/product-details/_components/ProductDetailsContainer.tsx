'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, MapPin, Mail, Phone } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ProductInfo from './ProductInfo';

interface ProductImage {
  src: string;
  color: string;
}

const productImages: ProductImage[] = [
  {
    src: '/assets/img/products/p12.jpg',
    color: 'Blue',
  },
  { src: '/assets/img/products/p13.jpg', color: 'Mint' },
  { src: '/assets/img/products/p14.jpg', color: 'Lime' },
  { src: '/assets/img/products/p15.jpg', color: 'Beige' },
];

const sizes = ['S', 'M', 'L', 'XL'];
const colors = ['bg-sky-300', 'bg-rose-300', 'bg-orange-200', 'bg-emerald-200', 'bg-pink-300'];

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="">
      <div className="container mx-auto p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold text-gray-700 mb-6">Product Detail</h1>
          <Button variant="outline" className="bg-f-primary-1-500 text-white ">
            Edit
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Images Section */}
          <div className="">
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <Image
                src={productImages[selectedImage].src || '/placeholder.svg'}
                alt={`Product view - ${productImages[selectedImage].color}`}
                width={600}
                height={600}
                className="w-full object-contain aspect-square rounded-lg"
                priority
              />
            </div>

            <div className="flex gap-4 overflow-x-auto pb-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 border-2 rounded-lg overflow-hidden ${
                    selectedImage === index ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <Image
                    src={image.src || '/placeholder.svg'}
                    alt={`Thumbnail ${index + 1}`}
                    width={100}
                    height={100}
                    className="w-24 h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Pure Leather Purse for Woman</h2>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
                <Star className="w-5 h-5 text-gray-300" />
              </div>

              <p className="text-gray-600 mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industrys standard dummy text ever since the 1990.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Available offers</h3>
              <div className="space-y-3">
                <p className="text-sm">
                  <span className="font-medium">Special Price:</span> Get extra 16% off (price
                  inclusive of discount)
                  <span className="text-blue-600 ml-1">T&C</span>
                </p>
                <p className="text-sm">
                  <span className="font-medium">Bank Offer:</span> 10% off on XYZ Bank Cards, up to
                  $12. On orders of $200 and above
                  <span className="text-blue-600 ml-1">T&C</span>
                </p>
                <p className="text-sm">
                  <span className="font-medium">Bank Offer:</span> 5% Unlimited Cashback on Ekka XYZ
                  Bank Credit Card
                  <span className="text-blue-600 ml-1">T&C</span>
                </p>
              </div>
            </div>

            <div>
              <p className="text-2xl font-bold mb-2">$120</p>
              <p className="text-sm text-gray-600">SKU#: WH12</p>
            </div>

            <div>
              <h3 className="font-medium mb-2">Size</h3>
              <div className="flex gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-primary"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Color</h3>
              <div className="flex gap-3">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 rounded-full ${color} border border-gray-200`}
                  />
                ))}
              </div>
            </div>

            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-lg font-semibold">180</div>
                <div className="text-sm text-gray-600">Available</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold">50</div>
                <div className="text-sm text-gray-600">Pending</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold">20</div>
                <div className="text-sm text-gray-600">InOrder</div>
              </div>
            </div>
          </div>
          {/* Seller Info Card */}
          <div className="mt-8">
            <Card>
              <CardContent className="flex flex-col items-center gap-6 p-6">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-emerald-100 flex items-center justify-center">
                  <Image
                    src="https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-set-image-stock-isolated-object-icon-collection-137161298.jpg?height=128&width=128"
                    alt="Seller avatar"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl font-semibold mb-2">John Karter</h3>
                  <div className="flex items-center gap-1 justify-center sm:justify-start mb-4">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                    <Star className="w-4 h-4 text-gray-300" />
                  </div>

                  <div className="space-y-2">
                    <p className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      321/2, rio street, usa.
                    </p>
                    <p className="flex items-center gap-2 text-gray-600">
                      <Mail className="w-4 h-4" />
                      example@email.com
                    </p>
                    <p className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-4 h-4" />
                      +00 987-654-3210
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <ProductInfo />
    </div>
  );
};

export default ProductDetails;
