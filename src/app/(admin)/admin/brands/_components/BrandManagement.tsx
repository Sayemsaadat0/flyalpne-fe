import { brandTableData, brandTableHeader } from '@/data/admin.brand.dummy.data';
import BrandTable from './BrandTable';

const BrandManagement = () => {
  return (
    <div className="max-w-[100vw]">
      <h2 className="text-2xl font-semibold">Brand Management</h2>
      <div className="my-14 overflow-x-hidden">
        <BrandTable headerData={brandTableHeader} bodyData={brandTableData} />
      </div>
    </div>
  );
};

export default BrandManagement;
