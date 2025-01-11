import { THeaderData, TProductBodyData } from '@/types/types';
import Image from 'next/image';

type TProductTableProps = {
  headerData: THeaderData[];
  bodyData: TProductBodyData[];
};

const ProductTable = ({ headerData, bodyData }: TProductTableProps) => {
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
            bodyData.map((bodyItem: TProductBodyData) => {
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
                      src={bodyItem.productImage}
                      width={100}
                      height={100}
                      alt={bodyItem.name}
                    />
                  </th>
                  <td className="px-6 py-4 whitespace-nowrap">{bodyItem.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{bodyItem.brand}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{bodyItem.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{bodyItem.vendor}</td>
                </tr>
              );
            }),
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
