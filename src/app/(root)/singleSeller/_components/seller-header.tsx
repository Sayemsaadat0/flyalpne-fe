'use client';
import Image from 'next/image';

interface SellerHeaderProps {
  seller: {
    name: string;
    logo: string;
    description: string;
    productsCount: number;
  };
}

export const SellerHeader = ({ seller }: SellerHeaderProps) => {
  return (
    <div className="flex items-center space-x-4 mb-8">
      <Image
        src={seller.logo}
        alt={`${seller.name} logo`}
        width={100}
        height={100}
        className="rounded-full"
      />
      <div>
        <h1 className="text-2xl font-bold">{seller.name}</h1>
        <p className="text-gray-600">{seller.description}</p>
        <p className="text-sm text-gray-500">{seller.productsCount} products</p>
      </div>
    </div>
  );
};
