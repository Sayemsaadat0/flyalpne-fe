
// ------------------------------------------------------
// For Filter Menu
// ------------------------------------------------------
export const categories = [
    { name: 'Lifestyle', count: 1 },
    { name: 'Running', count: 23 },
    { name: 'Training & Gym', count: 45 },
    { name: 'Basketball', count: 11 },
    { name: 'Football', count: 15 },
    { name: 'Soccer', count: 32 },
    { name: 'Baseball', count: 8 },
    { name: 'Golf', count: 15 },
    { name: 'Skateboarding', count: 22 },
];

export const lifeStyles = ['Lifestyle', 'Running', 'Training & Gym', 'Basketball'];

export const colors = [
    'bg-blue-600',
    'bg-gray-200',
    'bg-yellow-500',
    'bg-orange-500',
    'bg-red-500',
    'bg-purple-500',
    'bg-cyan-500',
    'bg-green-500',
    'bg-lime-500',
    'bg-brown-500',
    'bg-black',
    'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500',
];



// ------------------------------------------------------
// For 'All Products' section
// ------------------------------------------------------
interface Product {
    id: number
    name: string
    price: number
    image: string
    category?: string
    discount?: number
}

export const products: Product[] = [
    {
        id: 1,
        name: "KD 8 EXT",
        price: 145.00,
        image: "https://storage.apex4u.com/4b3539eb-894c-4516-8b58-4d0555d79cc5.jpg",
    },
    {
        id: 2,
        name: "Jordan Galaxy",
        price: 599.00,
        image: "https://storage.apex4u.com/6f2d7c42-1c4b-4320-ba6d-fe7b7bd2fd72.jpg",
    },
    {
        id: 3,
        name: "Nike SB Trainerendor Leathe",
        price: 190.00,
        image: "https://storage.apex4u.com/1902e8e9-0c6e-4fc2-8296-f7758799df4d.jpg",
        discount: 15,
    },
    {
        id: 4,
        name: "Air Jordan Spike 40 iD",
        price: 220.00,
        image: "https://storage.apex4u.com/e5af71dd-f56c-4dbc-b021-981841bae1b2.jpg",
    },
    {
        id: 5,
        name: "Nike Air Footscape Magista Flyknit",
        price: 235.00,
        image: "https://storage.apex4u.com/b7384c5c-0ec5-4d5a-9458-73815d43a816.jpg",
        category: "LIFESTYLE",
        discount: 20,
    },
    {
        id: 6,
        name: "Nike Air Zoom Huarache 2K4",
        price: 200.00,
        image: "https://storage.apex4u.com/4b3539eb-894c-4516-8b58-4d0555d79cc5.jpg",
    },
    {
        id: 7,
        name: "Jordan Horizon",
        price: 230.00,
        image: "https://storage.apex4u.com/4b3539eb-894c-4516-8b58-4d0555d79cc5.jpg",
    },
    {
        id: 8,
        name: "Air Jordan XX9 Low",
        price: 185.00,
        image: "https://storage.apex4u.com/4b3539eb-894c-4516-8b58-4d0555d79cc5.jpg",
    },
    {
        id: 9,
        name: "LeBron XIII Premium AS iD",
        price: 265.00,
        image: "https://storage.apex4u.com/4b3539eb-894c-4516-8b58-4d0555d79cc5.jpg",
    },
]