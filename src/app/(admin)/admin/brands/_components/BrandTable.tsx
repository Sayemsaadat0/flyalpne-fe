import { TBrandBodyData, THeaderData } from '@/types/types';
import Image from 'next/image';

type TCategoryTableProps = {
  headerData: THeaderData[];
  bodyData: TBrandBodyData[];
};

const BrandTable = ({ headerData, bodyData }: TCategoryTableProps) => {
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
            bodyData.map((bodyItem: TBrandBodyData) => {
              return (
                <tr
                  key={idx as number}
                  className="bg-white border-b last:border-b-0 dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[200px]"
                  >
                    <Image
                      className="rounded-xl"
                      src={bodyItem.thumbnail}
                      width={100}
                      height={100}
                      alt={bodyItem.brandName}
                    />
                  </th>
                  <td className="px-6 py-4 whitespace-nowrap">{bodyItem.brandName}</td>
                </tr>
              );
            }),
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BrandTable;
