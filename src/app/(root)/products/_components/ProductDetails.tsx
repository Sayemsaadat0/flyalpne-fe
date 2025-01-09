'use client'

import { useState } from 'react'
import { Heart, Package, PhoneCall, Gift, Plus, Minus } from 'lucide-react';
import Image from 'next/image'
import Button from '@/components/ui/button2'
// import Image from 'next/image'

const ProductDetails = () => {
    const [selectedImage, setSelectedImage] = useState(0)
    const [quantity, setQuantity] = useState(1)

    const images = [
        'https://i.pinimg.com/736x/5f/37/39/5f373951a8187cfddc1ff9caaf079966.jpg',
        'https://placehold.co/600x400/000000/FFFFFF/png',
        'https://placehold.co/600x400/000000/FFFFFF/png',
        'https://placehold.co/600x400/000000/FFFFFF/png'
    ]


    const [activeTab, setActiveTab] = useState('additional');

    const renderTabs = (tab: string) => {
        switch (tab) {
            case 'additional':
                return <div>Additional Content</div>;

            case 'settings':
                return <div>Settings Content</div>;

            case 'profile':
                return <div>Profile Content</div>;

            default:
                return <div>Select a Tab</div>;
        }
    }

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Left Sidebar */}
                <div className="md:col-span-2 space-y-6">
                    <div className="text-center space-y-2">
                        <div className="bg-blue-50 p-4 rounded-lg inline-block">
                            <Package className="h-6 w-6 text-blue-600 mx-auto" />
                        </div>
                        <h3 className="font-medium">Free Shipping</h3>
                        <p className="text-sm text-gray-500">on orders over $49.00</p>
                    </div>

                    <div className="text-center space-y-2">
                        <div className="bg-purple-50 p-4 rounded-lg inline-block">
                            <svg className="h-6 w-6 text-purple-600 mx-auto" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
                            </svg>
                        </div>
                        <h3 className="font-medium">7 Days Money Back</h3>
                        <p className="text-sm text-gray-500">30 days money back</p>
                    </div>

                    <div className="text-center space-y-2">
                        <div className="bg-green-50 p-4 rounded-lg inline-block">
                            <PhoneCall className="h-6 w-6 text-green-600 mx-auto" />
                        </div>
                        <h3 className="font-medium">Online Support</h3>
                        <p className="text-sm text-gray-500">support online 24 all day</p>
                    </div>

                    <div className="text-center space-y-2">
                        <div className="bg-red-50 p-4 rounded-lg inline-block">
                            <Gift className="h-6 w-6 text-red-600 mx-auto" />
                        </div>
                        <h3 className="font-medium">Gift Promotion</h3>
                        <p className="text-sm text-gray-500">on orders over $99.00</p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="md:col-span-5">
                    <div className="relative aspect-square border rounded-md">
                        <Image width={400} height={600} src={images[selectedImage]} className='object-cover w-full h-full' alt={images[selectedImage]} />

                        {/* images[selectedImage] */}
                    </div>
                    <div className="flex gap-4 mt-4">
                        {images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSelectedImage(idx)}
                                className={`relative aspect-square w-20 rounded-lg overflow-hidden border-2 ${selectedImage === idx ? 'border-blue-600' : 'border-transparent'
                                    }`}
                            >
                                <Image
                                    src={img}
                                    width={200}
                                    height={200}
                                    alt={`Product thumbnail ${idx + 1}`}
                                    //   fill
                                    className="object-cover w-full h-full"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Details */}
                <div className="md:col-span-5 space-y-6">
                    <div>
                        <h1 className="text-2xl font-bold mb-2">iPhone 15 Pro Max Natural Titan</h1>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span>Stock: In Stock</span>
                            <span>•</span>
                            <span>0 reviews</span>
                        </div>
                    </div>

                    <p className="text-gray-600">
                        Smartphone Integration - Supports Apple CarPlay and Android Auto, enabling seamless integration with your smartphone. Safely access your favorites.
                    </p>

                    <div className="flex items-baseline gap-4">
                        <span className="text-3xl font-bold text-blue-600">$72.00</span>
                        <span className="text-lg text-gray-500 line-through">$95.00</span>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-sm">4 or more $61.00</div>
                        <div className="grid grid-cols-4 gap-2 mt-2">
                            {[
                                { qty: 150, due: '01/05' },
                                { qty: 47, due: '01/06' },
                                { qty: 47, due: '01/07' },
                                { qty: 94, due: '01/08' }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-blue-600 text-white p-2 rounded text-center text-sm">
                                    <div>{item.qty}</div>
                                    <div>{item.due}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <span className="font-medium">Quantity:</span>
                            <div className="flex items-center border rounded-lg">
                                <button
                                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                                    className="p-2 hover:bg-gray-100"
                                >
                                    <Minus className="h-4 w-4" />
                                </button>
                                <input
                                    type="number"
                                    value={quantity}
                                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                    className="w-16 text-center border-x"
                                />
                                <button
                                    onClick={() => setQuantity(prev => prev + 1)}
                                    className="p-2 hover:bg-gray-100"
                                >
                                    <Plus className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                                ADD TO CART
                            </button>
                            <button className="flex-1 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700">
                                BUY NOW
                            </button>
                        </div>

                        <div className="flex gap-4 text-sm text-gray-600">
                            <button className="flex items-center gap-2">
                                <Heart className="h-4 w-4" />
                                Add to Wishlist
                            </button>
                            <button className="flex items-center gap-2">
                                <svg className="h-4 w-4" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M17,13V11H7V13H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                                </svg>
                                Add to Compare
                            </button>
                        </div>
                    </div>

                    <div className="space-y-2 pt-4 border-t">
                        <div className="flex gap-2">
                            <span className="font-medium">Brand:</span>
                            <span className="text-gray-600">Software</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="font-medium">Product Code:</span>
                            <span className="text-gray-600">40-9</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="font-medium">Tags:</span>
                            <span className="text-gray-600">fashion</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='space-y-10'>
                <div className="space-x-5">
                    <Button size={'sm'} label='Additional' variant={activeTab === 'additional' ? 'primarybtn' : 'outlineBtn'} onClick={() => setActiveTab('additional')} />
                    <Button size={'sm'} label='Settings' variant={activeTab === 'settings' ? 'primarybtn' : 'outlineBtn'} onClick={() => setActiveTab('settings')} />
                    <Button size={'sm'} label='Profile' variant={activeTab === 'profile' ? 'primarybtn' : 'outlineBtn'} onClick={() => setActiveTab('profile')} />
                </div>
                <div className="tab-content">{renderTabs(activeTab)}</div>
            </div>
        </div>
    )
}



export default ProductDetails