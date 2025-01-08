import Image from 'next/image'
import React from 'react'

const BlogCard = () => {
    return (
        <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image alt="Person using a tablet with various apps open" className="w-full h-48 object-cover" height="400" src="https://i.pinimg.com/736x/da/a0/8a/daa08a6c7862845effa4a623c5eb1e44.jpg" width="600" />
                <div className="p-4">
                    <div className="text-sm text-gray-500 mb-2">
                        14 January, 2023
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                        The Modern Art Clay Ceramics.
                    </h2>
                    <div className="text-sm text-gray-500 mb-4">
                        <i className="fas fa-tablet-alt text-blue-500">
                        </i>
                        Tablet, News
                    </div>
                    <p className="text-gray-700 mb-4">
                        The world is an amazing place providing an incredible assortment of interesting locations across.
                    </p>
                    <a className="text-blue-500 hover:underline flex items-center" href="#">
                        Read More
                        <i className="fas fa-arrow-right ml-2">
                        </i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default BlogCard