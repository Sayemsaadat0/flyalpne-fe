import { categoryTableData, categoryTableHeader } from '@/data/admin.category.dummy.data';
import CategoryTable from './CategoryTable';

const CategoryManagement = () => {
  return (
    <div className="max-w-[100vw]">
      <h2 className="text-2xl font-semibold">Categories</h2>
      <div className="my-14 overflow-x-hidden">
        <CategoryTable headerData={categoryTableHeader} bodyData={categoryTableData} />
      </div>
    </div>
  );
};

export default CategoryManagement;
