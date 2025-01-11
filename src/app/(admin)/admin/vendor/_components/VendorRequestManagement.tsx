import { vendorTableData, vendorTableHeader } from '@/data/admin.vendor.table.data';
import VendorTable from './VendorTable';

const VendorRequestManagement = () => {
  return (
    <div className="max-w-[100vw]">
      <h2 className="text-2xl font-semibold">Vendor Request</h2>
      <div className="my-14 overflow-x-hidden">
        <VendorTable headerData={vendorTableHeader} bodyData={vendorTableData} />
      </div>
    </div>
  );
};

export default VendorRequestManagement;
