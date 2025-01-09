'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import NewsletterSignup from './newsletter-signup';

const featuredPost = {
  title: "Summer Collection: What's Hot This Season",
  excerpt:
    "Discover the latest trends and must-have items for your summer wardrobe. From breezy dresses to stylish accessories, we've got you covered.",
  image:
    'https://jadeblue.com/cdn/shop/articles/mens_summer_wear.jpg?v=1714380887&width=1100?height=400&width=800',
  date: 'June 15, 2023',
  author: 'Emma Style',
  slug: 'summer-collection-whats-hot',
};

const recentPosts = [
  {
    title: '5 Essential Skincare Tips for Radiant Skin',
    excerpt: 'Achieve that perfect glow with these simple yet effective skincare routines.',
    image: 'https://www.shopatorient.com/cdn/shop/articles/summer_collection_2024.jpg?v=1714634283',
    date: 'June 10, 2023',
    author: 'Sophia Glow',
    slug: '5-essential-skincare-tips',
  },
  {
    title: 'The Ultimate Guide to Sustainable Fashion',
    excerpt: "Learn how to build a wardrobe that's both stylish and eco-friendly.",
    image:
      'https://www.shopatorient.com/cdn/shop/articles/Winter_Clearance_Desktop_2.jpg?v=1735626047&width=1100',
    date: 'June 5, 2023',
    author: 'Olivia Green',
    slug: 'ultimate-guide-sustainable-fashion',
  },
  {
    title: 'Tech Gadgets That Will Revolutionize Your Home',
    excerpt: 'Explore the latest smart home devices that combine convenience with style.',
    image: 'https://i.pinimg.com/originals/7e/d0/7d/7ed07dd0533c0e6e1ae94b82f9c0e233.jpg',
    date: 'May 30, 2023',
    author: 'Alex Tech',
    slug: 'tech-gadgets-revolutionize-home',
  },
];

const BlogContainer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen "
    >
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Our Blog</h1>

        {/* Featured Post */}
        <div className="mb-16">
          <article className="relative isolate flex flex-col gap-8 lg:flex-row">
            <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
              <Image
                src={featuredPost.image}
                alt=""
                fill
                className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div>
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={featuredPost.date} className="text-gray-500">
                  {featuredPost.date}
                </time>
                <span className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600">
                  Featured
                </span>
              </div>
              <div className="group relative max-w-xl">
                <h2 className="mt-3 text-3xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <span className="absolute inset-0" />
                    {featuredPost.title}
                  </Link>
                </h2>
                <p className="mt-5 text-sm leading-6 text-gray-600">{featuredPost.excerpt}</p>
              </div>
              <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                <div className="relative flex items-center gap-x-4">
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <span className="absolute inset-0" />
                      {featuredPost.author}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Recent Posts Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Posts</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg"
              >
                <div className="flex-shrink-0">
                  <Image
                    src={post.image}
                    alt=""
                    width={400}
                    height={300}
                    className="h-48 w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <Link href={`/blog/${post.slug}`} className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">{post.author}</span>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{post.author}</p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.date}>{post.date}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white py-16 sm:py-24">
          <div className="relative sm:py-16">
            <div aria-hidden="true" className="hidden sm:block">
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />
              <svg
                className="absolute top-8 left-1/2 -ml-3"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect width={404} height={392} fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
              </svg>
            </div>
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="relative rounded-2xl px-6 py-10 bg-rose-500 overflow-hidden shadow-xl sm:px-12 sm:py-20">
                <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
                  <svg
                    className="absolute inset-0 h-full w-full"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 1463 360"
                  >
                    <path
                      className="text-rose-400 text-opacity-40"
                      fill="currentColor"
                      d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                    />
                    <path
                      className="text-rose-600 text-opacity-40"
                      fill="currentColor"
                      d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                    />
                  </svg>
                </div>
                <div className="relative">
                  <div className="sm:text-center">
                    <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                      Get notified about new posts
                    </h2>
                    <p className="mt-6 mx-auto max-w-2xl text-lg text-rose-100">
                      Stay up to date with the latest trends, tips, and exclusive offers by
                      subscribing to our newsletter.
                    </p>
                  </div>
                  <NewsletterSignup />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default BlogContainer;
