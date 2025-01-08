import BlogCard from '@/components/core/cards/BlogCard';
import { ProductLoadingCard } from '@/components/core/cards/LoadingCard';
import ArrowIcon from '@/components/core/icons/publicIcon/ArrowIcon';
import { Button } from '@/components/ui/button';
import React from 'react';

const BlogSection = () => {
  let isLoading = false;
  return (
    <div>
      <div className="mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 relative">
            Latest news &amp; articles
            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-pink-500"></span>
          </h1>
          <Button> {<ArrowIcon />} View All Blog</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {isLoading
            ? [...new Array(3)].map(() => (
                <div key={Math.random()}>
                  <ProductLoadingCard />
                </div>
              ))
            : !isLoading &&
              [...new Array(3)].map(() => (
                <div className="mb-10" key={Math.random()}>
                  <BlogCard />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
