import { notFound } from 'next/navigation';
import { SellerHeader } from './seller-header';
import { FilterSort } from './filter-sort';
import { ProductGrid } from './product-grid';

const getSellerData = async (id: string) => {
  // This is a mock function. In a real application, you would fetch this data from your API
  const seller = {
    id,
    name: 'Gadget World',
    logo: 'https://cdn.dribbble.com/users/8797833/screenshots/17364984/oraimo_logo_design_01_1x.jpg',
    description: 'Your one-stop shop for all things tech and gadgets!',
    productsCount: 250,
  };
  return seller;
};

const getSellerProducts = async (id: string) => {
  // This is a mock function. In a real application, you would fetch this data from your API
  const products = Array.from({ length: 12 }, (_, i) => ({
    id: `product-${i + 1}`,
    name: `Product ${i + 1}`,
    price: Math.floor(Math.random() * 1000) + 1,
    image:
      'https://img.drz.lazcdn.com/static/bd/p/2262c0dc41aabd639464d7c2e8a8412e.jpg_720x720q80.jpg_.webp',
  }));
  return products;
};

const SellerPageContainer = async ({ params }: { params: { id: string } }) => {
  const seller = await getSellerData(params.id);
  const products = await getSellerProducts(params.id);

  if (!seller) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <SellerHeader seller={seller} />
      <FilterSort productsCount={seller.productsCount} />
      <ProductGrid products={products} />
    </div>
  );
};

export default SellerPageContainer;
