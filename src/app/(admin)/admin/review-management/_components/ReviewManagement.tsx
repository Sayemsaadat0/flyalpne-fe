import { reviewTableData, reviewTableHeader } from '@/data/admin.review.dummy.data';
import ReviewTable from './ReviewTable';

const ReviewManagement = () => {
  return (
    <div className="max-w-[100vw]">
      <h2 className="text-2xl font-semibold">Review Management</h2>
      <div className="my-14 overflow-x-hidden">
        <ReviewTable headerData={reviewTableHeader} bodyData={reviewTableData} />
      </div>
    </div>
  );
};

export default ReviewManagement;
