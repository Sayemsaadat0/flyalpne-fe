
import { notFound } from "next/navigation"
import { SellerHeader } from "./seller-header"
import { FilterSort } from "./filter-sort"
import { ProductGrid } from "./product-grid"

async function getSellerData(id: string) {
  // This is a mock function. In a real application, you would fetch this data from your API
  const seller = {
    id,
    name: "Gadget World",
    logo: "https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-6/313290190_1499534273845929_3589949204706180794_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGYjbkg6Gdc-XqmIkMa0i8_GK0XS8s644AYrRdLyzrjgGeHJcA7LpSmqGzmAnpuZFifbwCTyhpYH-sAm1I9lMAw&_nc_ohc=IpTcQfyhwnEQ7kNvgGd4yjg&_nc_oc=AdgIFBCZAHLlUTxQ6J4hIAQMN1a_OtO1CfHbc5HIW0kgYv9wZpo-g_njFXu8DX07mbk&_nc_zt=23&_nc_ht=scontent.fdac157-1.fna&_nc_gid=Ae1A2nI1Xd-n2k621rxsMsK&oh=00_AYAG4Dk4ZEKLytNNKf2HHwUFFL-NyChYLhyvXGDUMUN7RQ&oe=6779C7CB",
    description: "Your one-stop shop for all things tech and gadgets!",
    productsCount: 250,
  }
  return seller
}

async function getSellerProducts(id: string) {
  // This is a mock function. In a real application, you would fetch this data from your API
  const products = Array.from({ length: 12 }, (_, i) => ({
    id: `product-${i + 1}`,
    name: `Product ${i + 1}`,
    price: Math.floor(Math.random() * 1000) + 1,
    image: "https://img.drz.lazcdn.com/static/bd/p/2262c0dc41aabd639464d7c2e8a8412e.jpg_720x720q80.jpg_.webp",
  }))
  return products
}

export default async function SellerPageContainer({ params }: { params: { id: string } }) {
  const seller = await getSellerData(params.id)
  const products = await getSellerProducts(params.id)

  if (!seller) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8"
    >
      <SellerHeader seller={seller} />
      <FilterSort productsCount={seller.productsCount} />
      <ProductGrid products={products} />
    </div>
  )
}

