'use client'

import { Heart, Share2, Star, HelpCircle } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Button } from '@/components/ui/button'

const ProductDetails2 = () => {
    
    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Product Image Section */}
                <div className="space-y-4">
                    <div className="aspect-square relative bg-white rounded-lg overflow-hidden">
                        {/* <img
                            src="/bycycle.png"
                            alt="Alpha Beta Cycles"
                            className="object-contain w-full h-full"
                        /> */}
                    </div>
                    <div className="flex justify-center gap-2">
                        {[0, 1, 2].map((index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full ${index === 1 ? "bg-[#FE6F4E]" : "bg-gray-300"
                                    }`}
                                aria-label={`View image ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Product Details Section */}
                <div className="space-y-6">
                    <div className="flex items-start justify-between">
                        <h1 className="text-2xl font-semibold">Alpha Beta Cycles</h1>
                        <div className="flex gap-2">
                            <Button variant="ghost" size="icon">
                                <Heart className="w-5 h-5" />
                            </Button>
                            <Button variant="ghost" size="icon">
                                <Share2 className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>

                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((rating) => (
                            <Star
                                key={rating}
                                className={`w-5 h-5 ${rating <= 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                    }`}
                            />
                        ))}
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center py-2 border-b">
                            <span className="text-gray-600">Rent Per Month</span>
                            <span className="text-xl">₹720</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b">
                            <span className="text-gray-600">Refundable Deposit</span>
                            <span className="text-xl">₹1,379</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <span className="text-gray-600">Tenure (in months)</span>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <HelpCircle className="w-4 h-4 text-gray-400" />
                                    </TooltipTrigger>
                                    {/* <TooltipContent>
                                        <p>Select your rental duration</p>
                                    </TooltipContent> */}
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                        <div className="flex gap-4">
                            {/* {[3, 6, 9, 12].map((months, index) => (
                                <Card
                                    key={months}
                                    className={`flex items-center justify-center w-10 h-10 cursor-pointer transition-colors ${index === 1
                                        ? "bg-[#FE6F4E] text-white"
                                        : "hover:border-[#FE6F4E]"
                                        }`}
                                >
                                    {months}
                                </Card>
                            ))} */}
                        </div>
                    </div>

                    <p className="text-sm text-gray-600">
                        Book now at ₹10,500 and pay the remaining deposit with your first rent payment. Valid until next usage of ₹1500/Cashback.
                    </p>
                    <button className="text-[#FE6F4E] text-sm">More</button>

                    <div className="flex gap-4">
                        <Button variant="outline" className="flex-1 hover:bg-[#FE6F4E] hover:text-white">
                            Add to Cart
                        </Button>
                        <Button className="flex-1 bg-[#FE6F4E] text-white hover:bg-pink-600">
                            Rent Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails2 ; 