import { THeaderData, TReviewBodyData } from '@/types/types';
import Image from 'next/image';

type TReviewTableProps = {
  headerData: THeaderData[];
  bodyData: TReviewBodyData[];
};

const ReviewTable = ({ headerData, bodyData }: TReviewTableProps) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headerData.map((headerItem: THeaderData) => (
              <th key={headerItem.id} scope="col" className="px-6 py-3 whitespace-nowrap">
                {headerItem.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((idx) =>
            bodyData.map((bodyItem: TReviewBodyData) => {
              return (
                <tr
                  key={idx as number}
                  className="bg-white border-b last:border-b-0 dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <Image
                      className="rounded-xl"
                      src={bodyItem.vendorLogo}
                      width={100}
                      height={100}
                      alt={bodyItem.vendorName}
                    />
                  </th>
                  <td className="px-6 py-4 whitespace-nowrap">{bodyItem.vendorName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{bodyItem.userName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Image
                      className="rounded-xl"
                      src={bodyItem.productImg}
                      width={100}
                      height={100}
                      alt={bodyItem.productName}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{bodyItem.productName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button>Action</button>
                  </td>
                </tr>
              );
            }),
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewTable;
