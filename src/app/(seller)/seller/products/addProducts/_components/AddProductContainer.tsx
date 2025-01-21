import React from 'react';
import ImageUpload from './ImageUpload';
import ProductForm from './ProductForm';

const AddProductContainer = () => {
  return (
    <div className="grid xl:grid-cols-12 gap-4">
      <div className="xl:col-span-5">
        <ImageUpload />
      </div>
      <div className="xl:col-span-7">
        <ProductForm />
      </div>
    </div>
  );
};

export default AddProductContainer;
