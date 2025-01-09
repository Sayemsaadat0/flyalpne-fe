import { useState } from "react";
import { Range } from "react-range";

import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { X } from 'lucide-react';

const PriceRangeSlider = () => {
  const [values, setValues] = useState([50, 1900]); // Initial range

  const MIN = 50;
  const MAX = 1900;

  return (
    <AccordionItem value="price">
      <div className="flex items-center justify-between">
        <AccordionTrigger className="text-sm font-bold text-[#227989]">
          PRICE
        </AccordionTrigger>
        <X className="h-4 w-4 text-gray-400" />
      </div>
      <AccordionContent>
        <div className="pt-4 px-2">
          <Range
            values={values}
            step={1}
            min={MIN}
            max={MAX}
            onChange={(values) => setValues(values)}
            renderTrack={({ props, children }) => (
              <div
              {...props}
              style={{
                ...props.style,
                height: "6px",
                width: "100%",
                background: `linear-gradient(to right, 
                  #ddd ${((values[0] - MIN) / (MAX - MIN)) * 100}%, 
                  #227989 ${((values[0] - MIN) / (MAX - MIN)) * 100}%,
                  #227989 ${((values[1] - MIN) / (MAX - MIN)) * 100}%, 
                  #ddd ${((values[1] - MIN) / (MAX - MIN)) * 100}%)`,
                borderRadius: "4px",
              }}
                className="bg-f-primary-1-500 rounded-md"
              >
                {children}
              </div>
            )}
            renderThumb={({ props, isDragged }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "16px",
                  width: "16px",
                  borderRadius: "50%",
                  backgroundColor: isDragged ? "#227989" : "#2D808F",
                  boxShadow: "0px 2px 6px #aaa",
                }}
              />
            )}
          />
          <div className="flex justify-between mt-4">
            <input
              type="text"
              value={`$${values[0]}`}
              className="w-20 px-2 py-1 border rounded-md text-sm"
              readOnly
            />
            <input
              type="text"
              value={`$${values[1]}`}
              className="w-20 px-2 py-1 border rounded-md text-sm"
              readOnly
            />
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default PriceRangeSlider;
