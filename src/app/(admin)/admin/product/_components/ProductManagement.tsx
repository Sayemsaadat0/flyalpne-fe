import { productTableData, productTableHeader } from '@/data/admin.product.dummy.data';
import ProductTable from './ProductTable';

const ProductManagement = () => {
  return (
    <div className="max-w-[100vw]">
      <h2 className="text-2xl font-semibold">Product List</h2>
      <div className="my-14 overflow-x-hidden">
        <ProductTable headerData={productTableHeader} bodyData={productTableData} />
      </div>
    </div>
  );
};

export default ProductManagement;
