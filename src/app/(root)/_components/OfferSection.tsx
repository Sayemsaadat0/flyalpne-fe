import CountDownCard from '@/components/core/cards/CountDownCard';
import { ProductLoadingCard } from '@/components/core/cards/LoadingCard';
import OfferProductCard from '@/components/core/cards/OfferProductCard';
import { CurveIcon } from '@/components/core/icons/publicIcon/QuotationIcon';
import { Button } from '@/components/ui/button';
import React from 'react';

const OfferSection = () => {
  let isLoading = false;
  return (
    <div className=" bg-f-primary-2-50">
      <div className="fly-commonContainer py-10 md:py-16 space-y-10">
        <div className="flex flex-col md:flex-row gap-5 justify-between ">
          <div className="relative">
            <p className="text-w-title-3-Medium-36 lg:text-w-title-4-Medium-48 z-20 relative text-f-black-500">{`Best Deal's`}</p>
            <div className="absolute -top-5 lg:-top-2">
              <CurveIcon size={'128'} className="text-f-primary-2-200 " />
            </div>
          </div>

          <div>
            <CountDownCard target_date="2024-12-31T23:59:59" />
          </div>
        </div>

        {/* Data Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {isLoading
            ? [...new Array(2)].map(() => (
                <div key={Math.random()}>
                  <ProductLoadingCard />
                </div>
              ))
            : !isLoading &&
              [...new Array(3)].map(() => (
                <div key={Math.random()}>
                  <OfferProductCard
                    url="/"
                    thumbnail="https://i.ibb.co.com/rbTcY11/7.png"
                    title="This is The Product Name this is the product name"
                  />
                </div>
              ))}
        </div>

        <div className="flex justify-center items-center">
          <Button> View More Deals </Button>
        </div>
      </div>
      {/* title */}
    </div>
  );
};

export default OfferSection;
