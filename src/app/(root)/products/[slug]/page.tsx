'use client';
import React, { useState } from 'react';
import ProductDetails from '../_components/ProductDetails';
import ProductDetails2 from '../_components/ProductDetails2';
import Button from '@/components/ui/button2';

const Page = () => {
  const [activeTab, setActiveTab] = useState('page1');
  // problem
  return (
    <div>
      <div className="flex justify-end gap-3">
        <Button
          size={'sm'}
          label="Page 1"
          variant={activeTab === 'page1' ? 'primarybtn' : 'outlineBtn'}
          onClick={() => setActiveTab('page1')}
        />
        <Button
          size={'sm'}
          label="Page 2"
          variant={activeTab === 'page2' ? 'primarybtn' : 'outlineBtn'}
          onClick={() => setActiveTab('page2')}
        />
      </div>
      {activeTab === 'page1' ? <ProductDetails /> : <ProductDetails2 />}
    </div>
  );
};

export default Page;
