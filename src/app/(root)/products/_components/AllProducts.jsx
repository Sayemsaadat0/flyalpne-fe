'use client'

import { useState } from "react";
import ProductFilters from "./Filter Products/ProductFilters";
import ProductGrid from "./ProductGrid";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Filter } from 'lucide-react';
import { motion } from "framer-motion";

const AllProducts = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
        >
            {/* Mobile filter button */}
            <div className="sticky top-0 z-10 bg-background p-4 md:hidden">
                <Sheet  open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                    <SheetTrigger asChild>
                        <button className="w-full border-2 flex justify-center items-center gap-1 font-semibold py-2 rounded-lg">
                            <Filter className="mr-2 h-4 w-4" /> Filters
                        </button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] overflow-y-scroll sm:w-[400px]">
                        <ProductFilters />
                    </SheetContent>
                </Sheet>
            </div>

            {/* Main content */}
            <div className="lg:-mt-20 mb-40 mx-4 flex justify-between items-start">
                {/* Desktop filters */}
                <div className="hidden md:block ">
                    <ProductFilters />
                </div>

                {/* Product grid */}
                <div className="w-full md:w-3/4">
                    <ProductGrid />
                </div>
            </div>
        </motion.div>
    );
};

export default AllProducts;

