'use client';

import { Pencil } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const ImageUpload = () => {
  return (
    <div className="w-full max-w-3xl mx-auto p-4 space-y-6">
      {/* Main image preview */}
      <div className="p-3 border border-gray-200 rounded-lg">
        <div className="relative aspect-[765/850] w-full bg-gray-100 rounded-lg overflow-hidden ">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground p-4">
            <p className="text-center">Please choose image according to the aspected ratio</p>
            <p className="text-lg font-medium">765 X 850</p>
          </div>
          <Button
            size="icon"
            variant="secondary"
            className="absolute top-4 right-4 bg-white shadow-lg drop-shadow-lg"
          >
            <Pencil className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Thumbnail grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="relative aspect-[765/850] bg-gray-100 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              <p className="text-sm">765 X 850</p>
            </div>
            <Button
              size="icon"
              variant="secondary"
              className="absolute top-2 right-2 bg-white  scale-75 shadow-lg drop-shadow-lg"
            >
              <Pencil className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;
