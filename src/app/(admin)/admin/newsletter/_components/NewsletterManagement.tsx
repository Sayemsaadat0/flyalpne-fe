import { newsletterTableData, newsletterTableHeader } from '@/data/admin.newsletter.dummy.data';
import NewsletterTable from './NewsletterTable';

const NewsletterManagement = () => {
  return (
    <div className="max-w-[100vw]">
      <h2 className="text-2xl font-semibold">Newsletter Management</h2>
      <div className="my-14 overflow-x-hidden">
        <NewsletterTable headerData={newsletterTableHeader} bodyData={newsletterTableData} />
      </div>
    </div>
  );
};

export default NewsletterManagement;
